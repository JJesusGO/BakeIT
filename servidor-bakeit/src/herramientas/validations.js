const path = require('path')
const { body } = require('express-validator');

const registerUserValidation = [
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
const loginUserValidation = [
    body('correo')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .isEmail().withMessage('El formato de correo es invalido'),
    body('contrasena')
        .notEmpty().withMessage('Este campo es requerido')
]

const modProductValidation = [
    body('nombre')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .isLength({min:2}).withMessage('El campo deberá tener al menos 2 caracteres.'),
    body('tipo')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .matches(/\b(?:postre|kit)\b/).withMessage('El campo debe ser del tipo postre o kit.'),
    body('categoria_id')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .isNumeric({min:1}).withMessage('El campo debe ser una categoria valida'),
    body('descripcion')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .isString({min:2}).withMessage('El campo deberá tener al menos 2 caracteres.'),
    body('elementos')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .isString({min:2}).withMessage('El campo deberá tener al menos un elemento.'),
    body('precio')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .isNumeric().withMessage('El campo debe tener un precio valido.'),
    body('porciones')
        .notEmpty().withMessage('Este campo es requerido').bail()
        .isString({min:2}).withMessage('El campo deberá tener al menos 2 caracteres.'),    
]

module.exports = {
    registerUserValidation,
    loginUserValidation,
    modProductValidation
}