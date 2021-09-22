const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

//Llamado a modelos
const Usuario = db.Usuario;

const controller = {
    getLogin: (req, res) => {
        res.render('user/login');
    },

    getRegister: (req, res) => {
        res.render('user/register');
    },

    login: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('user/login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        Usuario.findOne({
                where: {
                    correo: req.body.correo
                },
                include: ['permiso', 'imagen', 'carritos'],
            })
            .then((userLogin) => {
                if (userLogin) {
                    let passCompare = bcrypt.compareSync(req.body.contrasena, userLogin.contrasena);
                    if (passCompare) {
                        delete userLogin.contrasena;
                        req.session.usuarioLoggeado = userLogin;
                        if (req.body.recordar)
                            res.cookie('id', userLogin.id, { maxAge: (1000 * 60) * 2 });
                        return res.redirect('/')
                    }
                    return res.render('user/login', {
                        errors: {
                            contrasena: {
                                msg: 'Contraseña incorrecta'
                            }
                        },
                        oldData: req.body
                    });
                }
                return res.render('user/login', {
                    errors: {
                        correo: {
                            msg: 'El correo ingresado no se encuentra registrado'
                        }
                    },
                    oldData: req.body
                });
            })
            .catch(error => res.send(error))
    },

    logout: (req, res) => {
        req.session.usuarioLoggeado = null;
        res.clearCookie('id');
        res.redirect('/');
    },
    /*
    register: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('user/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let emailRegistered = user.User.findByEmail(req.body.correo);

        if (emailRegistered) {
            return res.render('user/register', {
                errors: {
                    correo: {
                        msg: 'Este correo ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        }

        let newUser = user.User.createUser(req.body, req.file);
        res.redirect('/user/login');
    },
    */
    resetPassword: (req, res) => {
        res.render('user/resetPassword');
    },

    //CRUD
    add: function(req, res) {
        res.render('user/register');

    },
    create: function(req, res) {
        db.Imagen.create({
            url: req.file.filename,
        }).then((imagen) => {
            console.log(imagen.id);
            Usuario.create({
                permiso_id: 1,
                nombre: req.body.nombre,
                apellidos: req.body.apellido,
                fecha_nacimiento: req.body.fechaNacimiento,
                correo: req.body.correo,
                contrasena: bcrypt.hashSync(req.body.contrasena, 10),
                imagen_id: imagen.id
            }); //.then((newUser) => {
            res.redirect("/user/login");
        })
    },
    edit: function(req, res) {
        Usuario.findByPk(req.params.id)
            .then((usuario) => {
                return res.render('user/profileUpdate', { usuario: usuario });
            })

    },
    update: function(req, res) {
        console.log(req.body)
        Usuario.update({
                nombre: req.body.nombre,
                apellidos: req.body.apellido,
                fecha_nacimiento: req.body.fechaNacimiento,
                correo: req.body.correo
                    // imagen: req.file.filename
            }, {
                where: { id: req.params.id },
                returning: true
            })
            .then((updateStatus) => {
                console.log(updateStatus);
                return res.redirect('/user/detail/' + req.params.id);
            })
            .catch(error => res.send(error))

    },
    detail: function(req, res) {
        /*
        Usuario.findByPk(req.params.id,{ 
            include : ["permiso","imagen"]
        })
        .then(function(usuario) {
            return res.json(usuario);
        })
        */
        if (req.session.usuarioLoggeado)
            Usuario.findByPk(req.params.id, {
                include: ["permiso", "imagen"]
            })
            .then(function(usuario) {
                return res.render('user/profile', { usuario: usuario });
            })
        else
            return res.redirect('/');

    },

};

module.exports = controller;