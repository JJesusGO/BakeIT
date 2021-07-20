const uniqid = require('uniqid');
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
        const index = productos.findIndex(producto => producto.id === id);
        res.render('product/edit', { productos, edicion: index });
    },    
    postProduct: (req, res) => {   
        const files = req.files;         
        let elementos = [];
        let imagenes = [];

        if(req.body.elementos!=undefined) 
            elementos = req.body.elementos.split('\r\n');
        for(let i=0;i<elementos.length;i++)
            if((elementos[i].trim()).length <= 0)
                elementos.splice(i--,1);
        if(files!=undefined) 
            imagenes = files.map(img=>{
                return "/data/products/"+img.filename;
            });
        for(let i = 0; i < 4; i++) 
            if(imagenes[i]==undefined)
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

        if(req.body.elementos!=undefined) 
            elementos = req.body.elementos.split('\r\n');
        for(let i=0;i<elementos.length;i++)
            if((elementos[i].trim()).length <= 0)
                elementos.splice(i--,1);
        if(files!=undefined) 
            imagenes = files.map(img=>{
                return "/data/products/"+img.filename;
            });
        for(let i = 0; i < 4; i++) 
            if(imagenes[i]==undefined)
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