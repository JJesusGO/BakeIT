let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);

module.exports = router;