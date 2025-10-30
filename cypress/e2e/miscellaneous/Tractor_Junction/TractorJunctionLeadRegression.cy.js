

describe("template spec", () => {
    it("passes", () => { 
      
   cy.visit("https://www.tractorjunction.com/"), {
    headers: {
        'accept': 'application/json, text/plain, */*',
        'user-agent': 'axios/0.27.2'
    }
    }
   cy.wait(3000);
   cy.get('#popularnew > .section-css-slider > :nth-child(2) > .new-tractor-main > .mb-2 > .tractor_initiate').click();
   cy.get('#tractor_submit_form > .row > :nth-child(1) > .form-control').clear();
   cy.wait(2000);
   cy.get('#tractor_submit_form > .row > :nth-child(1) > .form-control').type('testqa');
   cy.wait(2000);
   cy.get('#tractor_submit_form > .row > :nth-child(2) > .form-control').type(9554407522);
   cy.get('#statesid').select(2);
   cy.get('#tractor_submit_form > .row > :nth-child(4) > .custom-select').select(3);
   cy.wait(2000);
   cy.get('#tractor_submit_form > .row > :nth-child(5) > .custom-select').select(1);
   cy.get('#tractor_submit_form > .tractor_submit').click();
   cy.wait(2000);
   cy.get('#VerifyMobileNumber > .modal-dialog > .modal-content > .close > .filter-img').click();
   cy.wait(2000);
   cy.xpath("//a[@title='Receive similar offers']").click();
   cy.wait(2000);
   cy.xpath("(//div[@class='col-xs-11 col-sm-4 alert alert-success success-message-right animated bounceInDown']//span)[3]").should('exist');

   cy.visit("https://www.tractorjunction.com/tractors/");
   cy.get(':nth-child(1) > .new-tractor-main > .mb-2 > .tractor_initiate').click();
   cy.get('#tractor_submit_form > .row > :nth-child(1) > .form-control').clear();
   cy.wait(2000);
   cy.get('#tractor_submit_form > .row > :nth-child(1) > .form-control').type('testqa');
   cy.wait(3000);
   cy.get('#tractor_submit_form > .row > :nth-child(2) > .form-control').type(9554407522);
   cy.wait(2000);
   cy.get('#statesid').select(2);
   cy.wait(2000);
   cy.get('#tractor_submit_form > .row > :nth-child(4) > .custom-select').select(3);
   cy.wait(3000);
   cy.get('#tractor_submit_form > .row > :nth-child(5) > .custom-select').select(1);
   cy.wait(2000);
   cy.get('#tractor_submit_form > .tractor_submit').click();
   cy.wait(2000);
   cy.get('#VerifyMobileNumber > .modal-dialog > .modal-content > .close > .filter-img').click();
   cy.wait(2000);
   cy.xpath("//a[@title='Receive similar offers']").click();
   cy.wait(2000);
   cy.xpath("(//div[@class='col-xs-11 col-sm-4 alert alert-success success-message-right animated bounceInDown']//span)[3]").should('exist');

   cy.visit('https://www.tractorjunction.com/farmtrac-tractor/');
   cy.get(':nth-child(1) > .new-tractor-main > .mb-2 > .tractor_initiate').click();
   cy.wait(3000);
   cy.get('#tractor_submit_form > .row > :nth-child(1) > .form-control').clear();
   cy.wait(2000);
   cy.get('#tractor_submit_form > .row > :nth-child(1) > .form-control').type('testqa');
   cy.wait(3000);
   cy.get('#tractor_submit_form > .row > :nth-child(2) > .form-control').type(9554407522);
   cy.wait(3000);
   cy.get('#statesid').select(3);
   cy.wait(5000);
   cy.get('#tractor_submit_form > .row > :nth-child(4) > .custom-select').select(2);
   cy.wait(3000);
   cy.get('#tractor_submit_form > .row > :nth-child(5) > .custom-select').select(2);
   cy.wait(3000);
   cy.get('#tractor_submit_form > .tractor_submit').click();
   cy.get('#VerifyMobileNumber > .modal-dialog > .modal-content > .close > .filter-img').click();
   cy.wait(2000);
   cy.xpath("//a[@title='Receive similar offers']").click();
   cy.wait(2000);
   cy.xpath("(//div[@class='col-xs-11 col-sm-4 alert alert-success success-message-right animated bounceInDown']//span)[3]").should('exist');
   
   cy.visit('https://www.tractorjunction.com/all-brands/');
   cy.get('#farmtracnew-tab').click();
   cy.wait(3000);
   cy.get('#farmtracnew > .section-css-slider > :nth-child(1) > .new-tractor-main > .mb-2 > .tractor_initiate').click();
   cy.wait(3000);
   cy.get('#tractor_submit_form > .row > :nth-child(1) > .form-control').clear();
   cy.wait(2000);
   cy.get('#tractor_submit_form > .row > :nth-child(1) > .form-control').type('testqa');
   cy.wait(3000);
   cy.get('#tractor_submit_form > .row > :nth-child(2) > .form-control').type(9554407522);
   cy.wait(3000);
   cy.get('#statesid').select(3);
   cy.wait(5000);
   cy.get('#tractor_submit_form > .row > :nth-child(4) > .custom-select').select(2);
   cy.wait(3000);
   cy.get('#tractor_submit_form > .row > :nth-child(5) > .custom-select').select(2);
   cy.wait(3000);
   cy.get('#tractor_submit_form > .tractor_submit').click();
   cy.get('#VerifyMobileNumber > .modal-dialog > .modal-content > .close > .filter-img').click();
   cy.wait(2000);
   cy.xpath("//a[@title='Receive similar offers']").click();
   cy.wait(2000);
   cy.xpath("(//div[@class='col-xs-11 col-sm-4 alert alert-success success-message-right animated bounceInDown']//span)[3]").should('exist');

   cy.visit("https://www.tractorjunction.com/tractor-loan/");
   cy.wait(3000);
   cy.get(':nth-child(2) > .input-group > .form-control').clear();
   cy.wait(2000);
   cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
   cy.wait(2000);
   cy.get(':nth-child(3) > .input-group > .form-control').type(9554407522);
   cy.get(':nth-child(4) > .form-group > .loc-edit').click();
   cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("Noida");
   cy.wait(8000);
   cy.get(':nth-child(4) > .form-group > .loc-edit').click( {force: true});
   cy.get('#locations > li > a').click({force: true});
   cy.wait(3000);
   cy.get('#SubmitLoanForm').click({force: true});
   cy.wait(3000);
   cy.xpath("(//div[@class='col-xs-11 col-sm-4 alert alert-success success-message-right animated bounceInDown']//span)[3]").should('exist');

  cy.visit("https://www.tractorjunction.com/used-tractor-loan/");
  cy.wait(3000);
  cy.get(':nth-child(2) > .input-group > .form-control').clear();
  cy.wait(2000);
  cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
  cy.wait(2000);
  cy.get(':nth-child(3) > .input-group > .form-control').type(9554407522);
  cy.get(':nth-child(4) > .form-group > .loc-edit').click();
  cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
  cy.get('#locations > li > a').click();
  cy.xpath("//div[text()='Select make year']").click();
  cy.xpath("((//div[@id='year-div'])[1]//ul//li)[2]").click({force: true});
  cy.get('#SubmitLoanForm').click();
  cy.xpath("(//div[@class='col-xs-11 col-sm-4 alert alert-success success-message-right animated bounceInDown']//span)[3]").should('exist');

        cy.visit("https://www.tractorjunction.com/loan-against-tractor/");
        cy.wait(3000);
        cy.get(':nth-child(2) > .input-group > .form-control').clear();
        cy.wait(2000);
        cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
        cy.wait(2000);
        cy.get(':nth-child(3) > .input-group > .form-control').type(9554407522);
        cy.get(':nth-child(4) > .form-group > .loc-edit').click();
        cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('#locations > li > a').click();
        cy.xpath("//div[text()='Select make year']").click();
        cy.xpath("((//div[@id='year-div'])[1]//ul//li)[3]").click();
        cy.get('#SubmitLoanForm').click();
        cy.xpath("(//div[@class='col-xs-11 col-sm-4 alert alert-success success-message-right animated bounceInDown']//span)[3]").should('exist');

cy.visit("https://www.tractorjunction.com/personal-loan/");
 cy.wait(3000);
 cy.get(':nth-child(2) > .input-group > .form-control').clear();
 cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
 cy.wait(2000);
 cy.get(':nth-child(3) > .input-group > .form-control').type(9554407522);
 cy.get(':nth-child(4) > .form-group > .loc-edit').click();
 cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
 cy.get('#locations > li > a').click();
 cy.get('#SubmitLoanForm').click();  
 cy.xpath("(//div[@class='col-xs-11 col-sm-4 alert alert-success success-message-right animated bounceInDown']//span)[3]").should('exist');

   cy.visit("https://www.tractorjunction.com/mahindra-tractor/575-di-xp-plus/");
   cy.get('.d-none > .row > :nth-child(1) > .tractor_initiate').click();
   cy.wait(1000);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(1) > .form-control').clear();
   cy.wait(2000);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(1) > .form-control').type("testqa");
   cy.wait(2000);
   
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(2) > .form-control').type(9554407522);
   cy.wait(3000);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(3) > #statesid').select(2);
   cy.wait(3000);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(4) > .custom-select').select(2);
   cy.wait(3000);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(5) > .custom-select').select(1);
   //cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > #tent_pur > .purchaseTimePeriod > .row > :nth-child(4) > .checkbox-custom').click();
   cy.wait(3000);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .tractor_submit').click();
  
   cy.visit("https://www.tractorjunction.com/used-tractor/mahindra/575-di-xp-plus-110585/126561/");
   cy.wait(3000);
   cy.get('#name').clear();
   cy.get('#name').type("testqa");
   cy.wait(2000);
   cy.get(':nth-child(7) > #buyermobile').type(9554407522);
   cy.get('#inputState').select(3);
   cy.get('#inputdistric').select(2);
   cy.get('#price').type(100);
   cy.get(':nth-child(1) > .form-submit-btn').click();

   cy.visit("https://www.tractorjunction.com/sell-used-tractor/");
   cy.get(':nth-child(2) > :nth-child(1) > .form-group > .loc-edit > span').click();
   cy.get(':nth-child(2) > :nth-child(1) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
   cy.wait(2000);
   cy.get('#locations > li > a').click();
   cy.wait(3000);
   cy.get('#userName').clear();
   cy.get('#userName').type("testqa");
   cy.wait(2000);
   cy.get('#userMobile').type(9554407522);
   cy.get('.form-sell-btn2').click();
   cy.get('#tractorBrand').select(2);
   cy.get('#tractorModal').select(3);
   cy.get(':nth-child(4) > .form-group > #tractorYear').select(5);
   cy.get('#step1 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click();
   cy.wait(3000);
   
   //cy.get('#step2 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click();
   //cy.get(':nth-child(1) > .attachment > .attachment-file > .attachment-preview')
   //cy.get('#attachment-preview1')
   //cy.get('#fileField1')
   //.selectFile("cypress/fixtures/Truck_1.png",{force: true});

    //cy.get('#fileField2')
   //.selectFile("cypress/fixtures/Truck_2.png",{force: true});   
  
 cy.visit("https://www.tractorjunction.com/implement/khedut/tractor-tipping-trailer/");
 cy.wait(3000);
 
 cy.get('.mt-3 > .row > :nth-child(1) > .requestModal').click();
 
 cy.wait(2000);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(1) > .form-control').clear();
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(1) > .form-control').type("testqa");
 cy.wait(2000);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(2) > .form-control').clear();
 cy.wait(3000);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(2) > .form-control').type(9554407522,{force: true});
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(3) > #statesid').select(2);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(4) > .custom-select').select(1);
 cy.wait(4000);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(5) > .custom-select').select(1);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click();

 
 cy.visit("https://www.tractorjunction.com/used-implement/mourya/2013/5917/");
 cy.wait(3000);
 cy.get('#name').clear();
 cy.get('#name').type("testqa");
 cy.wait(2000);
 cy.get('#email').type(9554407522);
 cy.get('#inputState').select(2);
 cy.wait(3000);
 cy.get('#inputdistric').select(1);
 cy.get('#price').type(100);
 cy.get(':nth-child(1) > .form-submit-btn').click({force: true});

 cy.wait(5000);
 cy.visit("https://www.tractorjunction.com/harvester/17/kartar-4000-combine-harvester/");
 cy.wait(3000);
      cy.get('.mt-3 > .row > :nth-child(1) > .form-submit-btn').click();
      cy.wait(3000);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(1) > .form-control').clear();
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(1) > .form-control').type("testqa");
      cy.wait(2000);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(2) > .form-control').type(9554407522);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(3) > #statesid').select(2);
      cy.wait(5000);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(4) > .custom-select').select(3);
      
      cy.wait(3000);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(9) > :nth-child(5) > .custom-select').select(1);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click();

cy.wait(3000);
cy.visit("https://www.tractorjunction.com/used-harvester/john-deere/green-gold/5972/");
cy.wait(3000);
cy.get('#name').clear();
cy.get('#name').type("testqa");
cy.wait(2000);
cy.get('#email').type(9554407522);
cy.get('#inputState').select(2);
cy.get('#inputdistric').select(1);
cy.get('#price').type(100);
cy.get(':nth-child(1) > .form-submit-btn').click();    

cy.wait(3000);
cy.visit("https://www.tractorjunction.com/sell/harvester/");
cy.get('.col-12 > .form-group > .form-control').select(2);
cy.wait(3000);
cy.get('.row > :nth-child(2) > .form-group > .form-control').clear({force: true});
cy.get('.row > :nth-child(2) > .form-group > .form-control').type("testqa");
cy.wait(2000);
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(1);
cy.get(':nth-child(4) > .form-group > .form-control').select(2);
cy.get('.row > :nth-child(5) > .form-group > .form-control').select(1);
cy.get('fieldset.ng-scope > .form-submit-btn').click();

cy.wait(5000);
cy.get('.col-12 > .form-group > .form-control').clear();
cy.get('.col-12 > .form-group > .form-control').type("testqa");
cy.wait(2000);
cy.get('.row > :nth-child(2) > .form-group > .form-control').select(3);
//cy.wait(2000);
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(3);
cy.wait(2000);
cy.get('.input-group > .form-control').type(50);
cy.wait(2000);
cy.get(':nth-child(5) > .form-group > .form-control').type("thank you");
cy.get('fieldset.ng-scope > .form-submit-btn').click();

//write here img uplode code  

cy.wait(3000);
cy.visit("https://www.tractorjunction.com/on-road-price/");
cy.get('#brand_id').select(2);
cy.get('#modelreview').select(1);
cy.wait(3000);
cy.get('#validationDefault01').clear();
cy.get('#validationDefault01').type("testqa");
cy.wait(3000);
cy.get('#validationDefault03').type(9554407522);
cy.get('.col-sm-12 > .form-group > .form-control').select(2);
cy.wait(3000);
cy.get('.row > :nth-child(6) > .form-group > .form-control').select(2);
cy.get(':nth-child(7) > .form-group > .form-control').select(2);
cy.get('.col-md-8 > #tractor_submit_form > .tractor_submit').click();
 
//cy.get('.row > :nth-child(1) > .form-group > .form-control').select(1);
//cy.get(':nth-child(2) > .form-group > .form-control').select(2);
//cy.get(':nth-child(3) > .form-group > .radioCustomBtnGroup > :nth-child(2) > .radioCustomBtnSpan').type("testqa");
//cy.wait(2000);
//cy.get(':nth-child(5) > .form-group > .radioCustomBtnGroup > :nth-child(1) > .radioCustomBtnSpan').type(9554407522);
//cy.get('.form-view-inner > .form-submit-btn').click();
//when you change mobile number then we need run (15 to 19 no of code)

cy.wait(3000);
cy.visit("https://www.tractorjunction.com/become-certified-dealer/");
cy.wait(3000);
cy.get('.row > :nth-child(1) > .form-group > .form-control').clear();
cy.get('.row > :nth-child(1) > .form-group > .form-control').type("testqa");
cy.wait(2000);
cy.get('.row > :nth-child(2) > .form-group > .form-control').type(9554407522);
cy.get('.row > :nth-child(3) > .form-group > .form-control').type("ABC@123");
cy.get('#state').select(2);
cy.get('.row > :nth-child(5) > .form-group > .form-control').select(1);
cy.get('.row > :nth-child(6) > .form-group > .form-control').select(1);
cy.get('.col-sm-12 > .form-group > .form-control').type("thank you");
cy.get('.form-view-inner > .form-submit-btn').click();    

cy.wait(3000);
cy.visit("https://www.tractorjunction.com/certified-dealers/maharashtra/karpe-farmtrac/");
cy.get('.mt-3 > .row > :nth-child(1) > .form-submit-btn').click();
cy.wait(3000);
cy.get('#username').clear();
cy.get('#username').type("testqa");
cy.wait(2000);
cy.get('#usermobile').type(9554407522);
cy.get('#submitReqBtn').click();      


 cy.wait(3000);
 cy.visit("https://www.tractorjunction.com/apollo-tyres/krishak-gold-drive-13-6-x-28/16/");
 cy.get('.mt-3 > .row > :nth-child(1) > .form-submit-btn').click();
 cy.wait(3000);
 cy.xpath("(//input[@placeholder='Enter Your Name'])[1]").clear();
 cy.xpath("(//input[@placeholder='Enter Your Name'])[1]").type("testqa");
 cy.wait(2000);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .row > :nth-child(2) > .form-control').type(9554407522);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .row > .col-sm-12 > .custom-select').select(2);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .row > :nth-child(4) > .custom-select').select(2);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .row > :nth-child(5) > .custom-select').select(1);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click();
      //here mobile number is same so if mobile number is change then we automate(187 to 197 )code
          //cy.wait(5000);
        //cy.get('.video-close > .filter-img').click();
       // cy.get('.modal.show > .modal-dialog > .modal-content > .close > .filter-img')
        //cy.get('.mt-3 > .row > :nth-child(2) > .form-submit-btn').click();
       // cy.get('#brand_1').select(2);
        //cy.get('#model_1').select(1);
        //cy.get('#brand_2').select(3);
        //cy.get('#model_2').select(3);
       // cy.get('#brand_3').select(2);
       // cy.get('#model_3').select(1);
       // cy.get('#show').click();         
       

cy.wait(3000);
cy.visit("https://www.tractorjunction.com/tractor-dealership-enquiry/");
cy.wait(3000);
cy.get('#validationDefault01').clear();
cy.get('#validationDefault01').type("testqa");
cy.wait(2000);
cy.get('#validationDefault03').type(9554407522);
cy.get('#state').select(3);
cy.get('#district').select(1);
cy.get('#brand').select(2);
//cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
//i am not robot---not automate
cy.get('.form-view-inner > .form-submit-btn').click();  

cy.wait(3000);
cy.visit('https://www.tractorjunction.com/broker-dealers/')
cy.wait(3000);
cy.get('#BrokerName').clear();
cy.get('#BrokerName').type('testqa')
cy.wait(2000);
cy.get('.row > :nth-child(2) > .form-group > .form-control').type(9554407522)
cy.get('.select2-search__field').type('Eicher{enter}')
cy.get('.select2-search__field').type('Mahindra{enter}')
cy.get('.select2-search__field').type('Swaraj{enter}')
cy.get(':nth-child(4) > .form-group > .form-control').select(1)
cy.get('.row > :nth-child(5) > .form-group > .form-control').select(1)
cy.get('.row > :nth-child(6) > .form-group > .form-control').select(1)
cy.get('#formSubmit').click()
cy.get('.col-xs-11').contains('Thank you for contacting us')  
cy.wait(3000);
cy.visit("https://www.tractorjunction.com/hi/krishe");
cy.wait(3000);
cy.get('#inputname').clear();
cy.get('#inputname').type("testqa");
cy.wait(2000);
cy.get('#inputnumber').type(9554407522);
cy.get(':nth-child(3) > .form-group > .loc-edit').click();
cy.get(':nth-child(3) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
cy.get('#locations > li > a').click();  
cy.get('#submitEKrishe').click();

cy.wait(3000);
cy.visit("https://www.tractorjunction.com/tractor-loan-emi-calculator/");
cy.get('#brand_id').select(3);
cy.get('#modelreview').select(3);
cy.get('.loanOffer-btn-row > .w-100').click();
cy.wait(3000);
cy.get('.borderBtn').click();
cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(1) > .form-control').clear();
cy.wait(2000);
cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(1) > .form-control').type('Testqa');
cy.wait(2000);
cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(2) > .form-control').type(9554407522);
cy.wait(2000);
cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(3) > #statesid').select(2);
cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(4) > .custom-select').select(3);
cy.wait(5000);
cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(9) > :nth-child(5) > .custom-select').select(1);
cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .tractor_submit').click();
   
cy.wait(3000);
cy.visit("https://www.tractorjunction.com/shop/service-kit/");  

cy.get(':nth-child(1) > .part-product-main > .part-product-detail > .req-call-btn > .req-button-list').click();
cy.get('.RequestWidgetCallBackform > .row > :nth-child(1) > .input-group > .form-control').clear();
cy.wait(3000);
cy.get('.RequestWidgetCallBackform > .row > :nth-child(1) > .input-group > .form-control').type('testqa');
cy.wait(3000);
cy.get('.RequestWidgetCallBackform > .row > :nth-child(2) > .input-group > .form-control').type(9554407522);
cy.get('.RequestWidgetCallBackform > .fillBtn').click();


    });

});