describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(3000);

        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        cy.wait(3000);

        cy.get(':nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/trucks');
        cy.get('.d-none > .hand-cursor').click();

        cy.get(':nth-child(6) > .bodyFilter > .checkbox-custom > .checkmark > .d-block').click();
        cy.get(':nth-child(3) > .hand-cursor').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/tractor');
        cy.get('.d-none > .hand-cursor').click();

        cy.wait(2000);
        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        cy.wait(3000);
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(3000);
        //cy.xpath("//p[text()='₹ 1.45 Lakh - ₹ 1.47 Lakh']").should('have.text','₹ 1.45 Lakh - ₹ 1.47 Lakh');
        //cy.get('.d-none > .hand-cursor').click();
        cy.get(':nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .newTruckBlock-price').should('have.text','₹ 1.45 Lakh - ₹ 1.47 Lakh');
        cy.get('.d-none > .hand-cursor').click();
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(7)').click();
        cy.get(':nth-child(3) > .hand-cursor').click();
        cy.wait(3000);
        cy.get('#SortTruckListing').select(2);
        cy.wait(2000);
        cy.get(':nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .newTruckBlock-price').should('have.text','₹ 78.03 Lakh - ₹ 82.03 Lakh');
 
        cy.get('.d-none > .hand-cursor').click();
        cy.wait(2000);
        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        cy.wait(3000);
        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(1)').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks');

        cy.get('.d-none > .borderBtn').click();
        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(3)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/mahindra');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click();
        cy.get(':nth-child(3) > .hand-cursor').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/mahindra?brand_id=3&fuel_id=1');
        cy.get('.d-none > .hand-cursor').click();
        cy.wait(2000);

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(2)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/mahindra?brand_id=3&fuel_id=3');
        cy.get('.d-none > .hand-cursor').click();

        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        cy.wait(3000); 
        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks?sortBy=&cate_id=&price=&brand_id=&fuel_id=&hp=200&gvw=&emission=&tyres=');
        cy.wait(2000);
        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks?sortBy=&cate_id=&price=&brand_id=&fuel_id=&hp=250%2C200&gvw=&emission=&tyres=');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        cy.wait(3000); 
        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(5000);
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks?sortBy=&cate_id=&price=&brand_id=&fuel_id=&hp=&gvw=&emission=BS6&tyres=');
        cy.get('.d-none > .borderBtn').click();
        
        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(5000);
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks?sortBy=&cate_id=&price=&brand_id=&fuel_id=&hp=&gvw=&emission=Zero+Tailpipe&tyres=');
        cy.get('.d-none > .borderBtn').click();
        cy.wait(3000);

        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        cy.wait(3000);
        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/3-wheeler');
        cy.get('.d-none > .borderBtn').click();
        
        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.get(':nth-child(3) > .hand-cursor').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/3-wheeler?cate_id=6&tyres=4');
        cy.get('.navbar-brand > img').click();

        cy.wait(2000);
        cy.get('#navbarDropdown41').trigger('mouseover');
        cy.xpath("//a[@title='Find New Trucks']").click();
        cy.wait(2000); 
        cy.xpath("((//div[@class='accordionBlock-body'])[7]//label)[1]").click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks?sortBy=&cate_id=&price=&brand_id=&fuel_id=&hp=&gvw=1-2.5&emission=&tyres=');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(6)').click({force: true});
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks?sortBy=&cate_id=&price=&brand_id=&fuel_id=&hp=&gvw=40-250&emission=&tyres=');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(1)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);

        cy.get(':nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .newTruckBlock-price').should('have.text','₹ 1.45 Lakh - ₹ 1.47 Lakh');
        cy.get('.d-none > .hand-cursor').click();
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(3)').click();
        cy.get('.row > :nth-child(3) > .fillBtn').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .newTruckBlock-price').should('have.text','₹ 10.04 Lakh - ₹ 10.79 Lakh');


    });

});