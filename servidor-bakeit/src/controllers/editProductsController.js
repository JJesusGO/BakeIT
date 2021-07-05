const { productos } = require("../db/productos");

const controller = {
    edicion : -1,
    getEditProducts: (req, res) => {        
        res.render('productEdit',{productos,edicion:controller.edicion});
    },
    postProducts: (req, res) => {
        res.render('productEdit',{productos,edicion:controller.edicion});
    },
    putProducts: (req, res) => {
        res.render('productEdit',{productos,edicion:controller.edicion});
    }
};

module.exports = controller;