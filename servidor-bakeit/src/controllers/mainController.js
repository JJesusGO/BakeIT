const controlador = {

    getIndex: (req, res) => {
        res.render('index');
    },
    getGaleria: (req, res) => {
        res.render('galeria');
    },
    getLogin: (req, res) => {
        res.render('user/login');
    },
    getRegister: (req, res) => {
        res.render('user/register');
    },
};

module.exports = controlador;