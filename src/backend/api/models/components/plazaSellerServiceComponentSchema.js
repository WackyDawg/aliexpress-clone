const mongoose = require('mongoose');

const warrantySchema = new mongoose.Schema({
  
});

const plazaSellerServiceComponentSchema = new mongoose.Schema({
  warranty: {
    type: warrantySchema,
    default: {}
  },
  hasWarrantyInfo: Boolean
});

const PlazaSellerServiceComponent = mongoose.model('PlazaSellerServiceComponent', plazaSellerServiceComponentSchema);

module.exports = PlazaSellerServiceComponent;
