const express = require('express');
const router = express.Router();
const { addToCart, getCartByUser } = require('../controllers/cartController');

// POST: Add to cart
router.post('/add', addToCart);

// GET: View user's cart
router.get('/:userId', getCartByUser);

module.exports = router;
