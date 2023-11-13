const mongoose = require('mongoose');

const storeHeaderComponentSchema = new mongoose.Schema({
  storeHeaderResult: {
    shopTagUrl: String
  }
});

const StoreHeaderComponent = mongoose.model('StoreHeaderComponent', storeHeaderComponentSchema);

module.exports = StoreHeaderComponent;
