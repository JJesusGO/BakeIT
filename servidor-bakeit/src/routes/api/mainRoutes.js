const express = require('express');
const router = express.Router();
const mainAPIController = require('../../controllers/api/mainController');

router.get('/generales', mainAPIController.generales);

module.exports = router;