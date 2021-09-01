const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const categorias = ['Todos', 'Natillas y pudines', 'Postres fríos', 'Galletas', 'Pasteles', 'Pays', 'Hojaldres y bollos', 'Kits'];

const controlador = {

    getIndex: (req, res) => {
        res.render('index');
    },
    getGaleria: (req, res) => {
        // Prueba de acceso a la base de datos.
        db.Categoria.findAll()
            .then(categoriasDB => {
                console.log(categoriasDB);
            })
            .catch(error => {
                console.log(error);
            })
        // Aquí termina la prueba.

        res.render('galeria', { productos: products, categorias: categorias });
    }
};

module.exports = controlador;