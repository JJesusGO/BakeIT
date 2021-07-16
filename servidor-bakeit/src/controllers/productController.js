const { productos, agregarProducto, editarProducto, eliminarProducto} = require("../data/products");

const controlador = {

    getDetail: (req, res) => {
        res.render('product/detail');
    },
    getCart: (req, res) => {
        res.render('product/cart');
    },
    getProducts: (req, res) => {
        res.render('product/edit', { productos, edicion: -1 });
    },
    getProductID: (req, res) => {
        const { id } = req.params;
        res.render('product/edit', { productos, edicion: id });
    },    
    postProduct: (req, res) => {
        const { nombre, edicion } = req.body;
        let posicion = "";
        if (nombre != undefined) {
            agregarProducto(req.body);
            posicion = "#";
        } else if (edicion != undefined)
            posicion = "/" + edicion + "#control";
        res.redirect("/products/edit" + posicion);
    },
    putProductID: (req, res) => {
        const { id } = req.params;
        editarProducto(id, req.body);
        res.redirect("/products/edit");
    },
    deleteProductID: (req, res) => {
        const { id } = req.params;
        eliminarProducto(id);
        res.redirect("/products/edit");
    }
    
};

module.exports = controlador;