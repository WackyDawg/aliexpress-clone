const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Import all controllers
const miscController = require("../controllers/miscController");

const PaymentMethod = require('../models/miscSchema');

// Middlewares
const appKeyMiddleware = require("../middlewares/Appkeyauthenticator");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(morgan("tiny"));

router.get(
  "/mtop.payment.ae.channel.list/1.0",
  appKeyMiddleware,
  async (req, res) => {
    try {
      const paymentMethods = await PaymentMethod.find();
      const appKey = req.appKey; // Retrieve the validated API key from the request
      if (appKey === "24815443") {
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
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//router.post("/product/1.0", productController.createProduct);

module.exports = router;
