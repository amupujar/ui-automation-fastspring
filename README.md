README_2
Frame work-protractor with selenium webdriver running in elipse

It has two parts i.e is specs and conf
Spec is nothing but specifications mentioned for this particular project for creating page object model
here checkout.js file is created where in separately attributes are created and same is invoked in spec.js file
where different test cases are written 
1. First test case is to check the error message displayed when user enters invalid coupon
2. second is to automate the checkout page validation
where on clicking on credit/debit card pop should open
3. Third is to check the payment button detials by entering corrcet detials of user alomg with credit card number, cvv etc
4. Fourth is to check the clicking on payment button without entering the details.
To run the test cases
1. Open the command line
2. In first tab start npm server which should be installed
3. update the webdriver manager
4. start the webdriver manager
5. In second tab hit on conf.js- $ ./node_modules/.bin/protractor conf.js
6. It navigates to google chrome and every test case will run .

Protractor is a frame work which helps to test the Angular JS applications. since it is written in angular js , using this tool for automation which helps in creating page object models and also it also gives the results on spot without adding any wait commnads .
It also helps in taking screenshots when there is an error captured.





