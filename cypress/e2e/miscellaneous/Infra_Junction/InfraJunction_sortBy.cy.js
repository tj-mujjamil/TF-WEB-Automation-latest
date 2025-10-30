describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://infra.tractorjunction.com/");
        cy.wait(3000);

        cy.get(':nth-child(1) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='JCB'])[3]").click();
        cy.wait(3000);
        cy.get('#DesktopSortBy').select(1);
        cy.get('#filter-headingTwo > h3').click();
        cy.get(':nth-child(1) > .pricetab').click();
        cy.wait(2000);
        cy.get('.MoreBikes > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .special-feature > :nth-child(4) > .spec-items > .spec-descpn').should('have.text','Price Coming Soon');
        cy.wait(2000);

        cy.get('#cancle-filter').click();
        cy.wait(2000);
        cy.get('#DesktopSortBy').select(2);
        cy.get('.MoreBikes > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .special-feature > :nth-child(4) > .spec-items > .spec-descpn').should('have.text','₹ 35 - 38 Lakh');
        
        cy.get('.navbar-brand > img').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Mahindra'])[1]").click();
        cy.get('#filter-headingTwo > h3').click();
        cy.get(':nth-child(1) > .pricetab').click();

        cy.get('.MoreBikes > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .special-feature > :nth-child(4) > .spec-items > .spec-descpn').should('have.text','Price Coming Soon');
        cy.get('#cancle-filter').click();
        cy.get('#DesktopSortBy').select(2);

        cy.get('.MoreBikes > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .special-feature > :nth-child(4) > .spec-items > .spec-descpn').should('have.text','₹ 31 - 33 Lakh');
        cy.get('.navbar-brand > img').click();







    });

});