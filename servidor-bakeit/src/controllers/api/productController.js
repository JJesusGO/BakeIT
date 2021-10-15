const db = require('../../database/models');

const productController = {
    products: (req, res) => {
        db.Producto.findAll({
            attributes: ['id', 'nombre', 'tipo', 'descripcion'],
            include: ["recomendados"]
        }).then(products => {
            let data = [];
            let postres = 0;
            let kits = 0;

            for(let i=0; i<products.length; i++) {
                let product = products[i].dataValues;
                product.detail ="http://localhost:3000/api/products/" + product.id;
                data.push(product)
                product.tipo == 'postre' ? postres++ : kits++
            }

            let countByCategory = {
                Postres: postres,
                Kits: kits,
            }

            let response = {
                count: data.length,
                countByCategory: countByCategory,
                products: data
            }
            res.json(response);
            
        }).catch(error => res.send(error))
    },

    productsDetail: (req, res) => {
        let productId = req.params.id;
        db.Producto.findByPk(productId, {
            attributes: ['id', 'nombre', 'tipo', 'descripcion', 'categoria_id', 'precio', 'elementos', 'porciones'],
            include: ['categoria', 'awards','imagenes', 'recomendados', 'recomendado', 'carritos']
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
    }
}

module.exports = productController;