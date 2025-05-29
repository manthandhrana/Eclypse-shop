const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  street: String,
  apt: String,
  state: String,
  zip: String,
  uuid: String,
  
});

module.exports = mongoose.model('Address', addressSchema);
