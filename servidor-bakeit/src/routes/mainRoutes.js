const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.getIndex);
router.get('/login', mainController.getLogin);
router.get('/register', mainController.getRegister);

module.exports = router;