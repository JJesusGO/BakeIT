const db = require('../database/models');

const Producto = db.Producto;
const Categoria = db.Categoria;

const controlador = {

    getDetail: async (req, res) => {
        const {id} = req.params;
        const producto = await Producto.findByPk(id,{
            include : ["categoria","awards","imagenes",{model: Producto, as: "recomendados", include: ['imagenes'] }]
        });        
        producto.elementos = producto.elementos.split("+");        
        res.render('product/detail', { producto });
    },
    getCart: (req, res) => {
        if (req.session.usuarioLoggeado)
            return res.render('product/cart');
        return res.redirect("/");
    },
    getProducts: async (req, res) => {               
        if (req.session.usuarioLoggeado){
            const [productosPeticion,categorias] = await Promise.all([
                Producto.findAll({
                    include : ["categoria","awards","imagenes"]
                }),
                Categoria.findAll()
            ]);
            const productos = productosPeticion.map(producto => {
                producto.elementos = producto.elementos.split("+");
                return producto;
            });
            return res.render('product/edit', { productos, categorias,edicion: -1 });
        }            
        return res.redirect("/");
    },
    getProductID: async (req, res) => {
        if (req.session.usuarioLoggeado) {
            const { id } = req.params;
            const [productosPeticion,categorias] = await Promise.all([
                Producto.findAll({
                    include : ["categoria","awards","imagenes"]
                }),
                Categoria.findAll()
            ]);
            const productos = productosPeticion.map(producto => {
                producto.elementos = producto.elementos.split("+");
                return producto;
            });
            const index = productos.findIndex(producto => producto.id.toString() == id.toString());         
            return res.render('product/edit', { productos, categorias, edicion: index });
        }
        return res.redirect("/");
    },
    postProduct: (req, res) => {
        const files = req.files;
        let elementos = [];
        let imagenes = [];

        if (req.body.elementos != undefined)
            elementos = req.body.elementos.split('\r\n');
        for (let i = 0; i < elementos.length; i++)
            if ((elementos[i].trim()).length <= 0)
                elementos.splice(i--, 1);
        if (files != undefined)
            imagenes = files.map(img => {
                return "/data/products/" + img.filename;
            });
        for (let i = 0; i < 4; i++)
            if (imagenes[i] == undefined)
                imagenes[i] = "/media/img/placeholder.png";

        const id = uniqid();
        const producto = {
            ...req.body,
            elementos,
            imagenes,
            id
        }
        agregarProducto(producto);
        res.redirect("/products/edit");
    },
    putProductID: (req, res) => {
        const { id } = req.params;
        const producto = productos.find(producto => producto.id === id);

        const files = req.files;
        let elementos = [];
        let imagenes = [];

        if (req.body.elementos != undefined)
            elementos = req.body.elementos.split('\r\n');
        for (let i = 0; i < elementos.length; i++)
            if ((elementos[i].trim()).length <= 0)
                elementos.splice(i--, 1);
        if (files != undefined)
            imagenes = files.map(img => {
                return "/data/products/" + img.filename;
            });
        for (let i = 0; i < 4; i++)
            if (imagenes[i] == undefined)
                imagenes[i] = producto.imagenes[i];

        const edicionproducto = {
            ...producto,
            ...req.body,
            elementos,
            imagenes,
        }
        editarProducto(edicionproducto);
        res.redirect("/products/edit");
    },
    deleteProductID: (req, res) => {
        const { id } = req.params;
        eliminarProducto(id);
        res.redirect("/products/edit");
    }
};

module.exports = controlador;