const PaymentMethod = require("../models/miscSchema");

exports.getPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.find();
    const responseData = {
      api: "mtop.payment.ae.channel.list",
      data: {
        paymentMethodList: paymentMethods,
        succeeded: "true",
      },
      ret: ["SUCCESS::调用成功"],
      v: "1.0",
    };
    return res.jsonp(responseData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
