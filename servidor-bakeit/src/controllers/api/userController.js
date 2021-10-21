const db = require('../../database/models');

const userController = {
    users: (req, res) => {
        db.Usuario.findAll({ attributes: ['id', 'nombre', 'correo'] })
            .then(users => {
                let data = [];

                for (let i = 0; i < users.length; i++) {
                    let user = users[i].dataValues;
                    user.detail = "http://localhost:3001/api/users/" + user.id;
                    data.push(user);
                }

                let response = {
                    count: data.length,
                    users: data
                }
                res.json(response);
            }).catch(error => res.send(error))
    },
    userDetail: (req, res) => {
        let userId = req.params.id;
        if(userId=="latest"){

            db.Usuario.findAll({ attributes: ['id'] })
            .then(users => {
                let index = -1;
                let max = 0;
                for (let i = 0; i < users.length; i++) {
                    let user = users[i].dataValues;
                    if(user.id >= max){
                        max = user.id;
                        index = i;
                    }                     
                }                
                if(index==-1)
                    return res.json({});
                userId = users[index].dataValues.id;
                db.Usuario.findByPk(userId, { attributes: ['id', 'nombre', 'apellidos', 'fecha_nacimiento', 'correo'], include: ['imagen'] })
                .then(user => {
                    let userData = user.dataValues;
                    let imageURL = userData.imagen.dataValues.url;

                    userData.imagen = "http://localhost:3001/media/avatars/" + imageURL;

                    res.json(userData);
                }).catch(error => res.send(error))

            }).catch(error => res.send(error))
            
        }
        else
            db.Usuario.findByPk(userId, { attributes: ['id', 'nombre', 'apellidos', 'fecha_nacimiento', 'correo'], include: ['imagen'] })
                .then(user => {
                    let userData = user.dataValues;
                    let imageURL = userData.imagen.dataValues.url;

                    userData.imagen = "http://localhost:3001/media/avatars/" + imageURL;

                    res.json(userData);
                }).catch(error => res.send(error))
    }
}

module.exports = userController;
