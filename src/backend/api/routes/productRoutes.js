const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Import all controllers
const productController = require("../controllers/productController");

// Middlewares
const appKeyMiddleware = require("../middlewares/Appkeyauthenticator");
//const apiTimeoutHandler = require("../middlewares/apiTimeoutHandler");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(morgan("tiny"));

router.get(
  "/mtop.relationrecommend.aliexpressrecommend.recommend/1.0",
  appKeyMiddleware, //apiTimeoutHandler,
  (req, res) => {
    const appKey = req.appKey; // Retrieve the validated API key from the request

    // Conditionally return different responses based on the API key
    if (appKey === "12574478") {
      const responseData = {
        api: "mtop.relationrecommend.aliexpressrecommend.recommend",
        data: {
          result: [
            {
              layoutInfo: {
                listHeader: ["rcmdTitle"],
              },
              jarvisContext: {
                pv_id: "7d0049b2-f3fa-4d57-b42f-68b5ee97f9e7",
                stream_id: "942ff0e2-ae78-4ff1-9116-ffe58743236d",
                ab_id: 357122,
                userFeature: {
                  car_model: "-1",
                  login_terminal: "-1",
                  country: "NG",
                  gender: "-1",
                  credit_lv: "-1",
                  user_privacy: "-1",
                  device_type: "-1",
                  lv: "-1",
                  user_new: "1",
                  religion: "-1",
                  age_range: "-1",
                  kid_age: "-1",
                  kid_gender: "-1",
                  income_lv: "-1",
                  car_brand: "-1",
                  consume_lv: "-1",
                  lang: "-1",
                  buyer_lv: "-1",
                },
              },
              mods: {
                listItems: [
                  {
                    image: {
                      imgUrl:
                        "//ae04.alicdn.com/kf/S9ffbba2e0b0745f1a5f223ee99fea0e0d/Men-Baseball-Jacket-Fashion-Men-s-Casual-Jacket-Outdoor-Sports-Jacket-Spring-And-Autumn-Military-Motorcycle.jpg_220x220xz.jpg",
                      imgWidth: 220,
                      imgHeight: 220,
                      imgType: "0",
                    },
                    itemType: "rmdproductV3",
                    productId: "1005006066307301",
                    itemCardType: "pc_new_card",
                    moreAction: {
                      actions: [
                        {
                          actionType: "shopCart",
                          actionText: "Add to cart",
                          actionIcon:
                            "https://ae01.alicdn.com/kf/Sce512cd0bba1471087d31f4bfe7745a5O/64x64.png",
                        },
                        {
                          actionType: "quickView",
                          actionText: "See preview",
                        },
                      ],
                    },
                    store: {
                      storeUrl: "//www.aliexpress.com/store/1102808294",
                      aliMemberId: 2675571203,
                      storeName: "Happy Boys Store",
                      storeId: 1102808294,
                    },
                    title: {
                      displayTitle:
                        "Men Baseball Jacket Fashion Men's Casual Jacket Outdoor Sports Jacket Spring And Autumn Military Motorcycle Jacket Coat Clothing",
                      shortTitle: false,
                      seoTitle:
                        "Men Baseball Jacket Fashion Men's Casual Jacket Outdoor Sports Jacket Spring And Autumn Military Motorcycle Jacket Coat Clothing",
                    },
                    evaluation: {
                      starWidth: 48,
                      starUrl:
                        "https://ae01.alicdn.com/kf/S567d6bf538214abf95c1e5825c7e6a05t/48x48.png",
                      starRating: 5.0,
                      starHeight: 48,
                    },
                    productDetailUrl: "productDetailUrl HERE !!",
                    jarvisMap: {
                      cate: "200000798",
                      jfy_exp_cnt_2m: "78620",
                      jfy_pay_ord_amt_2m: "72022",
                      prod: 1005006066307301,
                      ipv_2m: "6746",
                      item_price: "2807",
                      exp_cnt_2m: "265655",
                      jfy_clk_addcart_cnt_2m: "241",
                      jfy_ctr_2m: "0.03586874",
                      match_score: "0.1287",
                      store: "1102808294",
                      rank_cart: "0.42316005",
                      item_order: "30",
                      cali_pctr: "0.01330146",
                      pay_ord_amt_2m: "250445",
                      jfy_cvr_2m: "0.0106383",
                      page_idx: "1",
                      clk_addcart_cnt_2m: "216",
                      jfy_ipv_2m: "2820",
                      cali_pcvr: "0.35275901",
                      cvr_2m: "0.02312482",
                      match_type: 3,
                      ctr_2m: "0.02539384",
                    },
                    lunchTime: "2023-09-21 00:00:00",
                    feedBackViews: [],
                    trace: {
                      exposure: {},
                      custom: {},
                      detailPage: {},
                      pdpParams: {
                        pdp_cdi: "",
                        pdp_npi: "",
                        pdp_perf: "",
                      },
                      click: {},
                      utLogMap: {
                        csp: "11880.83,1",
                        streamId: "942ff0e2-ae78-4ff1-9116-ffe58743236d",
                        itemOrder: "30",
                        pctr: "0.1287",
                        nasaUserTags: "-29883",
                        is_detail_next: "1",
                        BEC2ITC: "0",
                        esaCode: "",
                        discount: 54,
                        language: "en_US",
                        rid: "20231004181957719-184158076",
                        title_type: "original",
                        cvrScore: "0.35276",
                        scene: "pcJustForYou",
                        BEOFFC2ITC: 0,
                        serverTs: "1696468797981",
                        pvid: "7d0049b2-f3fa-4d57-b42f-68b5ee97f9e7",
                        stream_id: "942ff0e2-ae78-4ff1-9116-ffe58743236d",
                        pctcvr: "0.0009",
                        BERTC2ITC: 0,
                        olad_pvId: "7d0049b2-f3fa-4d57-b42f-68b5ee97f9e7",
                        isNewType: false,
                        original_price_type: "offer",
                        matchTypes: "3",
                        BERTI2ITC: 0,
                        rerank_score: "0",
                        spmC: "rcmdprod",
                        i2i_score: "0",
                        sku_id: "12000035574907929",
                        matchScore: "3;0.1287",
                        mixrank_enable: false,
                        trafficChannel: "main",
                        matchNum: 1,
                        ump_atmospheres: "none",
                        album_mixrank_enable: false,
                        selling_point: "m0000063",
                        gasaCode: "",
                        "gps-id": "pcJustForYou",
                        original_price_strategy: "default",
                        be_score: "0.1287",
                        x_object_id: "1005006066307301",
                        request: "direct",
                        BEOFFI2ITC: 0,
                        real_match_score: "3;0.019483",
                        x_object_type: "item",
                        rankScore: "0.011829",
                        "scm-cnt": "1007.13562.357122.0",
                        mixrank_success: false,
                        platform: "pc",
                        countryId: "NG",
                        tpp_trace: "2103209b16964687975787939e1ae5",
                        tpp_buckets: "",
                        olad_abId: 357122,
                        itemAlgInfo: "addFast",
                        displayPrice: "11880.83",
                        oip: "25827.89,0",
                        BEI2ITC: "0",
                        pcvr: "0.0067",
                        ctrScore: "0.118794",
                        pagePos: 34,
                        prod: "1005006066307301",
                        hit_19_forbidden: false,
                        album_mixrank_success: false,
                        isNewUser: true,
                        picGroupId: "1005006066307301",
                        sku_ic_tags: "[]",
                        is_adult_certified: false,
                        freeship: false,
                        pageIndex: 1,
                        BlackCardBizType: "pc_new_card",
                        nasaCode: "",
                        currencyCode: "NGN",
                        prerank_sc: "0.0054",
                        olad_memberSeq: "0",
                        global_union_ab_exp: "notExist",
                      },
                    },
                    trade: {
                      tradeDesc: "192 sold",
                    },
                    prices: {
                      builderType: "skuCoupon",
                      taxRate: "0",
                      pricesStyle: "default",
                      salePrice: {
                        formattedPrice: "NGN11,880.83",
                        minPriceDiscount: 54,
                        cent: 1188083,
                        minPrice: 11880.83,
                        priceType: "sale_price",
                        discount: 54,
                        minPriceType: 2,
                        currencyCode: "NGN",
                      },
                      prefix: "Sale price:",
                      currencySymbol: "NGN",
                      skuId: "12000035574907929",
                    },
                    sellingPoints: [
                      {
                        tagStyleType: "default",
                        tagContent: {
                          tagStyle: {
                            color: "#FD384F",
                            position: "2",
                          },
                          displayTagType: "text",
                          tagText: "Extra 5% off with coins",
                        },
                        resourceCode: "searchItemCard",
                        resourcePriority: 10,
                        source: "flexiCoin_new_atm",
                        sellingPointTagId: "m0000063",
                      },
                    ],
                    productType: "natural",
                  },
                ],
                rcmdTitle: {
                  title: "More to love",
                  tItemType: "nt_rcmd_title",
                },
              },
              templates: [],
              pageInfo: {
                streamId: "942ff0e2-ae78-4ff1-9116-ffe58743236d",
                success: true,
                pageSize: 30,
                finished: false,
                style: "wf",
                page: 1,
                RN: "35686d16-1a93-4422-b090-c5294744b8f8",
                pageName: "rcmdProductV2",
                scene: "recommend",
              },
              modsStyle: {
                prices: {
                  decimal_point: ".",
                  comma_style: ",",
                  currencySymbol: "NGN",
                  showDecimal: "true",
                  symbol_position: "left",
                },
              },
              extInfo: {
                streamId: "942ff0e2-ae78-4ff1-9116-ffe58743236d",
                pin: "",
              },
            },
          ],
          pvid: "35686d16-1a93-4422-b090-c5294744b8f8",
          scm: "1007.10668.336136.0",
          version: 1.0,
          tpp_trace: "2103209b16964687975787939e1ae5",
          tpp_buckets: "",
        },
        ret: ["SUCCESS::调用成功"],
        traceId: "2103209b16964687975787939e1ae5",
        v: "1.0",
      };
      return res.json(responseData);
    } else if (appKey === "12574478") {
      const responseData = {
        message: "Response for APP Key 2",
        // Add product data specific to API Key 2
      };
      return res.json(responseData);
    } else if (appKey === "24815443") {
      // Default response for unknown API keys
      const responseData = {
        message: "Response for APP Keys 3",
        // Add default data or error message
      };
      return res.json(responseData);
    }
  }
);

router.post("/api/products/add", productController.createProduct);

module.exports = router;
