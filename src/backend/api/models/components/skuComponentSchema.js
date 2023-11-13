const mongoose = require('mongoose');

const skuPropertyValuesSchema = new mongoose.Schema({
  skuColorValue: {
    type: String,
    required: false,
    default: '',
  },
  skuPropertyTips: {
    type: String,
    required: false,
    default: '',
  },
  propertyValueName: {
    type: String,
    required: false,
    default: '',
  },
  propertyValueId: {
    type: Number,
    required: false,
  },
  skuPropertyImagePath: {
    type: String,
    required: false,
    default: '',
  },
  skuPropertyValueTips: {
    type: String,
    required: false,
    default: '',
  },
  skuPropertyValueShowOrder: {
    type: Number,
    required: false,
    default: 0,
  },
  propertyValueDefinitionName: {
    type: String,
    required: false,
    default: '',
  },
  propertyValueIdLong: {
    type: Number,
    required: false,
    default: 0,
  },
  skuPropertyImageSummPath: {
    type: String,
    required: false,
    default: '',
  },
  propertyValueDisplayName: {
    type: String,
    required: false,
    default: '',
  } 
});

const productSKUPropertyListSchema = new mongoose.Schema({
  showTypeColor: {
    type: Boolean,
    required: false,
    default: false,
  },
  sizeProperty: {
    type: Boolean,
    required: false,
    default: false,
  },
  skuPropertyValues: [skuPropertyValuesSchema],
  showType: { 
    type: String,
    required: false,
    default: 'none',
  },
  skuPropertyName: {
    type: String,
    required: false,
    default: '',
  },
  skuPropertyId: {
    type: Number,
    required: false,
    default: 0,
  },
  order: {
    type: Number,
    required: false,
    default: 0,
  }
});

const skuComponentSchema = new mongoose.Schema({
  selectedSkuAttr: {
    type: String,
    required: false,
    default: '',
  },
  hasSkuProperty: {
    type: Boolean,
    required: false,
    default: true,
  },
  productSKUPropertyList: [productSKUPropertyListSchema],
  skuPropertyJson: {
    type: String,
    required: false,
    default: '',
  }
});

const SKUComponent = mongoose.model('SKUComponent', skuComponentSchema);

module.exports = SKUComponent;
