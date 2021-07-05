let express = require('express');
let router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/product-cart', productController.cart);
router.get('/product-detail', productController.detail);

module.exports = router;