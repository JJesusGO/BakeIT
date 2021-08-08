const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const router = require('../routes/userRoutes');
const bcrypt = require('bcryptjs');

const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

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
        let usuario = {
            "id": uniqid(),
            "nombre": req.body.nombre,
            "apellido": req.body.apellido,
            "fechaNacimiento": req.body.fechaNacimiento,
            "correo": req.body.correo,
            "contrasena": bcrypt.hashSync(req.body.contrasena, 10),
            "imagen": req.file.filename
        };
        usuarios.push(usuario);
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios));
        res.redirect('/user/login');
    },

    resetPassword: (req, res) => {
        res.render('user/resetPassword');
    }
};

module.exports = controller;