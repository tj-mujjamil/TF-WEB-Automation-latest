//describe("template spec", () => {
   // it("passes", () => {
//Approach 1
 /*  cy.visit('https://bikes.tractorjunction.com/');
 cy.wait(3000);
 cy.get('#SubmitNo').click();
 cy.get('#bikes-popular > .newbike-slide > .owl-stage-outer > .owl-stage > :nth-child(1) > .newTruckBlock-main > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
 cy.wait(2000);

 cy.get('#getOnRoadPriceModalForm > .text-center > .linkclr').invoke('removeAttr','target').click();

 cy.url().should('include','https://bikes.tractorjunction.com/en/privacy-policy');
 cy.go('back');  */


//Approach 2
/*
  cy.visit('https://bikes.tractorjunction.com/');
  cy.wait(3000);
  cy.get('#SubmitNo').click();
  cy.get('#bikes-popular > .newbike-slide > .owl-stage-outer > .owl-stage > :nth-child(1) > .newTruckBlock-main > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
  cy.wait(2000);
  cy.get('#getOnRoadPriceModalForm > .text-center > .linkclr').then((e)=>{

   let url=e.prop('href');
   cy.visit(url);
   })
   
  cy.url().should('include','https://bikes.tractorjunction.com/en/privacy-policy');

  cy.wait(3000);
  cy.go('back');



cy.viewport(375, 667);
      cy.visit('https://www.tractorjunction.com/kubota-tractor/l3408/');
      cy.get('.viewOffers > .requestModal').click();
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(1) > .form-control').clear();
      cy.wait(2000);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(1) > .form-control').type('testqa');
      cy.wait(2000);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(2) > .form-control').type(8005566069);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(3) > #statesid').select(34);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(4) > .custom-select').select(64);
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .row > :nth-child(5) > .custom-select').select(3);


cy.visit('https://www.tractorjunction.com/');
cy.wait(5000);
//if (cy.get('.video-close > .filter-img').click()){
   //  alert(9999);
//}
//  cy.get('.video-close > .filter-img').click();
//if("cy.get('.customModal-body > a > img')".click()){

if (cy.get('.customModal-body > a > img')){  
    console.log('true');
  
}else{
  console.log('false');
}


//cy.get('.customModal-body > a > img').click();
    });



});*/
/*
describe('Popup Test', () => {
  it('should click on cross button when popup is displayed and pass the test, or fail if the popup is not displayed', () => {
    // Visit your application or navigate to the page where the popup may appear
    cy.visit('https://www.tractorjunction.com/');
    cy.wait(12000);
    // Check if the popup is displayed
    cy.get('#TJ_Promotion_PopUp > .modal-dialog > .modal-content').should('be.visible').then(($popup) => {
      // Popup is displayed, click on the cross button
      cy.get('.video-close > .filter-img').click();

      // Add any additional assertions related to the successful closing of the popup
      // For example, you might want to check if the popup is closed after clicking the cross button
      cy.get('#TJ_Promotion_PopUp > .modal-dialog > .modal-content').should('not.be.visible');

      // Add a passing assertion to indicate that the test case passed
      expect(true).to.equal(true);
    }).catch(() => {
      // Popup is not displayed, fail the test case
      // You can customize the failure message
      cy.log('Popup is not displayed');
      expect(true).to.equal(false, 'Popup is not displayed');
    });
  });
}); 

describe('Popup Test', () => {
  it('should click on cross button when popup is displayed and pass the test, or fail if the popup is not displayed', () => {
    // Visit your application or navigate to the page where the popup may appear
    cy.visit('https://www.tractorjunction.com/');
    cy.wait(12000);

    // Check if the popup is displayed
    cy.get('#TJ_Promotion_PopUp > .modal-dialog > .modal-content').should(($popup) => {
      if ($popup.length > 0) {
        // Popup is displayed, click on the cross button
        cy.get('.video-close > .filter-img').click();

        // Add any additional assertions related to the successful closing of the popup
        // For example, you might want to check if the popup is closed after clicking the cross button
        cy.get('#TJ_Promotion_PopUp > .modal-dialog > .modal-content').should('not.be.visible');

        // Add a passing assertion to indicate that the test case passed
        expect(true).to.equal(true);
      } else {
        // Popup is not displayed, fail the test case
        // You can customize the failure message
        cy.log('Popup is not displayed');
        expect(true).to.equal(false, 'Popup is not displayed');
      }
    });
  });
});*/

describe('Popup Test', () => {
  it('should click on cross button when popup is displayed and pass the test, or fail if the popup is not displayed', () => {
    // Visit your application or navigate to the page where the popup may appear
    cy.visit('https://www.tractorjunction.com/');

    // Check if the popup is displayed (//div[@class='modal-content'])[3]
    cy.xpath("(//div[@class='modal-content'])[3]").should(($popup) => {
      if ($popup.length > 0) {
        // Popup is displayed, click on the cross button
        cy.get('.video-close > .filter-img').click();

        // Add any additional assertions related to the successful closing of the popup
        // For example, you might want to check if the popup is closed after clicking the cross button
        cy.xpath("(//div[@class='modal-content'])[3]").should('not.be.visible');

        // Add a passing assertion to indicate that the test case passed
        expect(true).to.equal(true);
      } else {
        // Popup is not displayed, fail the test case
        // You can customize the failure message
        cy.log('Popup is not displayed');
        expect(true).to.equal(false, 'Popup is not displayed');
      }
    });
  });
});
