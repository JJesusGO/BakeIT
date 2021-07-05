const path = require('path');

const controlador = {

    detail: (req, res) => {
        res.render('productDetail');
    },

    cart: (req, res) => {
        res.render('productCart');
    }

};


module.exports = controlador;