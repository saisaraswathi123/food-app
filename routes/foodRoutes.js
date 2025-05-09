const express = require('express');
const router = express.Router();
const { getFoodsByCategory } = require('../controllers/foodController');

// GET foods by category ID
router.get('/by-category/:id', getFoodsByCategory);

module.exports = router;
