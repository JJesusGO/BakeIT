const fs = require('fs');
const user = require('../models/User');

const controller = {
    getLogin: (req, res) => {
        res.render('user/login');
    },

    getRegister: (req, res) => {
        res.render('user/register');
    },

    login: (req, res) => {
        res.redirect('/')
    },

    register: (req, res) => {
        user.User.createUser(req.body, req.file);
        res.redirect('/user/login');
    },

    resetPassword: (req, res) => {
        res.render('user/resetPassword');
    }
};

module.exports = controller;