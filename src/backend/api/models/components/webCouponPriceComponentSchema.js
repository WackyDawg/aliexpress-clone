const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webCouponPriceComponentSchema = new Schema({
    
});

const WebCouponPriceComponent = mongoose.model('WebCouponPriceComponent', webCouponPriceComponentSchema);

module.exports = WebCouponPriceComponent;
