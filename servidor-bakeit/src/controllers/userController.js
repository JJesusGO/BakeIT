const controller = {
    getLogin: (req, res) => {
        res.render('user/login');
    },

    getRegister: (req, res) => {
        res.render('user/register');
    },

    login: (req, res) => {
        // Pendiente.
    },

    register: (req, res) => {
        // Pendiente.
        console.log(req.file);
    }
};

module.exports = controller;

