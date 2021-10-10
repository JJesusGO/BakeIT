const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const { uploadAvatar } = require('../herramientas/storage');
const { loginUserValidation, registerUserValidation } = require('../herramientas/validations');

router.route('/login')
      .get(userController.getLogin)
      .post(loginUserValidation, userController.login)
router.get('/logout', userController.logout);
router.route('/register')
      .get(userController.add)
      .post(uploadAvatar.single("imagen"), registerUserValidation, userController.create)
router.route('/resetPassword')
      .get(userController.resetPassword)
      .post(userController.updatePassword)
router.route('/update/:id')
      .get(userController.edit)
      .post(userController.update);
router.get('/detail/:id', userController.detail);

module.exports = router;