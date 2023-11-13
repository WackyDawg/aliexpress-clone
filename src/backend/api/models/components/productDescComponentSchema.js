const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productDescComponentSchema = new Schema({
  descriptionUrl:{
    type: String,
    required: true
  },
});

const ProductDescComponent = mongoose.model('ProductDescComponent', productDescComponentSchema);

module.exports = ProductDescComponent;
