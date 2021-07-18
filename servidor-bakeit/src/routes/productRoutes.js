const express = require('express');
const multer = require('multer');
const path = require('path')
const router = express.Router();
const uniqid = require('uniqid');

const configuracion = multer.diskStorage({
      destination: function (req, file, cb) {   
            cb(null, path.join(__dirname, '../../public/data/products'));
      },
      filename: function (req, file, cb) {
            cb(null,uniqid()+path.extname(file.originalname));
      }
})
const almacenamiento = multer({ storage: configuracion });

const productController = require('../controllers/productController');

router.get('/cart', productController.getCart);
router.route('/')
      .get(productController.getProducts)
      .post(almacenamiento.array('image'),productController.postProduct);
router.route('/:id')
      .get(productController.getProductID)
      .put(almacenamiento.array('image'),productController.putProductID)
      .delete(productController.deleteProductID);
router.get('/detail/:id', productController.getDetail);      

module.exports = router;