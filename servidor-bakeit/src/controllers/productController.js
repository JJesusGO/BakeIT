const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const { productos, agregarProducto, editarProducto, eliminarProducto } = require("../models/Product");
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const Producto = db.Producto;

const controlador = {

    getDetail: (req, res) => {
        let productoSeleccionado;
        for (let product of products) {
            if (product.id == req.params.id) {
                productoSeleccionado = product;
            }
        }
        res.render('product/detail', { producto: productoSeleccionado });
    },
    getCart: (req, res) => {
        if (req.session.usuarioLoggeado)
            return res.render('product/cart');
        return res.redirect("/");
    },
    getProducts: (req, res) => {
        if (req.session.usuarioLoggeado)
            return res.render('product/edit', { productos, edicion: -1 });
        return res.redirect("/");
    },
    getProductID: (req, res) => {
        if (req.session.usuarioLoggeado) {
            const { id } = req.params;
            const index = productos.findIndex(producto => producto.id === id);
            return res.render('product/edit', { productos, edicion: index });
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
    },

    //CRUD con base de datos
    list: (req, res) => {
        Producto.findAll({
                include: ['categoria', 'awards', 'imagenes', 'recomendados', 'recomendado']
            })
            .then(producto => {
                res.json(producto);
            })
    },
    detail: (req, res) => {
        Producto.findByPk(req.params.id, {
                include: ['categoria', 'awards', 'imagenes', 'recomendados', 'recomendado']

            })
            .then(function(producto) {
                res.json(producto);
            })
    },
    add: (req, res) => {
        return res.render('product/add');
    },
    create: (req, res) => {
        Producto.create({
            tipo: req.body.tipo,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria_id: req.body.categoria,
            precio: req.body.precio,
            elementos: req.body.elementos,
            porciones: req.body.porciones
        }).then((producto) => {
            let productId = producto.id;
            for (i = 0; i < req.files.length; i++) {
                db.Imagen.create({
                        url: req.files[i].filename,
                    })
                    .then((imagen) => {
                        db.Producto_Imagen.create({
                            producto_id: productId,
                            imagen_id: imagen.id
                        })
                    })
            }
        }).catch(function(err) {
            console.log(err);
        });
        res.redirect("/");
    },
    search: (req, res) => {
        return res.render('products/find');
    },
    find: (req, res) => {
        let nombre = req.body.nombre
        Producto.findOne({
                include: ['categoria', 'awards', 'imagenes', 'recomendaciones', 'recomendado'],
                where: {
                    nombre: nombre
                }
            })
            .then(producto => {
                res.render('products/detail', { producto: producto });
            });
    },
    edit: (req, res) => {
        Producto.findByPk(req.params.id, {
                include: ['categoria', 'awards', 'imagenes', 'recomendaciones', 'recomendado']
            })
            .then(function(producto) {
                return res.render('product/update', { productos: producto });
            })
    },
    update: (req, res) => {
        let productId = req.params.id;
        Producto.update({
                tipo: req.body.tipo,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                categoria_id: req.body.categoria,
                precio: req.body.precio,
                elementos: req.body.elementos,
                porciones: req.body.porciones
            }, {
                where: { id: productId }
            })
            .then(() => {
                return res.redirect('product/update')
            })
            .catch(error => res.send(error))
    },
    delete: (req, res) => {
        Producto.findByPk(req.params.id, {
                include: ['categoria', 'awards', 'imagenes', 'recomendaciones', 'recomendado']
            })
            .then(function(producto) {
                return res.render('product/delete/' + producto.id, { productos: producto });
            })
    },
    destroy: function(req, res) {
        let productId = req.params.id;
        Producto
            .destroy({ where: { id: productId }, force: true })
            .then(() => {
                return res.redirect('/')
            })
            .catch(error => res.send(error))
    }

};

module.exports = controlador;