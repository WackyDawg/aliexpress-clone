const mongoose = require('mongoose');

const wishListComponentSchema = new mongoose.Schema({
  storeWishedCount: {
    type: Number,
    required: true,
    default: 0,
  },
  itemWishedCount: {
    type: Number,
    required: true,
    default: 0,
  },
  storeWished: {
    type: Boolean,
    required: true,
    default: false,
  },
  itemWished: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const WishListComponent = mongoose.model('WishListComponent', wishListComponentSchema);

module.exports = WishListComponent;
