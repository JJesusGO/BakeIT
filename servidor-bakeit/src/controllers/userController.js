const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const router = require('../routes/userRoutes');

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
            "contrasena": req.body.contrasena,
            "imagen": req.file.filename
        }
        //res.send(usuario.imagen); //pruebas
        let usuarioJson = JSON.stringify(usuario);
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usuarioJson) //Momentaneamente guarda unicamente los valores ingresados

        res.redirect('/user/login')
    }
};

module.exports = controller;