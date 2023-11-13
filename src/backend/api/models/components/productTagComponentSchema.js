const mongoose = require('mongoose');

const switchInfoSchema = new mongoose.Schema({
  showPropOuter: Boolean,
  deliveryMigrate: Boolean,
  skuUnavailableRevision: Boolean,
  allowUSVisitorCart: Boolean,
  showPropGroups: Boolean
});

const promotionEnhanceInfoBannerSchema = new mongoose.Schema({
  icon: String,
  content: String
});

const productTagComponentSchema = new mongoose.Schema({
  topItem: Boolean,
  invalidBuyNow: Boolean,
  switchInfo: switchInfoSchema,
  rechargeProduct: Boolean,
  x3MoneyBack: Boolean,
  f1Scene: Boolean,
  hideMessage: Boolean,
  otherPCTagMap: {},
  boutique: Boolean,
  hideBuyNow: Boolean,
  promotionEnhanceInfoBanner: promotionEnhanceInfoBannerSchema,
  madeInItaly: Boolean,
  installment: Boolean,
  ruHidePruduct: Boolean,
  frMall: Boolean,
  choiceProduct: Boolean
});

const ProductTagComponent = mongoose.model('ProductTagComponent', productTagComponentSchema);

module.exports = ProductTagComponent;
