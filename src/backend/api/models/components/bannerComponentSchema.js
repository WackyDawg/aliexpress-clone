const mongoose = require('mongoose');

const bannerComponentSchema = new mongoose.Schema({
  bannerType: {
    type: String,
    enum: ['promotion', 'daily'],
    required: true,
  },
  promotionBannerInfo: {
    endTimer: {
      color: {
        type: String,
        required: false,
        default: '#FD384F',
      },
      endTime: {
        type: Number,
        required: true,
        default: 0,
      },
      showCountdown: {
        type: Boolean,
        required: false,
        default: false,
      },
      text: {
        type: String,
        required: false,
        default: 'Ends:'
      },
    },
    priceAreaColor: {
      type: String,
      required: false,
      default: '#FFEBED',
    },
    atmosphereCode: {
      type: String,
      required: false,
      default: 'girdle_bigsale_welcomedeal_multi_discount',
    },
    supplementaryList: [
      {
        color: {
          type: String,
          required: false,
          default: '#FFFFFE'
        },
        type: {
          type: String,
          required: false,
          default: 'text',
        },
        value: {
          type: String,
          required: true,
          default: '', //value will be in this format <strong><span style=\"color: #fbdd8d;\">NGN3,216.96</span></strong><span style=\"color: #ffffff;\"> off every </span><strong><span style=\"color: #fbdd8d;\">NGN16,084.8</span></strong><span style=\"color: #ffffff;\"> (max</span><span style=\"color: #ffffff;\"> NGN10,348,829.07</span></span><span style=\"color: #ffffff;\">)</span>
        },
      },
    ],
    background: {
      type: {
        type: String,
        required: false,
        default: 'icon',
      },
      value: {
        type: String,
        required: true,
        default: '',
      },
    },
    activityStatus: {
      type: Number,
      required: false,
      default: 1,
    },
    separator: {
      color: {
        type: String,
        required: true,
        default: '#FD384F'
      },
      type: {
        type: String,
        required: false,
        default: 'text'
      },
      value: {
        type: String,
        required: true,
        default: '.',
      },
    },
    slogan: {
      type: {
        type: String,
        required: false,
        default: 'icon'
      },
      value: {
        type: String,
        required: true,
        default: '',
      },
    },
  },
  dailyBannerInfo: {
    backgroundUrl: {
      type: String,
      required: true,
      default: '',
    },
    atmosphereCode: {
      type: String,
      required: false,
      default: 'new_user_platform_allowance_atm',
    },
    bannerType: {
      type: String,
      required: false,
      default: 'platform_newer',
    },
    originalPrice: {
      type: String,
      required: true,
      default: '',
    },
    sloganUrl: { 
      type: String,
      required: true,
      default: '',
     },
    endTimer: {
      text: {
        type: String,
        required: false,
        default: '',
      },
    },
    backgroundHeight: {
      type: Number,
      required: false,
      default: 0
    },
    price: {
      type: String,
      required: true,
      default: '',//Price will be like this NGN15,380.98 - NGN15,761.32
    },
    minPrice: {
      currency: {
        type: String,
        required: true,
        default: 'NGN',
      },
      formatedAmount: {
        type: String,
        required: true,
        default: '',//formatted ammount will be like this NGN15,380.98
      },
      value: {
        type: Number,
        required: true,
        default: 0,//value will be like 15380.98
      },
    },
    activityStatus: {
      type: Number,
      required: false,
      default: 1,
    },
    maxPrice: {
      currency: {
        type: String,
        required: true,
        default: 'NGN'
      },
      formatedAmount: {
        type: String,
        required: true,
        default: ''
      },
      value: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    salesText: {
      type: String,
      required: false,
      default: 'Event',
    },
  },
  styleCode: {
    type: Number,
    required: false,
    default: 1,
  },
});

const BannerComponent = mongoose.model('BannerComponent', bannerComponentSchema);

module.exports = BannerComponent;
