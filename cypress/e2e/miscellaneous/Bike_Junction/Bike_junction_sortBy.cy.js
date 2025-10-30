describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://bikes.tractorjunction.com/");
        cy.wait(3000);
        
        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='LATEST BIKES']").click();
        cy.wait(5000);
        cy.xpath("//div[@id='filter-headingThree']//h3").click();
        cy.get('[title="₹40,000 to ₹60,000"] > .pricetab').click();
        cy.wait(3000);
        cy.get('#DesktopSortBy').select(1);
        cy.wait(2000);
        cy.get('.MoreBikes > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .newTruckBlock-price').should('have.text','₹ 46,671 - 57,790');
        
        cy.wait(3000);
        cy.get('#DesktopSortBy').select(2);
        cy.get('.MoreBikes > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .newTruckBlock-price').should('have.text','₹ 59,990 - 67,138');


    });

});