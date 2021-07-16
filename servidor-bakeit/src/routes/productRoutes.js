const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/cart', productController.getCart);
router.route('/')
      .get(productController.getProducts)
      .post(productController.postProduct);
router.route('/:id')
      .get(productController.getProductID)
      .put(productController.putProductID);
router.get('/detail/:id', productController.getDetail);      

module.exports = router;