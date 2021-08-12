//
const fs = require('fs');
const uniqid = require('uniqid');
const bcrypt = require('bcryptjs');

const User = {
    fileName: './src/data/users.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByEmail: function(correo) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.correo === correo);
        return userFound;
    },

    createUser: function(userData, userFile) {
        let usuario = {
            "id": uniqid(),
            "nombre": userData.nombre,
            "apellido": userData.apellido,
            "fechaNacimiento": userData.fechaNacimiento,
            "correo": userData.correo,
            "contrasena": bcrypt.hashSync(userData.contrasena, 10),
            "imagen": userFile.filename
        };
        const usuarios = this.findAll();
        usuarios.push(usuario);
        fs.writeFileSync(this.fileName, JSON.stringify(usuarios, null, ''));
    }

}

module.exports = { User }