const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentLayoutSchema = new Schema({
    displayCondition: {
        type: String,
        required: true
    },

    componentId: {
        type: String,
        required: true
    },

    distance: {
        type: Number,
        required: true
    },

    blockType: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    blockGroup: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    useInDeliveryOptionPanel: {
        type: Boolean,
        required: true
    },

    useInDetailFirstScreen: {
        type: Boolean,
        required: true
    },

    medusaKey: {
        type: String,
        required: true
    },

    useInSkuSwitch: {
        type: Boolean,
        required: true
    },

    order: {
        type: Number,
        required: true
    }
});

const layoutResultListSchema = new Schema({
    contentLayout: [[contentLayoutSchema]],
    deliveryOptionPanelDisplayList: [String],
    additionLayout: [contentLayoutSchema],
    titleLayout: [String],
    finalPatternId: {
        type: Number,
        required: true
    },
    bizData: {
        type: Object,
        required: true
    },
    dxTemplateInfo: {
        type: Object,
        required: true
    },
    detailFirstScreenDisplayList: [String],
    skuSwitchDisplayList: [String]
});

const deliveryExtraInfoMapSchema = new Schema({
    expressionExt: {
        type: String,
        required: true
    },

    allowBuyNowArouseLayer: {
        type: Boolean,
        required: true
    },

    allowArouseLayer: {
        type: Boolean,
        required: true
    },

    discountExt: {
        type: String,
        required: true
    },

    shippingFeeText: {
        type: String,
        required: true
    },

    xdays: {
        type: Boolean,
        required: true
    },

    serviceDetails: {
        details: [{
            viewMoreText: {
                type: String,
                required: true
            },
            actionTarget: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        }],
        title: {
            type: String,
            required: true
        }
    },
    choiceMindList: [{
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }],
    promotionId: {
        type: String,
        required: true
    }
});

const webGeneralFreightCalculateComponentSchema = new Schema({
    hideShipFrom: {
        type: Boolean,
        required: true
    },
    allowArouseLayer: {
        type: Boolean,
        required: true
    },
    shippingFeeText: {
        type: String,
        required: true
    },
    originalLayoutResultList: [layoutResultListSchema],
    deliveryExtraInfoMap: {
        type: Map,
        of: deliveryExtraInfoMapSchema
    },
    freightExt: String,
    styleCode: String,
    promotionId: String,
    usingNewFreight: Boolean
});

const WebGeneralFreightCalculateComponent = mongoose.model('WebGeneralFreightCalculateComponent', webGeneralFreightCalculateComponentSchema);

module.exports = WebGeneralFreightCalculateComponent;
