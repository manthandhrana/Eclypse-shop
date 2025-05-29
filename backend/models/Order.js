const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [String],
  itemPrice: Number,
  shipping: Number,
  tax: Number,
  beforeTax: Number,
  total: Number,
  addressId: {
    type: String,
    ref: 'Address'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
