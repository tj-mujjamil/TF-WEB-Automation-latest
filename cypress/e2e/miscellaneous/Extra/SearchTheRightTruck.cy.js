describe("template spec", () => {
    it("passes", () => {
    
  cy.visit("https://trucks.tractorjunction.com/");
  cy.wait(3000);
  cy.get('#SubmitNo').click();
  cy.get('#nav-filter-used-truck').click();
  cy.get('#brands').select(4);
  cy.get('#states').select(5);
  cy.get('#filter-used-truck > form > .w-100').click();
  cy.wait(2000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?brand_id=3&state_id=38');
  cy.go('back');
 // https://trucks.tractorjunction.com/en/buy-used-trucks?brand_id=3&state_id=38
  cy.get('#nav-filter-used-truck').click();
  cy.get('#brands').select(3);
  cy.get('#states').select(4);
  cy.get('#filter-used-truck > form > .w-100').click();
  cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?brand_id=4&state_id=10');
  cy.go('back');
  

     







    });

});