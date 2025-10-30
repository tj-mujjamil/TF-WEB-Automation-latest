describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://bikes.tractorjunction.com/");
        cy.wait(2000);

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='HONDA'])[1]").click();
        cy.wait(3000);

        cy.get(':nth-child(1) > .bodyFilter > label.checkbox-custom > .bransds-bnt > .checkbox-custom > .checkmark').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/hero-bikes');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(2) > .bodyFilter > label.checkbox-custom > .bransds-bnt > .checkbox-custom > .checkmark').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?price=60000-80000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?price=80000-100000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?mileage=60-80');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?mileage=40-60');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?displacement=1-100');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?displacement=100-110');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?brake=drum');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?brake=single-disc');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?body_type_id=1');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(3) > .bodyFilter > .checkbox-custom > .checkmark').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes?body_type_id=3');
        cy.wait(3000);
        cy.get('#cancle-filter').click();














    });

});