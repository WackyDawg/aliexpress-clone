const mongoose = require('mongoose');

const sellerComponentSchema = new mongoose.Schema({
  boutiqueSeller: Boolean,
  topRatedSeller: Boolean,
  formatOpenTime: String,
  spanishPlaza: Boolean,
  ruConsignmentAndMarketPlace: Boolean,
  esRetailOrConsignment: Boolean,
  openedYear: Number,
  plazaElectronicSeller: Boolean,
  ruSelfOperation: Boolean,
  storeURL: String,
  storeFeedbackURL: String,
  storeName: String,
  hasStore: Boolean,
  openTime: Number,
  localSellerTag: String,
  aeRuSelfOperation: Boolean,
  showPlazaHeader: Boolean,
  localSeller: Boolean,
  adminSeq: Number,
  encryptOwnerMemberId: String,
  countryCompleteName: String,
  companyId: Number,
  storeLogo: String,
  storeNum: Number,
  payPalAccount: Boolean
});

const SellerComponent = mongoose.model('SellerComponent', sellerComponentSchema);

module.exports = SellerComponent;
