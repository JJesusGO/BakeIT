function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if (req.session && req.session.usuarioLoggeado) {
        res.locals.isLogged = true;
        res.locals.usuarioLoggeado = req.session.usuarioLoggeado;
    }

    next();
}
module.exports = userLoggedMiddleware;