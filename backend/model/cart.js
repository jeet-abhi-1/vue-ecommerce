const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  totalPrice: {
    type: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
