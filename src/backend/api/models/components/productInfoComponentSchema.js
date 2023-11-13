const mongoose = require('mongoose');

const productInfoSchema = new mongoose.Schema({
  idStr: {
    type: String,
    required: true
  },
  oddUnitName: {
    type: String,
    required: true
  },
  taobaoSellerName: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  categoryPaths: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  numberPerLot: {
    type: Number,
    required: true
  },
  adminSeq: {
    type: Number,
    required: true
  },
  fromTaobao: {
    type: Boolean,
    required: true
  },
  lot: {
    type: Boolean,
    required: true
  },
  multiCurrencyDisplayPrice: {
    type: String,
    required: true
  },
  openOfferPriceRule: {
    type: Boolean,
    required: true
  },
  minPrice: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  maxPrice: {
    type: Number,
    required: true
  },
  multiUnitName: {
    type: String,
    required: true
  },
  categoryId: {
    type: Number,
    required: true
  }
});

const ProductInfo = mongoose.model('ProductInfo', productInfoSchema);

module.exports = ProductInfo;
