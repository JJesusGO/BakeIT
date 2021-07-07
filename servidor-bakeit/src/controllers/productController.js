const controlador = {

    getDetail: (req, res) => {
        res.render('product/detail');
    },

    getCart: (req, res) => {
        res.render('product/cart');
    }

};


module.exports = controlador;