const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { uploadProduct } = require('../herramientas/storage');

const { modProductValidation } = require('../herramientas/validations');

router.get('/cart', productController.getCart);
router.route('/')
      .get(productController.getProducts)
      .post(uploadProduct.array('image'), modProductValidation, productController.postProduct);
router.route('/:id')
      .get(productController.getProductID)
      .put(uploadProduct.array('image'), modProductValidation, productController.putProductID)
      .delete(productController.deleteProductID);
router.get('/detail/:id', productController.getDetail);

module.exports = router;