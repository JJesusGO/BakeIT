const controlador = {

    getIndex: (req, res) => {
        res.render('index');
    },
    getGaleria: (req, res) => {
        res.render('galeria');
    }
};

module.exports = controlador;