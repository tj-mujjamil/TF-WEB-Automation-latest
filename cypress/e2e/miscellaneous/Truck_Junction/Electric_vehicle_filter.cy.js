describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(3000);

        cy.visit("https://trucks.tractorjunction.com/en/electric");
        cy.get(':nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark > .d-block').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?cate_id=6&fuel_id=4');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get(':nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark > .d-block').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?cate_id=21&fuel_id=4');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(1)').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?brand_id=19&fuel_id=4');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(2)').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?brand_id=29&fuel_id=4');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(1)').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.get('#SortTruckListing').select(1);
        cy.xpath("//p[text()='₹ 0.58 Lakh - ₹ 0.63 Lakh']").should('have.text','₹ 0.58 Lakh - ₹ 0.63 Lakh');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.get('#SortTruckListing').select(1);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?fuel_id=4&gvw=0-1');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.get('#SortTruckListing').select(1);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?fuel_id=4&gvw=2.5-5');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.get('#SortTruckListing').select(1);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?emission=Zero+Tailpipe&sortBy=LToH');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.get('#SortTruckListing').select(1);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?emission=L5M');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.get('#SortTruckListing').select(1);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?fuel_id=4&tyres=3');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.get(':nth-child(3) > .hand-cursor').click(2000);
        cy.wait(2000);
        cy.get('#SortTruckListing').select(1);
        cy.url().should('include','https://trucks.tractorjunction.com/en/electric?fuel_id=4&tyres=4');
        cy.go('back');
        cy.get('.d-none > .hand-cursor').click();
        
    });

});