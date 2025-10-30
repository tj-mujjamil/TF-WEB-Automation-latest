describe("template spec", () => {
    it("passes", () => {
        
        cy.visit("https://bikes.tractorjunction.com/");

        cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(1) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(2) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-loan');
        cy.go('back');

        cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(3) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-loan-emi-calculator');
        cy.go('back');

        cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(4) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/compare-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(5) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms');
        cy.go('back');

        cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(1) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/about-us');
        cy.go('back');

        cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(2) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/privacy-policy');
        cy.go('back');

        cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(3) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/contact-us');
        cy.go('back');
        






    });

});