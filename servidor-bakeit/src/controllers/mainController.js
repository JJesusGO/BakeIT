const db = require('../database/models');

const controlador = {

    getIndex: (req, res) => {
        res.render('index');
    },
    getGaleria: async (req, res) => {

        const [productos, categorias] = await Promise.all([
            db.Producto.findAll({
                include: ["imagenes", "awards"]
            }),
            db.Categoria.findAll({
                include: ["imagen"]
            })
        ]);
        res.render('galeria', { productos, categorias });
    },
    getHistory: (req, res) => {
        res.render('history');
    },
    getKnowUs: (req, res) => {
        res.render('knowUs');
    }
};

module.exports = controlador;