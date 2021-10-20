const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productController');

router.get('/', productAPIController.products);
router.get('/category', productAPIController.productsCategory);
router.get('/:id', productAPIController.productsDetail);

module.exports = router;