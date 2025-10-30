describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://bikes.tractorjunction.com/");
        cy.wait(2000);

        cy.get(':nth-child(6) > .nav-link').click();
        cy.wait(3000);
        cy.get('#brands').select(3);
        cy.get('#selectedCity').type('noida');
        cy.get('#findDealers').click();
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/ather');
        cy.go('back');

        cy.wait(3000);
        cy.get('#brands').select(2);
        cy.get('#selectedCity').type('mumbai');
        cy.get('#findDealers').click();
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/aprilia');
        cy.go('back');

        cy.wait(3000);
        cy.get(':nth-child(1) > .brandsBlock-main > a > .brandsBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/ampere');
        cy.go('back');

        cy.wait(3000);
        cy.get(':nth-child(2) > .brandsBlock-main > a > .brandsBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/aprilia');
        cy.go('back');

        cy.wait(3000);
        cy.get(':nth-child(3) > .brandsBlock-main > a > .brandsBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/ather');
        cy.go('back');




    });

});