describe("template spec", () => {
    it("passes", () => {

      cy.visit("https://www.tractorjunction.com/");
   cy.visit("https://www.tractorjunction.com/mahindra-tractor/575-di-xp-plus/");
   cy.wait(3000);
   cy.get('.d-none > .row > :nth-child(1) > .tractor_initiate').click();
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(1) > .form-control').type("TESTQA");
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(2) > .form-control').type(9158593785);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(3) > #statesid').select(3);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(4) > .custom-select').select(2);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(5) > .custom-select').select(1);
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > #tent_pur > .purchaseTimePeriod > .row > :nth-child(4) > .checkbox-custom').click();
   cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .tractor_submit').click();

   cy.visit("https://www.tractorjunction.com/used-tractor/mahindra/575-di-xp-plus-110585/126561/");
   cy.get('#name').type("TESTQA");
   cy.get(':nth-child(6) > #buyermobile').type(9158593785);
   cy.get('#inputState').select(3);
   cy.get('#inputdistric').select(2);
   cy.get('#price').type(100);
   cy.get(':nth-child(1) > .form-submit-btn').click();

   cy.visit("https://www.tractorjunction.com/sell-used-tractor/");
   cy.get(':nth-child(2) > :nth-child(1) > .form-group > .loc-edit > span').click();
   cy.get(':nth-child(2) > :nth-child(1) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
   cy.get('#locations > li > a').click();
   cy.get('#userName').type("TESTQA");
   cy.get('#userMobile').type(9158593785);
   cy.get('.form-sell-btn2').click();
   cy.get('#tractorBrand').select(2);
   cy.get('#tractorModal').select(3);
   cy.get(':nth-child(4) > .form-group > #tractorYear').select(5);
   cy.get('#step1 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click();
   cy.get('#tractorEnginConditions').select(2);
  cy.get('#tractorTyreConditions').select(3);
  cy.get('#tractorEngineHours').select(4);
   cy.get('#step2 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click();
   
  // cy.get('#attachment-preview1')
  // .selectFile("cypress/fixtures/Truck_1.png" );

   //cy.get('#fileField2')
  // .selectFile("cypress/fixtures/Truck_2.png" );

  cy.visit("https://www.tractorjunction.com/tractor-loan/");
  cy.get(':nth-child(2) > .input-group > .form-control').type("TESTQA");
  cy.get(':nth-child(3) > .input-group > .form-control').type(9158593785);
  cy.get(':nth-child(4) > .form-group > .loc-edit').click();
  cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("Noida");
  cy.get('#locations > li > a').click();
  cy.get('#SubmitLoanForm').click();

     cy.visit("https://www.tractorjunction.com/used-tractor-loan/");
        cy.get(':nth-child(2) > .input-group > .form-control').type("TESTQA");
        cy.get(':nth-child(3) > .input-group > .form-control').type(9158593785);
        cy.get(':nth-child(4) > .form-group > .loc-edit').click();
        cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('#locations > li > a').click();
        cy.xpath("//div[text()='Select make year']").click();
        cy.xpath("((//div[@id='year-div'])[1]//ul//li)[2]").click();
        cy.get('#SubmitLoanForm').click();

        cy.visit("https://www.tractorjunction.com/loan-against-tractor/");
        cy.get(':nth-child(2) > .input-group > .form-control').type("TESTQA");
        cy.get(':nth-child(3) > .input-group > .form-control').type(9158593785);
        cy.get(':nth-child(4) > .form-group > .loc-edit').click();
        cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('#locations > li > a').click();
        cy.xpath("//div[text()='Select make year']").click();
        cy.xpath("((//div[@id='year-div'])[1]//ul//li)[3]").click();
        cy.get('#SubmitLoanForm').click();

 cy.visit("https://www.tractorjunction.com/personal-loan/");
 cy.get(':nth-child(2) > .input-group > .form-control').type("TESTQA");
 cy.get(':nth-child(3) > .input-group > .form-control').type(9158593785);
 cy.get(':nth-child(4) > .form-group > .loc-edit').click();
 cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
 cy.get('#locations > li > a').click();
 cy.get('#SubmitLoanForm').click();  
 cy.wait(5000);  

 cy.visit("https://www.tractorjunction.com/implement/khedut/tractor-tipping-trailer/");
 cy.wait(3000);
 cy.get('.mt-3 > .row > :nth-child(1) > .requestModal').click();
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(1) > .form-control').type("TESTQA");
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(2) > .form-control').type(9158593785);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(3) > #statesid').select(3);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(4) > .custom-select').select(1);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(5) > .custom-select').select(1);
 cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click();

 cy.visit("https://www.tractorjunction.com/used-implement/mourya/2013/5917/");
 cy.get('#name').type("TESTQA");
 cy.get('#email').type(9158593785);
 cy.get('#inputState').select(2);
 cy.get('#inputdistric').select(1);
 cy.get('#price').type(100);
 cy.get(':nth-child(1) > .form-submit-btn').click();

 cy.wait(3000);
 cy.visit("https://www.tractorjunction.com/harvester/17/kartar-4000-combine-harvester/");
      cy.get('.mt-3 > .row > :nth-child(1) > .form-submit-btn').click();
      cy.wait(3000);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(1) > .form-control').type("TESTQA");
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(2) > .form-control').type(9158593785);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(3) > #statesid').select(2);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(4) > .custom-select').select(2);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(5) > .custom-select').select(1);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click();

      cy.wait(3000);
cy.visit("https://www.tractorjunction.com/used-harvester/john-deere/green-gold/5972/");
cy.get('#name').type("TESTQA");
cy.get('#email').type(9158593785);
cy.get('#inputState').select(2);
cy.get('#inputdistric').select(1);
cy.get('#price').type(100);
cy.get(':nth-child(1) > .form-submit-btn').click();    

cy.wait(3000);
cy.visit("https://www.tractorjunction.com/sell/harvester/");
cy.get('.col-12 > .form-group > .form-control').select(2);
cy.get(':nth-child(2) > .form-group > .form-control').type("TESTQA");
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(1);
cy.get(':nth-child(4) > .form-group > .form-control').select(2);
cy.get('.row > :nth-child(5) > .form-group > .form-control').select(1);
cy.get('fieldset.ng-scope > .form-submit-btn').click();

cy.get('.col-12 > .form-group > .form-control').type("TESTQA");
cy.get(':nth-child(2) > .form-group > .form-control').select(2);
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(3);
cy.get('.input-group > .form-control').type(50);
cy.get('.row > :nth-child(5) > .form-group > .form-control').type("thank you");
cy.get('fieldset.ng-scope > .form-submit-btn').click();

//write here img uplode code  




      /*cy.visit('https://www.tractorjunction.com/broker-dealers/')
    cy.get('#BrokerName').type('TESTQA')
    cy.get(':nth-child(2) > .form-group > .form-control').type(9158593785)
    cy.get('.select2-search__field').type('Eicher{enter}')
    cy.get('.select2-search__field').type('Mahindra{enter}')
    cy.get('.select2-search__field').type('Swaraj{enter}')
    cy.get(':nth-child(4) > .form-group > .form-control').select(1)
    cy.get('.row > :nth-child(5) > .form-group > .form-control').select(1)
    cy.get(':nth-child(6) > .form-group > .form-control').select(1)
    cy.get('#formSubmit').click()
    cy.get('.col-xs-11').contains('Thank you for contacting us')   */











      /*cy.wait(3000);
      cy.visit("https://www.tractorjunction.com/broker-dealers/");
      cy.get('#BrokerName').type("TESTQA");
      cy.get(':nth-child(2) > .form-group > .form-control').type(9158593785);
      cy.get('.select2-selection').click();
      cy.xpath("(//select[@id='brandId']//option)[2]").click();   */
      
      //cy.wait(3000);
     
       //cy.get('#select2-brandId-result-wphq-55').click();
      //cy.get('#select2-brandId-result-up1x-56').click();
      //cy.get('#select2-brandId-result-nsj9-57').click();
      
      //cy.get(':nth-child(4) > .form-group > .form-control').select(2);
      //cy.get('.row > :nth-child(5) > .form-group > .form-control').select(2);
      //cy.get('.row > :nth-child(5) > .form-group > .form-control').select(1);
      //cy.get('#formSubmit').click();





      //cy.get('#fileField2')
     // .selectFile("cypress/fixtures/Truck_2.png" );

    /* cy.get('#images > .sellTruckForm-priceInfo > .fillBtn').click();

     cy.wait(2000);    
     cy.get('#fileField1')
     .selectFile("cypress/fixtures/Truck_1.png" ,{force: true});   */
 











      /*cy.visit("https://www.tractorjunction.com/harvester/17/kartar-4000-combine-harvester/");
      cy.get('.mt-3 > .row > :nth-child(1) > .form-submit-btn').click();
      cy.wait(3000);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(1) > .form-control').type("TESTQA");
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(2) > .form-control').type(9158593785);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(3) > #statesid').select(2);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(4) > .custom-select').select(2);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8) > :nth-child(5) > .custom-select').select(1);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click();
     

      */











   /* cy.visit("https://www.tractorjunction.com/sell-used-tractor/");
   cy.get(':nth-child(2) > :nth-child(1) > .form-group > .loc-edit > span').click();
   cy.get(':nth-child(2) > :nth-child(1) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
   cy.get('#locations > li > a').click();
   cy.get('#userName').type("TESTQA");
   cy.get('#userMobile').type(9158593785);
   cy.get('.form-sell-btn2').click();
   cy.get('#tractorBrand').select(2);
   cy.get('#tractorModal').select(3);
   cy.get(':nth-child(4) > .form-group > #tractorYear').select(5);
   cy.get('#step1 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click();
   cy.get('#tractorEnginConditions').select(2);
  cy.get('#tractorTyreConditions').select(3);
  cy.get('#tractorEngineHours').select(4);
   cy.get('#step2 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click();
   
    */
















       /* cy.visit("https://trucks.tractorjunction.com/en/emi-calculator");
       cy.get('#brand_id').select(2);
       cy.get('#truck_id').select(3);
       cy.get('#variant_id').select(4);
       cy.get('.loanOffer-btn-row > .w-100').click();

      cy.get('.borderBtn').click();
      cy.get('#Name').type("TESTQA");
      cy.get('#phone').type(9158593785);

      cy.get('.check-box-wrp > :nth-child(2)').click();
      cy.get('#SubmitOnroadPriceForm').click();  */
      // cy.get('#SubmitOnroadPriceForm').click();
       //cy.wait(5000);
       //cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();

      // cy.wait(5000);
      //cy.get('.floatingMobile-left > .fillBtn').click();
      // cy.get('.navbar-nav > :nth-child(4) > #navbarDropdown1').click();
       //cy.get(':nth-child(3) > .form-control').select(3);
       //cy.get(':nth-child(4) > .form-control').select(2);
       //cy.get('#SubmitOnroadPrice').click();
      // cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();











       /* cy.wait(3000);
        cy.visit("https://www.tractorjunction.com/apollo-tyres/krishak-gold-drive-13-6-x-28/16/");
        cy.get('.mt-3 > .row > :nth-child(1) > .form-submit-btn').click();
        cy.xpath("(//input[@placeholder='Enter Your Name'])[1]").type("TESTQA");
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .row > :nth-child(2) > .form-control').type(9158593785);
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .row > .col-sm-12 > .custom-select').select(2);
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .row > :nth-child(4) > .custom-select').select(2);
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .row > :nth-child(5) > .custom-select').select(1);
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click();*/
      /*  //cy.wait(5000);
        //cy.get('.video-close > .filter-img').click();
        cy.get('.modal.show > .modal-dialog > .modal-content > .close > .filter-img')
        //cy.get('.mt-3 > .row > :nth-child(2) > .form-submit-btn').click();
        cy.get('#brand_1').select(2);
        cy.get('#model_1').select(1);
        cy.get('#brand_2').select(3);
        cy.get('#model_2').select(3);
        cy.get('#brand_3').select(2);
        cy.get('#model_3').select(1);
        cy.get('#show').click();         */






       /* cy.wait(3000);
        cy.visit("https://www.tractorjunction.com/on-road-price/");
        cy.get('#brand_id').select(2);
        cy.get('#modelreview').select(1);
        cy.get('#validationDefault01').type("TESTQA");
        cy.get('#validationDefault03').type(9158593785);
        cy.get(':nth-child(5) > :nth-child(5) > .form-group > .form-control').select(2);
        cy.get(':nth-child(6) > .form-group > .form-control').select(2);
        cy.get(':nth-child(7) > .form-group > .form-control').select(2);
        cy.get('.col-md-8 > #tractor_submit_form > .tractor_submit').click();  */
        
        //cy.get('.row > :nth-child(1) > .form-group > .form-control').select(1);
        //cy.get(':nth-child(2) > .form-group > .form-control').select(2);
        //cy.get(':nth-child(3) > .form-group > .radioCustomBtnGroup > :nth-child(2) > .radioCustomBtnSpan').type("TESTQA");
        //cy.get(':nth-child(5) > .form-group > .radioCustomBtnGroup > :nth-child(1) > .radioCustomBtnSpan').type(9158593785);
        //cy.get('.form-view-inner > .form-submit-btn').click();

       //when you change mobile number then we need run (15 to 19 no of code)

       /* cy.visit("https://www.tractorjunction.com/loan-against-tractor/");
        cy.get(':nth-child(2) > .input-group > .form-control').type("TESTQA");
        cy.get(':nth-child(3) > .input-group > .form-control').type(9158593785);
        cy.get(':nth-child(4) > .form-group > .loc-edit').click();
        cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('#locations > li > a').click();
        cy.xpath("//div[text()='Select make year']").click();
        cy.xpath("((//div[@id='year-div'])[1]//ul//li)[3]").click();
        cy.get('#SubmitLoanForm').click();    */

        /*cy.visit("https://www.tractorjunction.com/used-tractor-loan/");
        cy.get(':nth-child(2) > .input-group > .form-control').type("TESTQA");
        cy.get(':nth-child(3) > .input-group > .form-control').type(9158593785);
        cy.get(':nth-child(4) > .form-group > .loc-edit').click();
        cy.get(':nth-child(4) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('#locations > li > a').click();
        cy.xpath("//div[text()='Select make year']").click();
        cy.xpath("((//div[@id='year-div'])[1]//ul//li)[2]").click();
        cy.get('#SubmitLoanForm').click();
                                              */

   /*cy.visit("https://trucks.tractorjunction.com/en/dealers/scania?utm_source=push_ads");
   cy.get(':nth-child(1) > .dealerBlock-inner > .dealer-inner-content > .dealerBlock-contact > .linkclr').click();
   cy.get('#name').type("test qa");
   cy.get('#mobile').type(9899977685);

   cy.xpath("(//div[@class='loc-edit'])[1]").click();
   cy.get('#DealerLeadForm > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
   cy.wait(2000);
   cy.get('.hashpop-result > #locations > li > a').click();
   cy.get('#model_id').select(5)
   cy.get('#DealerLeadForm > .row > .check-group > .check-box-wrp > :nth-child(3)').click();
   cy.get('#SubmitDealerLead').click();
   */
   

   //cy.get('#model_id').select(3);







    });

});