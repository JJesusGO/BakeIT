const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.getIndex);
router.get('/galeria', mainController.getGaleria);
router.get('/history', mainController.getHistory);
router.get('/knowUs', mainController.getKnowUs);

module.exports = router;