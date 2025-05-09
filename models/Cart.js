const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      food: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
      quantity: Number
    }
  ]
});
module.exports = mongoose.model('Cart', cartSchema);
