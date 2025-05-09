const Food = require('../models/food');

// GET /api/foods/by-category/:id
exports.getFoodsByCategory = async (req, res) => {
  try {
    const foods = await Food.find({ category: req.params.id });
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
