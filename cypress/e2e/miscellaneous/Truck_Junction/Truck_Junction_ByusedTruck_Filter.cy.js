describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(3000);

        cy.get('#navbarDropdown3').trigger('mouseover');
        cy.xpath("//a[@title='Buy Used Trucks']").click();

        cy.get('#exampleFormControlSelect2').select(1);
        cy.wait(2000);

        cy.get('.accordionBlock-body > .row > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=LToH&cate_id=3&price=&brand_id=&state_id=&dist_id=&fuel_id=&gvw=');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.get(':nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=&cate_id=4&price=&brand_id=&state_id=&dist_id=&fuel_id=&gvw=');
        cy.go('back');
        
        cy.get('.d-none > .borderBtn').click();
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=&cate_id=&price=0-5&brand_id=&state_id=&dist_id=&fuel_id=&gvw=');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(7)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.get('#exampleFormControlSelect2').select(2);
        cy.wait(2000);
        cy.get(':nth-child(1) > .usedTrckBlock-inner > .usedTrckBlock-content > .usedTrckBlock-contentTop > .usedTrckBlock-price').should('have.text','Price - ₹ 1,50,00,000');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.wait(2000);
        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/used-trucks/tata');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.wait(2000);
        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(2)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/used-trucks/mahindra');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.wait(2000);
        cy.get('#filter-collapseState > .accordionBlock-body > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=&cate_id=&price=&brand_id=&state_id=22&dist_id=&fuel_id=&gvw=');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.wait(2000);
        cy.get('#filter-collapseState > .accordionBlock-body > :nth-child(2)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=&cate_id=&price=&brand_id=&state_id=21&dist_id=&fuel_id=&gvw=');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.wait(2000);
        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=&cate_id=&price=&brand_id=&state_id=&dist_id=&fuel_id=1&gvw=');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.wait(2000);
        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(2)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=&cate_id=&price=&brand_id=&state_id=&dist_id=&fuel_id=3&gvw=');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.wait(2000);
        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=&cate_id=&price=&brand_id=&state_id=&dist_id=&fuel_id=&gvw=1-2.5');
        cy.go('back');

        cy.get('.d-none > .borderBtn').click();
        cy.wait(2000);
        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(6)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?sortBy=&cate_id=&price=&brand_id=&state_id=&dist_id=&fuel_id=&gvw=40-250');
        cy.go('back');


    });

});