describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(3000);

        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        
        cy.get('#SortTruckListing').select(1);
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.get(':nth-child(6) > .newTruckBlock-inner > .newTruckBlock-content > .newTruckBlock-price').should('have.text','₹ 1.20 Lakh - ₹ 1.35 Lakh');
        cy.get('.navbar-brand > img').click();
        cy.wait(2000);

        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(7)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(3000);
        cy.get('#SortTruckListing').select(2);
        cy.wait(2000);
        cy.get(':nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .newTruckBlock-price').should('have.text','₹ 78.03 Lakh - ₹ 82.03 Lakh');


    });

});