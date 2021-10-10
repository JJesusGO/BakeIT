const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const { body } = require('express-validator');
const userController = require('../controllers/userController');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/media/avatars');
    },
    filename: function(req, file, cb) {
        cb(null, "img-" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })

const validations = [
    body('nombre')
    .notEmpty().withMessage('Este campo es requerido').bail()
    .isLength({min:2}).withMessage('El campo deberá tener al menos 2 caracteres.'),
    body('apellido')
    .notEmpty().withMessage('Este campo es requerido').bail()
    .isLength({min:2}).withMessage('El campo deberá tener al menos 2 caracteres.'),
    body('fechaNacimiento')
    .notEmpty().withMessage('Este campo es requerido'),
    body('correo')
    .notEmpty().withMessage('Este campo es requerido').bail()
    .isEmail().withMessage('El formato de correo es invalido'),
    body('contrasena')
    .notEmpty().withMessage('Este campo es requerido').bail()
    .isLength({min:8}).withMessage('El campo deberá tener al menos 8 caracteres.').bail()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('La contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial.'),
    body('imagen')
    .custom((value, { req }) => {
        let file = req.file;
        let accepted = ['.JPG', '.JPEG', '.PNG', '.GIF', '.jpg', '.jpeg', '.png', '.gif'];
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
    body('terminos')
    .notEmpty().withMessage('Para poder registrarte se deben aceptar los términos')
]

const logValidations = [
    body('correo').notEmpty().withMessage('Este campo es requerido').bail().isEmail().withMessage('El formato de correo es invalido'),
    body('contrasena').notEmpty().withMessage('Este campo es requerido')
]

router.route('/login')
    .get(userController.getLogin)
    .post(logValidations, userController.login)
router.get('/logout', userController.logout);
//router.route('/register')
//.get(userController.getRegister)
// .post(upload.single("imagen"), validations, userController.register)
router.get('/resetPassword', userController.resetPassword)
router.post('/resetPassword', userController.updatePassword)


//CRUD
router.get('/register', userController.add);
router.post('/register', upload.single("imagen"), validations, userController.create);
router.get('/update/:id', userController.edit);
router.post('/update/:id', userController.update);
router.get('/detail/:id', userController.detail);


module.exports = router;