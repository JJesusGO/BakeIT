const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/media/img');
    },
    filename: function (req, file, cb) {
        cb(null, "img-" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })

const userController = require('../controllers/userController');

router.get('/login', userController.getLogin);
router.post('/login', userController.login)
router.get('/register', userController.getRegister);
router.post('/register', upload.single("Avatar"), userController.register)

module.exports = router;