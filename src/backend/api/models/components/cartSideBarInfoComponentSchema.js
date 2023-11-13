const mongoose = require('mongoose');

const cartSideBarInfoComponentSchema = new mongoose.Schema({
  hideCartSideBar: {
    type: Boolean,
    required: true,
    default: false,
  },
  siteType: {
    type: String,
    required: false,
    default: 'followCartPdpChoice',
  }
});

const CartSideBarInfoComponent = mongoose.model('CartSideBarInfoComponent', cartSideBarInfoComponentSchema);

module.exports = CartSideBarInfoComponent;
