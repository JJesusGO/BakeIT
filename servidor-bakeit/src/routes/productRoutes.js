const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/product-cart', productController.getCart);
router.get('/product-detail', productController.getDetail);

module.exports = router;