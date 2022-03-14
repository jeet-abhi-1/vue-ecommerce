const express = require('express');
const auth = require('../config/auth')
const router = express.Router();
const cartController = require('../controller/cartController')

router.get('/allItems', cartController.getAllItems)
router.get('/items', auth, cartController.getItems)
router.delete('/delete-item/:id', auth, cartController.removeItem)

module.exports = router