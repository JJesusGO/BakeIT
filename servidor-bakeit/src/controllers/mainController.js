const controlador = {

    getIndex: (req, res) => {
        res.render('index');
    },

    getLogin: (req, res) => {
        res.render('user/login');
    },

    getRegister: (req, res) => {
        res.render('user/register');
    },
};

module.exports = controlador;