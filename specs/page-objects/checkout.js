'use strict';
var OrderSummaryPage = function(){};
var scrollIntoView = require('./util.js').scrollIntoView;

OrderSummaryPage.prototype = Object.create( {}, {
    visit : {
        value : function () {
            browser.get('/amruta-20181212');
        }
    },
    coupon: {
        get: function () {
            return element(by.id('order-coupons'));
        }
    },
    applyButton: {
        get: function () {
            return element(by.css('[ng-click="applyCoupons()"]'));
        }
    },
    firstName: {
    	get: function () {
    		return element(by.name('contact.firstName'));
    	}
    },
    LastName: {
    	get: function () {
    		return element(by.name('contact.lastName'))
    	}
    },
    Email: {
    	get: function () {
    		return element(by.name('contact.email'))
    	}
    },
    CardNumber : {
    	get: function () {
    		return element(by.id('card-number'))
    	}
    },
    CardExpireMonth : {
    	get: function () {
    		return element(by.name('card.month'))
    	}
    },
    CardExpireYear : {
    	get: function () {
    		return element(by.name('card.year'))
    	}
    },
    CardSecurityCode : {
    	get: function () {
    		return element(by.id('card-security'))
    	}
    },
    Address : {
    	get: function () {
    		return element(by.name('contact.addressline1'))
    	}
    },
    City : {
    	get: function () {
    		return element(by.name('contact.city'))
    	}
    },
    State
    : {
    	get: function () {
    		return element(by.css('State'))
    	}
    },
    ZipCode : {
    	get: function () {
    		return element(by.name('contact.postalCode'))
    	}
    },
    PhoneNumber
    : {
    	get: function () {
    		return element(by.id('contact-phone'))
    	}
    },
    SavePaymentDetails:
    	{
    		get: function()
    		{
    			 return element(by.partialButtonText('Save Payment Details'));

    		}
    	},
    

});

module.exports = OrderSummaryPage;