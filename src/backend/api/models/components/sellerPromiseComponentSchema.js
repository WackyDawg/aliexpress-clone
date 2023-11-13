const mongoose = require('mongoose');

const serviceDetailSchema = new mongoose.Schema({
  viewMoreText: String,
  actionTarget: String,
  title: String,
  content: String,
});

const returnPromiseSchema = new mongoose.Schema({
  brief: String,
  detailDescription: String,
  oldPromiseId: String,
  description: String,
  type: Number,
  descriptionForSeller: String,
  isValuable: Boolean,
  descriptionPretty: String,
  name: String,
  id: Number,
});

const sellerPromiseComponentSchema = new mongoose.Schema({
  returnPolicyGuarantees: [String],
  hasOverseaWarehouse: Boolean,
  hasNoReasonFreeReturn: Boolean,
  warranyDetailMap: Object,
  serviceDetails: {
    details: [serviceDetailSchema],
    title: String,
  },
  sellerGuaranteePromiseList: [Object], // You can define a more specific schema for this if needed
  returnPromise: returnPromiseSchema,
});

const SellerPromiseComponent = mongoose.model('SellerPromiseComponent', sellerPromiseComponentSchema);

module.exports = SellerPromiseComponent;
