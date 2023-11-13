const mongoose = require('mongoose');

const actionConfsSchema = new mongoose.Schema({
  buyNowBtn: {
    bgColorStart: {
      type: String,
      required: false,
      default: '#FD384F',
    },
    bgColorEnd: {
      type: String,
      required: false,
      default: '#FD384F',
    },
    textContent: {
      type: String,
      required: false,
      default: 'Buy Now',
    },
    textColor: {
      type: String,
      required: false,
      default: '#FFFFFF',
    }
  },
  message: {
    iconAddress: {
      type: String,
      required: false,
      default: '',
    },
    textContent: {
      type: String,
      required: false,
      default: 'Message',
    },
    actionTarget: {
      type: String,
      required: false,
      default: '',
    }
  }
});

const webActionConfComponentSchema = new mongoose.Schema({
  actionConfs: actionConfsSchema,
  orderUrl: {
    type: String,
    required: false,
    default: ''
  },
  shoppingCartUrl: {
    type: String,
    required: false,
    default: '',
  }
});

const WebActionConfComponent = mongoose.model('WebActionConfComponent', webActionConfComponentSchema);

module.exports = WebActionConfComponent;
