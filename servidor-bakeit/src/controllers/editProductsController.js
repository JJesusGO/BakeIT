const controller = {

    getEditProducts: (req, res) => {
        res.render('productDetail');
    },
    postProducts: (req, res) => {
        res.json({});
    },
    putProducts: (req, res) => {
        res.json({});
    }

};


module.exports = controller;