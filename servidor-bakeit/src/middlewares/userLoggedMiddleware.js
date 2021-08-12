const user = require('../models/User');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    const id = req.cookies.id;
    const usuario = user.User.findByPk(id);    
    if (usuario) {
        delete usuario.contrasena;
        req.session.usuarioLoggeado = usuario;
    }
    if (req.session && req.session.usuarioLoggeado) {
        res.locals.isLogged = true;
        res.locals.usuarioLoggeado = req.session.usuarioLoggeado;
    }
    next();
}
module.exports = userLoggedMiddleware;