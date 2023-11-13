const mongoose = require('mongoose');

const attributeSchema = new mongoose.Schema({
  attrValue: String,
  attrName: String
});

const productPropComponentSchema = new mongoose.Schema({
  showPropGroups: Boolean,
  propGroups: [],
  props: [attributeSchema]
});

const ProductPropComponent = mongoose.model('ProductPropComponent', productPropComponentSchema);

module.exports = ProductPropComponent;
