const mongoose = require('mongoose');

const businessSettingSchema = new mongoose.Schema({
    system_default_currency: {

    },
    vendor_system_activation: {

    },
    currency_format: {

    },
    symbol_format: {

    },
    paypal_payment: {
        enabled: Boolean,
    },
    stripe_payment: {
        enabled: Boolean,
    },
    cash_payment: {
        enabled: Boolean,
    },
    payumoney_payment: {
        enabled: Boolean,
    },
    payumoney_sandbox: {

    },
    paypal_sandbox: {

    },
    sslcommerz_sandbox: {

    },
    sslcommerz_payment: {
        enabled: Boolean,
    },
    vendor_commission: {
        enabled: Boolean,
    },
    google_analytics: {

    },
    facebook_login: {
        enabled: Boolean,
    },
    google_login: {
        enabled: Boolean,
    },
    twitter_login: {
        enabled: Boolean,
    },
    facebook_chat: {
        enabled: Boolean,
    },
    email_verification: {
        enabled: Boolean,
    },
    wallet_system: {
        enabled: Boolean,
    },
    coupon_system: {
        enabled: Boolean,
    },
    current_version: {
        type: String,
        default: '1.0',
    },
    instamojo_payment: {
        enabled: Boolean,
    },
    instamojo_sandbox: {

    },
    razorpay: {
        enabled: Boolean,
    },
    paystack: {
        enabled: Boolean,
    },
    pickup_point: {
        enabled: Boolean,
    },
    maintenance_mode: {
        enabled: Boolean,
    },
    voguepay: {
        enabled: Boolean,
    },
    voguepay_sandbox: {

    },
    category_wise_commission: {
        enabled: Boolean,
    },
    conversation_system: {
        enabled: Boolean,
    },
    guest_checkout_active: {
        enabled: Boolean,
    },
    facebook_pixel: {

    },
    classified_product: {

    },
    pos_activation_for_seller: {
        enabled: Boolean,
    },
    shipping_type: {

    },
    flat_rate_shipping_cost: {

    },
    shipping_cost_admin: {

    },
    payhere_sandbox: {

    },
    payhere: {
        enabled: Boolean,
    },
    google_recaptcha: {
        enabled: Boolean,
    },
    ngenius: {
        enabled: Boolean,
    },
    header_logo: {

    },
    show_language_switcher: {
        enabled: Boolean,
    },
    show_currency_switcher: {
        enabled: Boolean,
    },
    header_stikcy: {
        enabled: Boolean,
    },
    footer_logo: {

    },
    about_us_description: {

    },
    contact_address: {

    },
    contact_phone: {

    },
    contact_email: {

    },
    widget_one_labels: {

    },
    widget_one_links: {

    },
    widget_one: {

    },
    frontend_copyright_text: {

    },
    show_social_links: {

    },
    facebook_link: {
        type: String,
    },
    twitter_link: {
        type: String,
    },
    instagram_link: {
        type: String,
    },
    youtube_link: {
        type: String,
    },
    linkedin_link: {
        type: String,
    },
    payment_method_images: {

    },
    home_slider_images: {

    },
    home_slider_links: {

    },
    home_banner1_images: {

    },
    home_banner1_links: {

    },
    home_banner2_images: {

    },
    home_banner2_links: {

    },
    home_categories: {

    },
    top10_categories: {

    },
    top10_brands: {

    },
    website_name: {
        type: String,
        default: 'ecommerce',
    },
    site_motto: {
        type: String,
        default: '',
    },
    site_icon: {
        type: String,
        default: 'ecommerce',
    },
    base_color: {

    },
    base_hov_color: {

    },
    meta_title: {
        type: String,
        default: '',
    },
    meta_description: {
        type: String,
        default: '',
    },
    meta_keywords: {
        type: String,
        default: '',
    },
    meta_image: {
        type: String,
        default: '',
    },
    site_name: {
        type: String,
        default: 'ecommerce',
    },
    system_logo_white: {
        type: String,
        default: '',
    },
    system_logo_black: {
        type: String,
        default: '',
    },
    timezone: {

    },
    admin_login_background: {

    },
    iyzico_sandbox: {

    },
    iyzico: {

    },
    decimal_separator: {

    },
    nagad: {
        enabled: Boolean,
    },
    bkash: {
        enabled: Boolean,
    },
    bkash_sandbox: {

    },
    play_store_link: {
        type: String,
        default: '',
    },
    app_store_link: {
        type: String,
        default: '',
    },
    whatsapp_link: {
        type: String,
        default: '',
    },
    messenger_link: {
        type: String,
        default: '',
    },
    tiktok_link: {
        type: String,
        default: '',
    },
    huawei_store_link: {
        type: String,
        default: '',
    },
}, {
    timestamps: true,
});

const BusinessSettingSchema = mongoose.model('businessSettingSchema', businessSettingSchema)

module.exports = BusinessSettingSchema