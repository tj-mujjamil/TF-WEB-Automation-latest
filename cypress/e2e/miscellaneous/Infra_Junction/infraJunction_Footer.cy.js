describe("template spec", () => {
    it("passes", () => {

   cy.visit("https://infra.tractorjunction.com/");

   cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(1) > a').click();
   cy.wait(2000);
   cy.url().should('include','https://infra.tractorjunction.com/en/construction-equipment-loan');
   cy.go('back');

   cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(2) > a').click();
   cy.wait(2000);
   cy.url().should('include','https://infra.tractorjunction.com/en/loan-emi-calculator');
   cy.go('back');

   cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(3) > a').click();
   cy.wait(2000);
   cy.url().should('include','https://infra.tractorjunction.com/en/dealers');
   cy.go('back');

   cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(1) > a').click();
   cy.wait(2000);
   cy.url().should('include','https://infra.tractorjunction.com/en/about-us');
   cy.go('back');

   cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(2) > a').click();
   cy.wait(2000);
   cy.url().should('include','https://infra.tractorjunction.com/en/privacy-policy');
   cy.go('back');

   cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(3) > a').click();
   cy.wait(2000);
   cy.url().should('include','https://infra.tractorjunction.com/en/contact-us');
   cy.go('back');





    });

});