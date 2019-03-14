/**
 * Copyright © 2018 Rubic. All rights reserved.
 * See LICENSE.txt for license details.
 */
define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Rubic_CleanCheckoutNewsletter/newsletter'
        },

        isEnabled: function () {
            return window.checkoutConfig.newsletterEnabled;
        },

        isCheckedByDefault: function () {
            return window.checkoutConfig.newsletterChecked;
        },

        getCheckoutLabel: function () {
            return window.checkoutConfig.newsletterLabel;
        }
    });
});