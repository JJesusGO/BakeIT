const express = require('express');
const router = express.Router();

const editProductsRoutes = require('../controllers/editProductsController');

router.route('/')
      .get(editProductsRoutes.getEditProducts);

router.route('/api')
      .post(editProductsRoutes.postProducts)
      .put(editProductsRoutes.putProducts);

module.exports = router;