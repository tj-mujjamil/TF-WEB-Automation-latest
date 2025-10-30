describe("template spec", () => {
    it("passes", () => {

  cy.visit("https://infra.tractorjunction.com/");
  cy.get('#brandsBybudget').select(3);
  cy.get('#budgets').select(3);
  cy.get('#filter-new-truck > .w-100').click();
  
  //redirect page
  cy.wait(3000);
  cy.visit("https://infra.tractorjunction.com/");
  cy.get('#nav-filter-used-truck').click();
  cy.get('#brandsBybudget2').select(3);
  cy.get('#budgets2').select(3);
  cy.get('#filter-used-truck > .w-100').click();

 //redirect page
  cy.wait(3000);
  cy.visit("https://infra.tractorjunction.com/");
  cy.get('#nav-filter-backhoe').click();
  cy.get('#brandsBybudget3').select(3);
  cy.get('#budgets3').select(4);
  cy.get('#filter-backhoe > .w-100').click();






    });

});