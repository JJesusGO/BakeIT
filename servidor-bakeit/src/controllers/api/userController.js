const db = require('../../database/models');

const userController = {
    users: (req, res) => {
        db.Usuario.findAll({ attributes: ['id', 'nombre', 'correo'] })
            .then(users => {
                let data = [];

                for (let i = 0; i < users.length; i++) {
                    let user = users[i].dataValues;
                    user.detail = "http://localhost:3000/api/users/" + user.id;
                    data.push(user);
                }

                let response = {
                    count: data.length,
                    users: data
                }
                res.json(response);
            })
    },
    userDetail: (req, res) => {
        let userId = req.params.id;
        db.Usuario.findByPk(userId, { attributes: ['id', 'nombre', 'apellidos', 'fecha_nacimiento', 'correo'], include: ['imagen'] })
            .then(user => {
                let userData = user.dataValues;
                let imageURL = userData.imagen.dataValues.url;

                userData.imagen = "http://localhost:3000/media/avatars/" + imageURL;

                res.json(userData);
            })
    }
}

module.exports = userController;
