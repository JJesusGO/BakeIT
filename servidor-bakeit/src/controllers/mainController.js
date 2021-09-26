const db = require('../database/models');

const controlador = {

    getIndex: (req, res) => {
        res.render('index');
    },
    getGaleria: async (req, res) => {

        const [productos,categorias] = await  Promise.all([
            db.Producto.findAll({
                include: ["imagenes","awards"]
            }),
            db.Categoria.findAll({})
        ]);        
        res.render('galeria', { productos, categorias});
    }
};

module.exports = controlador;