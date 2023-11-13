const mongoose = require("mongoose");

const paymentMethodSchema = new mongoose.Schema({
  code: String,
  icon: String,
});

const PaymentMethod = mongoose.model("PaymentMethod", paymentMethodSchema);

module.exports = PaymentMethod;
