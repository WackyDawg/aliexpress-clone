const mongoose = require('mongoose');

const priceComponentSchema = new mongoose.Schema({
  skuJson: String,
  vatDesc: String,
  displayBulkInfo: Boolean,
  skuPriceList: [
    {
      skuVal: {
        optionalWarrantyPrice: [],
        skuAmount: {
          currency: String,
          formatedAmount: String,
          value: Number,
        },
        discount: String,
        availQuantity: Number,
        inventory: Number,
        hideOriPrice: Boolean,
        skuCalPrice: String,
        skuAmountLocal: String,
        skuActivityAmountLocal: String,
        discountTips: String,
        isActivity: Boolean,
        skuActivityAmount: {
          currency: String,
          formatedAmount: String,
          value: Number,
        },
      },
      skuPropIds: String,
      skuIdStr: String,
      freightExt: String,
      salable: Boolean,
      skuAttr: String,
      skuId: Number,
    },
  ],
  discountPrice: {
    actMinPrice: Number,
    actCurrencyFormatPrice: String,
    minActivityAmount: {
      currency: String,
      formatedAmount: String,
      value: Number,
    },
    actMultiCurrencyMinPrice: String,
    minActMultiCurrencyPrice: Number,
    maxActMultiCurrencyPrice: Number,
    maxActivityAmount: {
      currency: String,
      formatedAmount: String,
      value: Number,
    },
    actMinDisplayPrice: String,
    actMaxDisplayPrice: String,
    actMaxPrice: Number,
    actMultiCurrencyDisplayPrice: String,
    actMultiCurrencyMaxPrice: String,
  },
  origPrice: {
    minAmount: {
      currency: String,
      formatedAmount: String,
      value: Number,
    },
    minMultiCurrencyPrice: Number,
    minPrice: Number,
    maxPrice: Number,
    multiCurrencyFormatPrice: String,
    maxAmount: {
      currency: String,
      formatedAmount: String,
      value: Number,
    },
    currencyFormatPrice: String,
  },
  priceLocalConfig: String,
});

const PriceComponent = mongoose.model('PriceComponent', priceComponentSchema);

module.exports = PriceComponent;
