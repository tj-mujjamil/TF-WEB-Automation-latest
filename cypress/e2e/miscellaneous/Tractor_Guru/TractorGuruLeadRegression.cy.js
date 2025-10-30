
describe("template spec", () => {
    it("passes", () => {

 cy.visit("https://tractorguru.in/tractor/farmtrac-60-powermaxx");
 cy.get('.row > :nth-child() > .d-none > .red_btn').click();

 
    if (this.currentTest.state == 'failed') {
      // Take a screenshot and save it
    }
      else{
        cy.screenshot({ path: 'C:\Users\TJ\cypress\cypress\screenshots\BikeJunction_TC.cy.js' });
      }
      
    
  
 //cy.screenshot({ path: 'C:\Users\TJ\cypress\cypress\screenshots\BikeJunction_TC.cy.js' });

 /*
 cy.get('.d-none > .red_btn').click();
 cy.wait(3000);
 cy.get(':nth-child(1) > .col > .form-control').clear();
 cy.get(':nth-child(1) > .col > .form-control').type("Testqa");
 cy.get('#userMobileNumber').type(9158593785);
 cy.get('#userState').select(4);
 cy.get('#userDistrict').select(2);
 cy.get('#userTehsil').select(1);
 cy.get('#frmInq > .btn').click();
 cy.get('#PopupMsg > .modal-dialog > .modal-content > .modal-header > #btnCloseMsgPopup > span').click();
 
 cy.visit("https://tractorguru.in/tractors-price");
 cy.get('#brand1').select(2);
 cy.get('#tractor1').select(2);
 cy.wait(3000);
 cy.get('#userName').clear();
 cy.get('#userName').type("testqa");
 cy.get('#userMobileNumber').type(9158593785);
 cy.get('#userState').select(2);
 cy.get('#userDistrict').select(2);
 cy.get('#userTehsil').select(1);
 cy.get('.col > .btn').click();     

cy.visit("https://tractorguru.in/tractor-insurances");
cy.get('.mobsticky > .btn').click();
cy.wait(3000);
cy.get(':nth-child(1) > .col > .form-control').clear();
cy.get(':nth-child(1) > .col > .form-control').type("Testqa");
cy.get('#userMobileNumber').type(9158593785);
cy.get('#userState').select(2);
cy.get('#userDistrict').select(2);
cy.get('#userTehsil').select(2);
cy.get('#frmInq > .btn').click();
cy.get('#PopupMsg > .modal-dialog > .modal-content > .modal-header > #btnCloseMsgPopup > span').click();

cy.visit("https://tractorguru.in/dealership-enquiry");
cy.wait(3000);
cy.get('#userName').clear();
cy.get('#userName').type("Testqa");
cy.get('#userMobileNumber').type(9158593785);
cy.get('#userState').select(2);
cy.get('#userDistrict').select(2);
cy.get('#userTehsil').select(3);
cy.get('#brand1').select(1);
cy.get(':nth-child(4) > .btn').click();

cy.visit("https://tractorguru.in/local-tractor-dealers/mahindra");
cy.get(':nth-child(1) > .p-2 > .py-2 > .mt-2 > .EnquiryPopup > b').click();
cy.wait(3000);
cy.get(':nth-child(1) > .col > .form-control').clear();
cy.get(':nth-child(1) > .col > .form-control').type("Testqa");
cy.wait(2000);
cy.get('#userMobileNumber').type(9158593785);
cy.get('#userState').select(2);
cy.get('#userDistrict').select(3);
cy.get('#userTehsil').select(1);
cy.get('#frmInq > .btn').click();
cy.get('#PopupMsg > .modal-dialog > .modal-content > .modal-header > #btnCloseMsgPopup').click();

cy.visit("https://tractorguru.in/second-hand-swaraj-724-xm-24hp-6064");
cy.get('div.mt-4 > .UTEnquiryPopup').click();
cy.wait(3000);
cy.get(':nth-child(6) > .container > .row > #utenquiryPopup > .modal-dialog > .modal-content > .modal-body > #frmUsedInq > :nth-child(2) > .col > .form-control').clear();
cy.get(':nth-child(6) > .container > .row > #utenquiryPopup > .modal-dialog > .modal-content > .modal-body > #frmUsedInq > :nth-child(2) > .col > .form-control').type("Testqa");
cy.get(':nth-child(6) > .container > .row > #utenquiryPopup > .modal-dialog > .modal-content > .modal-body > #frmUsedInq > :nth-child(3) > .col > #userMobileNumber').type(9158593785);
cy.get(':nth-child(6) > .container > .row > #utenquiryPopup > .modal-dialog > .modal-content > .modal-body > #frmUsedInq > #btnOTP').click();
cy.get(':nth-child(6) > .container > .row > #utenquiryPopup > .modal-dialog > .modal-content > .modal-header > #btnCloseMsgPopup').click();

*/

    });

});
