describe("template spec", () => {
    it("passes", () => {

  cy.visit("https://www.tractorjunction.com/");
  cy.wait(5000);
  cy.get('#SubmitNo').click();
  cy.get('#hps').select(3);
  cy.wait(2000);
  cy.get('#brands').select(4);
  cy.get('#newtractor > form > .form-submit-btn').click();
  cy.wait(2000);
  cy.url().should('include','https://www.tractorjunction.com/tractor-models/?hps=31-40&brands=58');
  cy.go('back');


  cy.get('#filterusedhome-tab').click();
  cy.wait(3000);
  cy.get('#brandid').select(2);
  cy.wait(3000);
  cy.get('#stateid').select(2);
  
  cy.get('.row > :nth-child(1) > .form-submit-btn').click();
  cy.wait(2000);
  cy.url().should('include','https://www.tractorjunction.com/used-tractors-for-sell/?brandid=58&stateid=32');
  cy.go('back');

 
 



   








    });

});