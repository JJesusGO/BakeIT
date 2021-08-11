const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/media/img');
    },
    filename: function(req, file, cb) {
        cb(null, "img-" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })

const userController = require('../controllers/userController');

const validations = [
    body('nombre').notEmpty().withMessage('Este campo es requerido'),
    body('apellido').notEmpty().withMessage('Este campo es requerido'),
    body('fechaNacimiento').notEmpty().withMessage('Este campo es requerido'),
    body('correo').notEmpty().withMessage('Este campo es requerido').bail().isEmail().withMessage('El formato de correo es invalido'),
    body('contrasena').notEmpty().withMessage('Este campo es requerido'),
    body('imagen').custom((value, { req }) => {
        let file = req.file;
        let accepted = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que seleccionar una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!accepted.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${accepted.join(', ')}`);
            }
            return true;
        }

    }),
    body('terminos').notEmpty().withMessage('Para poder registrarte se deben aceptar los términos')
]

const logValidations = [
    body('correo').notEmpty().withMessage('Este campo es requerido').bail().isEmail().withMessage('El formato de correo es invalido'),
    body('contrasena').notEmpty().withMessage('Este campo es requerido')
]

router.get('/login', userController.getLogin);
router.post('/login', logValidations, userController.login)
router.get('/register', userController.getRegister);
router.post('/register', upload.single("imagen"), validations, userController.register)
router.get('/resetPassword', userController.resetPassword)

module.exports = router;