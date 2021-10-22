const db = require('../../database/models');

const productController = {
    products: (req, res) => {
        db.Producto.findAll({
            attributes: ['id', 'nombre', 'tipo', 'descripcion'],
            include: ['recomendados', 'categoria',"imagenes"]
        }).then(products => {

            db.Categoria.findAll({
                attributes: ['id', 'tipo', 'nombre'],
                include: ['productos']
            }).then(category => {

                let data = [];
                for(let i=0; i<products.length; i++) {
                    let product = products[i].dataValues;
                    product.detail ="http://localhost:3001/api/products/" + product.id;
                    product.img = "http://localhost:3001/data/products/" + product.imagenes[0].url,
                    data.push(product)
                }
    
                let countByCategory = [
                    {label : 'Postre - Natillas y pudines', count:category[0].productos.length},
                    {label : 'Postre - Postres fríos', count:category[1].productos.length},
                    {label : 'Postre - Galletas', count:category[2].productos.length},
                    {label : 'Postre - Pasteles', count:category[3].productos.length},
                    {label : 'Postre - Pays', count:category[4].productos.length},
                    {label : 'Postre - Hojaldres y bollos', count:category[5].productos.length},
                    {label : 'Kit - Pareja', count:category[6].productos.length},
                    {label : 'Kit - Grupal', count:category[7].productos.length},
                ]
    
                let response = {
                    count: data.length,
                    countByCategory: countByCategory,
                    products: data
                }
                res.json(response);
            }).catch(error => res.send(error))
        }).catch(error => res.send(error))
    },

    productsDetail: (req, res) => {
        let productId = req.params.id;
        if(productId == "latest"){            
            db.Producto.findAll({
                attributes: ['id'],
            }).then(products => {
                let index = -1;
                let max = 0;
                for (let i = 0; i < products.length; i++) {
                    let product = products[i].dataValues;
                    if(product.id >= max){
                        max = product.id;
                        index = i;
                    }                     
                }            

                if(index==-1)
                    return res.json({});
                productId = products[index].dataValues.id;
                db.Producto.findByPk(productId, {
                    attributes: ['id', 'nombre', 'tipo', 'descripcion', 'categoria_id', 'precio', 'elementos', 'porciones'],
                    include: ['categoria','imagenes']
                }).then(productResponse => {
                    let product = productResponse.dataValues;                    
                    product.url = {
                        Img1: "http://localhost:3001/data/products/" + product.imagenes[0].url,
                        Img2: "http://localhost:3001/data/products/" + (product.imagenes[1].url || product.imagenes[0].url),
                        Img3: "http://localhost:3001/data/products/" + (product.imagenes[2].url || product.imagenes[0].url),
                        Img4: "http://localhost:3001/data/products/" + (product.imagenes[3].url || product.imagenes[0].url),
                    }

                    res.json(product);
    
                }).catch(error => res.send(error));

            });
        }
        else{
            db.Producto.findByPk(productId, {
                attributes: ['id', 'nombre', 'tipo', 'descripcion', 'categoria_id', 'precio', 'elementos', 'porciones'],
                include: ['categoria','imagenes']
            }).then(productResponse => {
                let product = productResponse.dataValues;

                product.url = {
                    Img1: "http://localhost:3001/data/products/" + product.imagenes[0].url,
                    Img2: "http://localhost:3001/data/products/" + (product.imagenes[1].url || product.imagenes[0].url),
                    Img3: "http://localhost:3001/data/products/" + (product.imagenes[2].url || product.imagenes[0].url),
                    Img4: "http://localhost:3001/data/products/" + (product.imagenes[3].url || product.imagenes[0].url),
                }
                res.json(product);

            }).catch(error => res.send(error));
        }
    },

    productsCategory: (req, res) => {
        db.Categoria.findAll({
            attributes: ['id', 'tipo', 'nombre'],
            include: ['productos']
        }).then(category => {
            res.json(category);
        }).catch(error => res.send(error))
    }
}

module.exports = productController;