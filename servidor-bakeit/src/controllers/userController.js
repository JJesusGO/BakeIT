const { validationResult } = require('express-validator');
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
        //res.send(resultValidation.mapped());
        if (resultValidation.errors.length > 0) {
            return res.render('user/login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
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

        user.User.createUser(req.body, req.file);
        res.redirect('/user/login');
    },

    resetPassword: (req, res) => {
        res.render('user/resetPassword');
    }
};

module.exports = controller;