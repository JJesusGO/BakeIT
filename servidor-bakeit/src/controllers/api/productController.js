const db = require('../../database/models');

const productController = {
    products: (req, res) => {
        db.Producto.findAll({
            attributes: ['id', 'nombre', 'tipo', 'descripcion'],
            include: ['recomendados', 'categoria']
        }).then(products => {

            db.Categoria.findAll({
                attributes: ['id', 'tipo', 'nombre'],
                include: ['productos']
            }).then(category => {

                let data = [];
                for(let i=0; i<products.length; i++) {
                    let product = products[i].dataValues;
                    product.detail ="http://localhost:3000/api/products/" + product.id;
                    data.push(product)
                }
    
                let countByCategory = {
                    'Postre - Natillas y pudines': category[0].productos.length,
                    'Postre - Postres fríos': category[1].productos.length,
                    'Postre - Galletas': category[2].productos.length,
                    'Postre - Pasteles': category[3].productos.length,
                    'Postre - Pays': category[4].productos.length,
                    'Postre - Hojaldres y bollos': category[5].productos.length,
                    'Kit - Pareja': category[6].productos.length,
                    'Kit - Grupal': category[7].productos.length,
                }
    
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
        db.Producto.findByPk(productId, {
            attributes: ['id', 'nombre', 'tipo', 'descripcion', 'categoria_id', 'precio', 'elementos', 'porciones'],
            include: ['categoria', 'awards','imagenes', 'recomendados', 'recomendado', 'carritos', 'ofertas']
        }).then(productResponse => {
            let product = productResponse.dataValues;

            product.url = {
                Img1: "http://localhost:3000/data/products/" + product.imagenes[0].url,
                Img2: "http://localhost:3000/data/products/" + product.imagenes[1].url,
                Img3: "http://localhost:3000/data/products/" + product.imagenes[2].url,
                Img4: "http://localhost:3000/data/products/" + product.imagenes[3].url,
            }
            res.json(product);

        }).catch(error => res.send(error))
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