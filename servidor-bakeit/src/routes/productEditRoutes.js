const express = require('express');
const router = express.Router();

const productEditRoutes = require('../controllers/productEditController');

router.route('/')
      .get(productEditRoutes.getProducts)
      .post(productEditRoutes.postProducts)
router.route('/:index')
      .get(productEditRoutes.getProductsIndex)
      .put(productEditRoutes.putProductsIndex);
      

module.exports = router;