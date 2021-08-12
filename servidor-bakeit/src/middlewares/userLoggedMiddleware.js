const user = require('../models/User');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let cookieEmail = req.cookies.userEmail;
    let cookieUser = user.User.findByEmail(cookieEmail);

    if (cookieUser) {
        req.session.usuarioLoggeado = cookieUser;
    }

    if (req.session && req.session.usuarioLoggeado) {
        res.locals.isLogged = true;
        res.locals.usuarioLoggeado = req.session.usuarioLoggeado;
    }


    next();
}
module.exports = userLoggedMiddleware;