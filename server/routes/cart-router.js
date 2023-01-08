const express = require("express");
const User = require('../models/user');
const {
    getCartById,
    emptyCartById,
    updateCartById
} = require('../controllers/cart-controller')

const router = express.Router();

router.get('/cart/:id', getCartById);
router.delete('/cart/:id', emptyCartById);
router.patch('/cart/:id', updateCartById);

module.exports = router;