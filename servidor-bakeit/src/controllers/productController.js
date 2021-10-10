const db = require('../database/models');
const path = require('path');
const {eliminar} = require('../herramientas/herramientas');
const { validationResult } = require('express-validator');

const Producto = db.Producto;
const Categoria = db.Categoria;
const Imagen = db.Imagen;
const Producto_Imagen = db.Producto_Imagen;

const controlador = {

    getDetail: async (req, res) => {
        const {id} = req.params;
        const producto = await Producto.findByPk(id,{
            include : ["categoria","awards","imagenes",{association: "recomendados", include: ['imagenes'] }]
        });        
        producto.elementos = producto.elementos.split("+");    
        res.render('product/detail', { producto });
    },
    getCart: (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
        return res.render('product/cart');        
    },
    getProducts: async (req, res) => {               
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");

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
        
    },
    getProductID: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");

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

    },
    postProduct: async (req, res) => {

        if (!req.session.usuarioLoggeado)
            return res.redirect("/");

        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){  
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
            return res.render('product/edit', {
                productos, 
                categorias,                 
                edicion: -1,
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        else{

            const files = req.files;
            let elementosArray = [];
            let imagenesArray = [];

            if (req.body.elementos != undefined)
                elementosArray = req.body.elementos.split('\r\n');
            for (let i = 0; i < elementosArray.length; i++)
                if ((elementosArray[i].trim()).length <= 0)
                    elementosArray.splice(i--, 1);
            if (files != undefined)
                imagenesArray = files.map(img => {
                    return img.filename;
                });       
            for (let i = 0; i < 4; i++)
                if (imagenesArray[i] == undefined)
                    imagenesArray[i] = process.env.PLACEHOLDER_IMG; 
            
            const elementos = elementosArray.join("+");
            const imagenes = await Imagen.registrar(imagenesArray);

            const producto = {
                ...req.body,
                elementos,
            }  
            delete producto.imagenes;

            Producto.create(producto).then(p =>{            
                const productoID = p.id;
                const producto_imagen = imagenes.map(img => {
                    return {
                        producto_id: productoID, 
                        imagen_id: img                  
                    }                
                });
                Producto_Imagen.bulkCreate(producto_imagen).then(() => {
                    res.redirect("/products");
                });
            })


        }
        
    },
    putProductID: async (req, res) => {

        if (!req.session.usuarioLoggeado)
            return res.redirect("/");

        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){  

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
            return res.render('product/edit', {
                productos, 
                categorias,                 
                edicion: index,
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        else{

            const { id } = req.params;
            const producto = await Producto.findByPk(id,{include: ["imagenes"]});

            const files = req.files;
            let elementosArray = [];
            let imagenesArray = [];
    
            if (req.body.elementos != undefined)
                elementosArray = req.body.elementos.split('\r\n');
            for (let i = 0; i < elementosArray.length; i++)
                if ((elementosArray[i].trim()).length <= 0)
                    elementosArray.splice(i--, 1);
            if (files != undefined)
                imagenesArray = files.map(img => {
                    return img.filename;
                });       
            for (let i = 0; i < 4; i++)
                if (imagenesArray[i] == undefined)
                    imagenesArray[i] = (producto.imagenes[i])? producto.imagenes[i].url : process.env.PLACEHOLDER_IMG;             
    
            const elementos = elementosArray.join("+");
            const imagenes = await Imagen.registrar(imagenesArray);
    
            const edicionproducto = {
                ...req.body,
                id : producto.id,            
                elementos        
            }
            delete producto.imagenes;
            
            Producto.update(edicionproducto,{
                where: {id: producto.id}
            }).then(async (p)=>{            
                await Producto_Imagen.eliminar(producto.id);     
                const producto_imagen = imagenes.map(img => {
                    return {
                        producto_id: producto.id, 
                        imagen_id: img                  
                    }                
                });
                Producto_Imagen.bulkCreate(producto_imagen).then(() => {
                    res.redirect("/products");
                });
            })  

        }
                     
    },
    deleteProductID: async (req, res) => {

        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
            
        const { id } = req.params;
        await Producto.eliminar(id);
        res.redirect("/products");
    }
};

module.exports = controlador;