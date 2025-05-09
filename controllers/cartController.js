const Cart = require('../models/Cart');
const Food = require('../models/food');


// POST /api/cart/add
exports.addToCart = async (req, res) => {
  try {
    const { userId, foodId, quantity } = req.body;

    let cart = await Cart.findOne({ userId }).populate('items.food');

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.food._id.toString() === foodId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ food: foodId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/cart/:userId
exports.getCartByUser = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.food');

    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    // Calculate total price
    const total = cart.items.reduce((sum, item) => {
      return sum + item.food.price * item.quantity;
    }, 0);

    res.json({ cart: cart.items, totalPrice: total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
