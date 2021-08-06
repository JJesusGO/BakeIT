const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const categorias = ['Todos', 'Natillas y pudines', 'Postres fríos', 'Galletas', 'Pasteles', 'Pays', 'Hojaldres y bollos', 'Kits'];

const controlador = {

    getIndex: (req, res) => {
        res.render('index');
    },
    getGaleria: (req, res) => {
        res.render('galeria', { productos: products, categorias: categorias });
    }
};

module.exports = controlador;