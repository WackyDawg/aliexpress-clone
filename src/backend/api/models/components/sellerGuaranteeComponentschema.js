const mongoose = require('mongoose');

const sellerGuaranteeSchema = new mongoose.Schema({
  hasOverseaWarehouse: {
    type: Boolean,
    required: true
  },
  warranyDetailJson: {
    type: String,
    required: true
  },
  forcePromiseWarrantyJson: {
    type: String,
    required: true
  }
});

const SellerGuarantee = mongoose.model('SellerGuarantee', sellerGuaranteeSchema);

module.exports = SellerGuarantee;
