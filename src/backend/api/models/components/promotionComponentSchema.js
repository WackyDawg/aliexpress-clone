const mongoose = require('mongoose');

const promotionComponentSchema = new mongoose.Schema({
    discountPromotion: {
        type: Boolean,
        required: true
    },

    activity: {
        type: Boolean,
        required: true
    },

    fixedPromotionLeftHours: {
        type: Number,
        required: true

    },

    discount: {
        type: Number,
        required: true
    },

    fixedFreeShipping: {
        type: Boolean,
        required: true
    },

    regularPriceActivity: {
        type: Boolean,
        required: true
    },

    fixedPromotionLeftSecs: {
        type: Number,
        required: true
    },

    promotionLeftMinutes: {
        type: Number,
        required: true
    },

    promotionLeftSecs: {
        type: Number,
        required: true
    },

    discountTips: {
        type: String,
        required: true
    },

    fixedPromotionLeftMinutes: {
        type: Number,
        required: true
    },

    coinsEnough: {
        type: Boolean,
        required: true
    },

    fireDeals: {
        type: Boolean,
        required: true
    },

    purchaseLimitMaxTips: {
        type: String,
        required: true
    },

    superDeals: {
        type: Boolean,
        required: true
    },
    
    fixedPromotionLeftDays: {
        type: Number,
        required: true
    },

    promotionLeftHours: {
        type: Number,
        required: true
    },

    hbaFreeShipping: {
        type: Boolean,
        required: true
    },

    showStockPrompt: {
        type: Boolean,
        required: true
    },

    enableMultiDiscount: {
        type: Boolean,
        required: true
    },

    purchaseLimitNumMax: {
        type: Number,
        required: true
    },

    discountRatioTips: {
        type: String,
        required: true
    },

    displayIcon: {
        type: Boolean,
        required: true
    },

    preSale: {
        type: Boolean,
        required: true
    },

    promotionLeftDays: {
        type: Number,
        required: true
    },

    availableGroupShareActivity: {
        type: Boolean,
        required: true
    },

    coinPreSale: {
        type: Boolean,
        required: true
    },

    fixedDiscountPromotion: {
        type: Boolean,
        required: true
    },

    comingSoon: {
        type: Boolean,
        required: true
    },

    allProduct: {
        type: Boolean,
        required: true
    },

    memberPriceActivity: {
        type: Boolean,
        required: true
    }
});

const PromotionComponent = mongoose.model('PromotionComponent', promotionComponentSchema);

module.exports = PromotionComponent;
