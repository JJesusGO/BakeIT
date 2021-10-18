const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

router.route("/")
      .get(cartController.getCart)
      .post(cartController.postCart);
router.route("/pedido")
      .post(cartController.postPedido);
router.route("/pedido/:id")      
      .put(cartController.putPedidoID)
      .delete(cartController.deletePedidoID);
router.route("/activar/:id")
      .post(cartController.postActivarID);
router.route("/comprar/:id")
      .post(cartController.postComprarID);
router.route("/:id")
      .get(cartController.getCartID)
      .delete(cartController.deleteCartID);


module.exports = router;