const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userController');

router.get('/', userAPIController.users);
router.get('/:id', userAPIController.userDetail);

module.exports = router;