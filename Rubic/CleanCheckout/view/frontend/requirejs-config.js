/**
 * Copyright © 2018 Rubic. All rights reserved.
 * See LICENSE.txt for license details.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Rubic_CleanCheckout/js/mixin/shipping-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Rubic_CleanCheckout/js/mixin/payment-mixin': true
            },
            'Magento_Checkout/js/view/summary/cart-items': {
                'Rubic_CleanCheckout/js/mixin/cart-items-mixin': true
            },
            'Magento_Checkout/js/view/summary/shipping': {
                'Rubic_CleanCheckout/js/mixin/summary-shipping-mixin': true
            },
            'Magento_Checkout/js/view/summary/abstract-total': {
                'Rubic_CleanCheckout/js/mixin/abstract-total-mixin': true
            },
            'Magento_Checkout/js/view/form/element/email': {
                'Rubic_CleanCheckout/js/mixin/email-mixin': true
            },
            'Magento_Checkout/js/model/shipping-rates-validator': {
                'Rubic_CleanCheckout/js/mixin/shipping-rates-validator-mixin': true
            },
            'Magento_Checkout/js/action/select-shipping-method': {
                'Rubic_CleanCheckout/js/mixin/select-shipping-method-mixin': true
            }
        }
    }
};