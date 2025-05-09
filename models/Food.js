const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  description: String,
  image: String
});
module.exports = mongoose.model('Food', foodSchema);
