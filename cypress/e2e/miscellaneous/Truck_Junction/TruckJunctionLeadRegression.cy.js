describe("template spec", () => {
    it("passes", () => {
    
    cy.wait(2000);
    cy.visit("https://trucks.tractorjunction.com/"), {
    headers: {
        'accept': 'application/json, text/plain, */*',
        'user-agent': 'axios/0.27.2'
    }
    }
    cy.wait(5000);
    cy.get('#truck-popular > .newTruckBlock > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
    cy.wait(3000);
    cy.get('#Name').clear();
    cy.get('#Name').type("testqa");
    cy.get('#phone').type(8080395543);
    cy.xpath("(//div[@class='loc-edit'])[1]").click();
    cy.get('#onRoadPriceFormData > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("Noida");
    cy.get('.hashpop-result > #locations > li > a').click();
    cy.get('.check-box-wrp > :nth-child(2)').click();
    cy.get('#SubmitOnroadPriceForm').click();
    cy.wait(5000);
    cy.get('.thankscustomModal-header > .modalHeading').should('exist');
    cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();
  
     cy.visit("https://trucks.tractorjunction.com/en/used-truck/tata/intra-v50-9642?utm_source=push_ads");
     cy.get('.row > :nth-child(1) > .fillBtn').click({force: true});
     cy.wait(3000);
     cy.get('#contactSellerDetailForm > .row > :nth-child(1) > .form-control').clear();
     cy.get('#contactSellerDetailForm > .row > :nth-child(1) > .form-control').type("testqa");
     cy.get('#contactSellerDetailForm > .row > :nth-child(2) > .form-control').type(8080395543);
     cy.get(':nth-child(3) > .form-control').select(2);
     cy.get(':nth-child(4) > .form-control').select(3);
     cy.get(':nth-child(5) > .form-control').select(1);
     cy.get(':nth-child(6) > .form-control').type(100);
     cy.get('#submitContactSeller').click();
     cy.wait(2000);
     cy.get('#sellerdetailsubmission > .modal-dialog > .modal-content > .customModal-header > .modalHeading').should('exist');
     cy.get('#sellerdetailsubmission > .modal-dialog > .modal-content > .close > img').click(); 
     
    cy.visit("https://trucks.tractorjunction.com/en/sell-used-truck?utm_source=push_ads");
    cy.wait(3000);
    cy.xpath("//input[@name='brand']").click();
    cy.wait(3000);
    cy.xpath("(//div[@id='brand']//a)[10]").click({force: true});
    cy.wait(3000);
    cy.xpath("//input[@name='model']");
    cy.xpath("(//div[@id='model']//a)[11]").click();
    cy.xpath("//input[@name='kilo']");
    cy.xpath("(//div[@id='year']//a)[11]").click();

    cy.get('#rc > .sellTruckForm-priceInfo > .fillBtn').click();
    cy.get('#selltruckPrice').type(100);
    cy.get('#selltruckKilo').type(50);
    cy.get('#images > .sellTruckForm-priceInfo > .fillBtn').click();

    cy.wait(2000);    
    cy.get('#fileField1')
    .selectFile("cypress/fixtures/Truck_1.png" ,{force: true});

     cy.get('#fileField2')
    .selectFile("cypress/fixtures/Truck_2.png" ,{force: true});
    cy.wait(2000); 
    cy.get('#images > .sellTruckForm-priceInfo > .fillBtn').click();

    cy.wait(3000);
    cy.visit("https://trucks.tractorjunction.com/en/tata");
    cy.get(':nth-child(4) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click({force: true});
    cy.get('#SubmitOnroadPriceForm').click({force: true});
    cy.wait(5000);
    cy.get('.thankscustomModal-header > .modalHeading').should('exist');
   // cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();
    
    cy.visit("https://trucks.tractorjunction.com/en/tata");
    cy.get('#truck-dealers > .row > :nth-child(3) > .dealerBlock-inner > .dealer-inner-content > .dealerBlock-contact > .linkclr').click();
    cy.get('#model_id').select(2);
    cy.get('#SubmitDealerLead').click();
    //cy.get('.thankscustomModal-header > .modalHeading').should('exist');
    //cy.get('.thankscustomModal-header > .modalHeading').should('not.equal','exist');
    // cy.xpath("//div[@id='toast-container']").should('have.text','Thank You!!!');
    //cy.get('#sellerdetailsubmission > .modal-dialog > .modal-content > .close > img').click();
 
    cy.wait(3000);
    cy.visit("https://trucks.tractorjunction.com/en/brands");
    cy.get('#truck-tata > .newTruckBlock > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
    cy.get('#SubmitOnroadPriceForm').click();
    cy.wait(5000);
    cy.get('.thankscustomModal-header > .modalHeading').should('have.text','Thank You!!!');
    cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();

    cy.wait(3000);
    cy.visit("https://trucks.tractorjunction.com/en/new-truck-loan?utm_source=push_ads");
    cy.wait(3000);
    cy.get(':nth-child(2) > .input-group > .form-control').clear();
    cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
    cy.get(':nth-child(3) > .input-group > .form-control').type(8080395543);
    cy.xpath("(//div[@class='loc-edit'])[1]").click();
    cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
    cy.get('.hashpop-result > #locations > li > a').click();
    cy.get('#loanSubmit').click();
    cy.get('.thaks-form-content > h5').should('have.text','Thank you for your interest!');

        cy.visit("https://trucks.tractorjunction.com/en/used-truck-loan?utm_source=push_ads");
        cy.wait(3000);
        cy.get(':nth-child(2) > .input-group > .form-control').clear();
        cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
        cy.get(':nth-child(3) > .input-group > .form-control').type(8080395543);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('#loanSubmit').click();
        cy.get('.thaks-form-content > h5').should('have.text','Thank you for your interest!');

        cy.visit("https://trucks.tractorjunction.com/en/loan-against-truck?utm_source=push_ads");
        cy.wait(3000);
        cy.get(':nth-child(2) > .input-group > .form-control').clear();
        cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
        cy.get(':nth-child(3) > .input-group > .form-control').type(8080395543);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('#loanSubmit').click();
        cy.get('.thaks-form-content > h5').should('have.text','Thank you for your interest!');

        cy.visit("https://trucks.tractorjunction.com/en/personal-loan?utm_source=push_ads");
        cy.wait(3000);
        cy.get(':nth-child(2) > .input-group > .form-control').clear();
        cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
        cy.get(':nth-child(3) > .input-group > .form-control').type(8080395543);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('#loanSubmit').click();
        cy.get('.thaks-form-content > h5').should('have.text','Thank you for your interest!');
       
        cy.wait(5000);
        cy.visit("https://trucks.tractorjunction.com/en/compare");
        cy.wait(3000);
        cy.get('#brands1').select(1);
        cy.get('#models1').select(3);
        cy.get('#variant1').select(2);
    
        cy.get('#brands2').select(3);
        cy.get('#models2').select(1);
        cy.get('#variant2').select(1);
        
        cy.get('.text-center.mt-4 > .fillBtn').click();
        cy.wait(2000);
        cy.get('.offset-md-1 > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
        cy.wait(3000);
        cy.get('#Name').clear();
        cy.get('#Name').type("testqa");
        cy.get('#phone').type(8080395543);

        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('#onRoadPriceFormData > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.wait(3000);
        cy.get('.hashpop-result > #locations > li > a').click();

        cy.get('.check-box-wrp > :nth-child(4)').click();
        cy.get('#SubmitOnroadPriceForm').click();
        cy.get('.thankscustomModal-header > .modalHeading').should('have.text','Thank You!!!');  
 
       cy.wait(3000);
       cy.visit("https://trucks.tractorjunction.com/en/emi-calculator");
       cy.get('#brand_id').select(2);
       cy.get('#truck_id').select(3);
       cy.get('#variant_id').select(4);
       cy.get('.loanOffer-btn-row > .w-100').click();
       cy.get('.borderBtn').click();
       cy.get('#SubmitOnroadPriceForm').click();
       cy.wait(2000);
       cy.get('.thankscustomModal-header > .modalHeading').should('have.text','Thank You!!!');  
     
     cy.visit("https://trucks.tractorjunction.com/en/service-center/tata?utm_source=push_ads");
     //cy.get('.col-12.d-flex > .fillBtn').click();
     cy.get(':nth-child(1) > .dealerBlock-inner > .dealer-inner-content > .dealerBlock-contact > .linkclr').click();
     cy.wait(3000);
     cy.get('#name').clear();
     cy.get('#name').type("testqa");
     cy.get('#mobile').type(8080395543);
     cy.xpath("(//div[@class='loc-edit'])[1]").click();
     cy.get('#DealerLeadForm > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
     cy.get('.hashpop-result > #locations > li > a').click();
     cy.wait(2000);
     cy.get('#model_id').select(3);
     cy.get('#DealerLeadForm > .row > .check-group > .check-box-wrp > :nth-child(2)').click();
     cy.get('#SubmitDealerLead').click();
     cy.xpath("//div[@class='toast-body']").should('exist');

     cy.visit("https://trucks.tractorjunction.com/en/spare-parts/tata?utm_source=push_ads");
     cy.get(':nth-child(1) > .dealerBlock-inner > .dealer-inner-content > .dealerBlock-contact > .linkclr').click();
     cy.wait(3000);
     cy.get('#name').clear();
     cy.get('#name').type("testqa");
     cy.get('#mobile').type(8080395543);
     cy.xpath("(//div[@class='loc-edit'])[1]").click();
     cy.get('#DealerLeadForm > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
     cy.get('.hashpop-result > #locations > li > a').click();
     cy.get('#model_id').select(5);
     cy.get('#DealerLeadForm > .row > .check-group > .check-box-wrp > :nth-child(4)').click();
     cy.get('#SubmitDealerLead').click();

     cy.visit("https://trucks.tractorjunction.com/en/dealers/scania?utm_source=push_ads");
     cy.get(':nth-child(1) > .dealerBlock-inner > .dealer-inner-content > .dealerBlock-contact > .linkclr').click();
     cy.wait(3000);
     cy.get('#name').clear();
     cy.get('#name').type("testqa");
     cy.get('#mobile').type(8080395543);
     cy.xpath("(//div[@class='loc-edit'])[1]").click();
     cy.get('#DealerLeadForm > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
     cy.wait(2000);
     cy.get('.hashpop-result > #locations > li > a').click();
     cy.get('#model_id').select(2)
     cy.get('#DealerLeadForm > .row > .check-group > .check-box-wrp > :nth-child(3)').click();
     cy.get('#SubmitDealerLead').click();
     cy.xpath("//div[@class='toast-body']").should('exist');
   
     cy.wait(2000);
     cy.visit("https://trucks.tractorjunction.com/en/onroadprice?utm_source=push_ads");
     cy.get(':nth-child(1) > .form-group > .form-control').clear();
     cy.get(':nth-child(1) > .form-group > .form-control').type('testqa');
     cy.wait(2000);
     cy.get(':nth-child(2) > .form-group > .form-control').type(8080395543);
     cy.get('.form-group > .loc-edit').click();
     cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type('noida');
     cy.get('#locations > li > a').click();
     cy.get(':nth-child(4) > .form-group > .form-control').select(3);
     cy.get(':nth-child(5) > .form-group > .form-control').select(3);
     cy.get(':nth-child(6) > .form-group > .form-control').select(2);
     cy.get('#SubmitOnroadPrice').click();
     cy.get('.thankscustomModal-header > .modalHeading').should('have.text','Thank You!!!'); 
     
     cy.visit("https://trucks.tractorjunction.com/en/body-makers?utm_source=push_ads");
     cy.wait(2000);
     cy.get(':nth-child(1) > .dealerBlock-inner > .dealer-inner-content > .dealerBlock-contact > .linkclr').click();
     cy.wait(2000);
     cy.get('#name').clear();
     cy.get('#name').type('testqa');
     cy.wait(2000);
     cy.get('#mobile').type(8080395543);
     cy.wait(2000);
     cy.get('#brand_id').select(3);
     cy.wait(2000);
     cy.get('#model_id').select(2);
     cy.wait(2000);
     cy.get('#SubmitDealerLead').click();
     cy.xpath("//div[@class='toast-body']").should('exist');

     cy.visit("https://trucks.tractorjunction.com/en/buses");
     cy.get(':nth-child(2) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
     cy.get('#onRoadPriceFormData > .row > :nth-child(1) > #Name').clear();
     cy.get('#onRoadPriceFormData > .row > :nth-child(1) > #Name').type('testqa');
     cy.get('#onRoadPriceFormData > .row > :nth-child(2) > #phone').type('8080395543');
     cy.xpath("(//div[@class='loc-edit'])[1]").click();
     cy.get('#onRoadPriceFormData > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
     cy.get('#locations > li > a').click();
     cy.get('.check-box-wrp > :nth-child(1)').click();
     cy.get('#SubmitOnroadPriceForm').click();
     cy.get('.thankscustomModal-header > .modalHeading').should('exist');


     cy.visit("https://trucks.tractorjunction.com/en/electric");
     cy.get(':nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
     cy.get('#onRoadPriceFormData > .row > :nth-child(1) > #Name').clear();
     cy.get('#onRoadPriceFormData > .row > :nth-child(1) > #Name').type("testqa");
     cy.get('#onRoadPriceFormData > .row > :nth-child(2) > #phone').type("8080395543");
     cy.xpath("(//div[@class='loc-edit'])[2]").click({force: true});
     cy.get('#onRoadPriceFormData > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
     cy.get('#locations > li > a').click();
     cy.get('#tentative_purchase > .check-box-wrp > :nth-child(1)').click();
     cy.get('#SubmitOnroadPriceForm').click();
     cy.wait(2000);
     cy.get('.thankscustomModal-header > .modalHeading').should('have.text','Thank You!!!');

    //  product detail page   //
 /*   
    cy.visit("https://trucks.tractorjunction.com/en/tata-truck/yodha-2-0");
    cy.get('.green-btn').click();
    cy.get('#SubmitOnroadPriceForm').click();
    //cy.get('.thankscustomModal-header > .modalHeading').should('have.text','Thank You!!!');
    
    cy.get('.check-offers-btn > .d-none').click();
    cy.get('#loanPopupFormData > .fillBtn').click();
    cy.wait(2000);
    cy.xpath("//div//strong[text()='Success']").should('have.text','Success');

    cy.get('.variants-compare > .btn-global').click();
    cy.get('#SubmitOnroadPriceForm').click();

    cy.get('.loanOffer-btn-row > .w-100').click();
    cy.get('#loanPopupFormData > .fillBtn').click();
    cy.wait(2000);
    cy.xpath("//div//strong[text()='Success']").should('have.text','Success');

    cy.get('.form-group > .loc-edit').click();
    cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
    cy.wait(5000);
    cy.get('#locations > li > a').click();
    cy.get(':nth-child(2) > .form-group > #Name').type('testqa');
    cy.get(':nth-child(3) > .form-group > #phone').type(9082539192);
    cy.get(':nth-child(4) > .row > .col-12 > .fillBtn').click();
    cy.xpath("//div//strong[text()='Success']").should('have.text','Success');

    cy.get('.calltel > .d-inline-block').click();
    cy.get('#SubmitOnroadPriceForm').click();

    cy.get(':nth-child(1) > .truckCardSingle-box > .truckCardSingle-cont > .truckCardSingle-btn > .ContactToSeller').click();
    cy.get('#contactSellerDetailForm > .row > :nth-child(1) > #name').type("testqa");
    cy.get('#contactSellerDetailForm > .row > :nth-child(2) > #mobile').type(9082539192);
    cy.get('#contactSellerDetailForm > .row > :nth-child(3) > .form-control').select(3);
    cy.wait(3000);
    cy.get('#contactSellerDetailForm > .row > :nth-child(4) > .form-control').select(2);
    cy.wait(3000);
    cy.get('#contactSellerDetailForm > .row > :nth-child(5) > .form-control').select(2);
    cy.get(':nth-child(6) > .form-control').type(100);
    cy.get('#submitContactSeller').click();
    cy.get('#sellerdetailsubmission > .modal-dialog > .modal-content > .customModal-header > .modalHeading').should('have.text','Thank you for contact');
    cy.wait(2000);
    cy.get('#sellerdetailsubmission > .modal-dialog > .modal-content > .hand-cursor > img').click();

    cy.get('.emiOffer.d-block > .emiOffer-container > .emiOffer-Wrapper > .emiOffer-content > .emiOffer-content-in > .emiOffer-plan-in > .emiOffer-btn > .btn-global').click({force: true});
    cy.get('#SubmitDealerLead').click();
    cy.xpath("//div//strong[text()='Success']").should('have.text','Success');

    cy.get('#truck-dealers > .row > :nth-child(1) > .newsBlock-dealers > .dealersBlock-content > .talkCard-btn > .boldfont').click({force: true});
    cy.get('#SubmitDealerLead').click();
    cy.wait(2000);
    cy.xpath("//div//strong[text()='Success']").should('have.text','Success');

    cy.get('.review-in-btn > .btn-global').click({force: true});
    cy.get('.mark-form-area > .form-control').type('thank you');
    cy.get('.mark-form > .row > :nth-child(2) > .form-control').type('testqa');
    cy.get('.mark-form > .row > :nth-child(3) > .form-control').type(9082539192);
    cy.get('#ReviewFormValidation').click();
    cy.xpath("//div//strong[text()='Success']").should('have.text','Success');
*/


    });

});
