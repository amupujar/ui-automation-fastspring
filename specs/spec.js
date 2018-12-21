var CheckOutPage = require('./page-objects/checkout.js');
var ErrorMessagesMapping = require('./pages/errorMessages.json');


describe('Protractor Application', function() {

    var checkOutPage,errorMessages;

    beforeEach(function() {
        checkOutPage = new CheckOutPage();
    });

    xit('Apply Invalid coupon', function() {
        checkOutPage.visit();
        expect(browser.getCurrentUrl()).toContain("amruta");
        checkOutPage.coupon.sendKeys("Invalid");
        checkOutPage.applyButton.click();
        
        var textRows = element(by.className('alert ng-isolate-scope alert-danger alert-dismissable')).getText();
        
        expect(textRows).toContain("The promotional code you entered does not exist.");

    });
    
    it('Checkout Page validation', function() {
    	checkOutPage.visit();
    
    	var card = element(by.cssContainingText('.ng-binding','Credit / Debit Card')).click();
    	browser.sleep(2000).then(function() {
    	checkOutPage.firstName.click();
    	checkOutPage.firstName.sendKeys("Amruta");
    	checkOutPage.LastName.sendKeys("Pujar");
    	checkOutPage.Email.sendKeys("amupujar@gmail.com");
    	checkOutPage.CardNumber.sendKeys("4242424242424242");
    	checkOutPage.CardExpireMonth.sendKeys("06");
    	checkOutPage.CardExpireYear.sendKeys("25");
    	checkOutPage.CardSecurityCode.sendKeys("*UMSM");
    	checkOutPage.Address.sendKeys("2098");
    	checkOutPage.City.sendKeys("Seattle");
    
    	checkOutPage.ZipCode.sendKeys("98007");
    	checkOutPage.PhoneNumber.sendKeys("4792249369");
    	browser.sleep(2000).then(function() {
    		var list2 = element.all(by.repeater('state in regionList.US'));
    	var region = element(by.name('contact.region')).click();
    	console.log(list2.get(10).getText());
    	});
    	//expect(firstOption.getText()).toEqual('red');
    	checkOutPage.SavePaymentDetails.click();
    	});	
    	
    });
    
    it('No payment details', function() {
    	
    	checkOutPage.visit();
    	checkOutPage.SavePaymentDetails.click();
    })
});