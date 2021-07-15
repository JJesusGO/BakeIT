const { productos, agregarProducto, editarProducto } = require("../data/productos");

const controller = {
    getProducts: (req, res) => {
        res.render('product/edit', { productos, edicion: -1 });
    },
    getProductsIndex: (req, res) => {
        const { index } = req.params;
        res.render('product/edit', { productos, edicion: index });
    },
    postProducts: (req, res) => {
        const { nombre, edicion } = req.body;
        let posicion = "";
        if (nombre != undefined) {
            agregarProducto(req.body);
            posicion = "#";
        } else if (edicion != undefined)
            posicion = "/" + edicion + "#control";
        res.redirect("/products-edit" + posicion);
    },
    putProductsIndex: (req, res) => {
        const { index } = req.params;
        editarProducto(parseInt(index), req.body);
        res.redirect("/products-edit");
    }
};

module.exports = controller;