const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const user = require('../models/User');

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

        let userLogin = user.User.findByEmail(req.body.correo);

        if (userLogin) {
            let passCompare = bcryptjs.compareSync(req.body.contrasena, userLogin.contrasena);
            if (passCompare) {
                delete userLogin.contrasena;
                req.session.usuarioLoggeado = userLogin;
                return res.send(req.session)
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


        res.redirect('/')
    },

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

    resetPassword: (req, res) => {
        res.render('user/resetPassword');
    }
};

module.exports = controller;