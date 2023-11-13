const mongoose = require('mongoose');

const couponAttributesSchema = new mongoose.Schema({
  couponPackageText: String,
});

const webCouponInfoComponentSchema = new mongoose.Schema({
  usingNewCouponApi: Boolean,
  couponList: [/* Define the structure of coupon objects in the array */],
  promotionPanelDTO: {},
  couponAttributes: couponAttributesSchema,
});

const WebCouponInfoComponent = mongoose.model('WebCouponInfoComponent', webCouponInfoComponentSchema);

module.exports = WebCouponInfoComponent;
