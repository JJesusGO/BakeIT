const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.getIndex);
router.get('/galeria', mainController.getGaleria);

module.exports = router;