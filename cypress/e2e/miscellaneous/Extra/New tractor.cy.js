describe("template spec", () => {
    it("passes", () => {
        cy.visit("https://www.tractorjunction.com/mahindra-tractor/575-di-xp-plus/");
        cy.wait(12000);
        cy.get('.video-close > .filter-img').click();

        cy.get('.d-none > .row > :nth-child(1) > .tractor_initiate').click();
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(1) > .form-control').type("RAJU");
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(2) > .form-control').type(9999999999);
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(3) > #statesid').select(5);
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(4) > .custom-select').select(4);
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > :nth-child(5) > .custom-select').select(3);
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > :nth-child(8) > #tent_pur > .purchaseTimePeriod > .row > :nth-child(4) > .checkbox-custom').click();
        cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .tractor_submit').click();
      
        cy.wait(5000);
        cy.get('.loan_initiate').click();
        cy.get('#Loan-popup-new > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .row > :nth-child(1) > .form-control').type("RAJU");
        cy.get('#Loan-popup-new > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .row > :nth-child(2) > .form-control').type(9897969594);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('#Loan-popup-new > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .row > .col-12 > .sell-view-inner > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("Noida");
        cy.wait(2000);
        cy.get('#locations > li > a').click();
        cy.get('#Loan-popup-new > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .new_tractor_loan_btn').click();
       
        //-----Buy used tractor---//
        cy.wait(3000);
        cy.visit("https://www.tractorjunction.com/used-tractor/mahindra/575-di-xp-plus-110585/126561/");
        cy.get('#name').type("RAJU");
        cy.get(':nth-child(6) > #buyermobile').type(9082539200);
        cy.get('#inputState').select(3);
        cy.get('#inputdistric').select(2);
        cy.get('#price').type(50);
        cy.get(':nth-child(1) > .form-submit-btn').click();


        //Sell used tractor journey//
        cy.wait(3000);
        cy.visit("https://www.tractorjunction.com/sell-used-tractor/");
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .loc-edit').click();
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("Noida");
        cy.wait(3000);
        cy.get('#locations > li > a').click();
        cy.get('#userMobile').type(9158578493);
        cy.get('#userName').type("raju");
        cy.get('.form-sell-btn2').click();





    });

});