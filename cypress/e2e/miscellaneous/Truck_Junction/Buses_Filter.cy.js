describe("template spec", () => {
    it("passes", () => {
        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(3000);

        cy.visit('https://trucks.tractorjunction.com/en/buses'); 
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=1&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=2&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.xpath("(//p[@class='newTruckBlock-price'])[1]").should('have.text','\nFrom ₹ 8.86 Lakh\n');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(6)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.xpath("(//p[@class='newTruckBlock-price'])[1]").should('have.text','\nFrom ₹ 1.45 Cr\n');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=0-10&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=0-10&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=7&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(7)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=14&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.wait(3000);
        cy.xpath("((//div[@class='accordionBlock-body'])[5]//label)[3]//input[@value='1']").click({force: true});
        cy.wait(3000);
        // cy.xpath("((//div[@class='accordionBlock-body'])[5]//label)[1]").click();
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(5000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=1&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.wait(3000);
        cy.xpath("((//div[@class='accordionBlock-body'])[5]//label)[2]//input[@value='4']").click({force: true});
       // cy.xpath("((//div[@class='accordionBlock-body'])[5]//label)[3]").click();
        
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=4&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=BS-IV&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=E-VI&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=3-6');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(4)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=15-500');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.visit('https://trucks.tractorjunction.com/en/buses/popular');

        cy.xpath("((//div[@class='accordionBlock-body'])[1]//label)[1]").click();
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=1&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=3&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.xpath("(//p[@class='newTruckBlock-price'])[3]").should('have.text','\nFrom ₹ 8.86 Lakh\n');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(5)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.xpath("(//p[@class='newTruckBlock-price'])[1]").should('have.text','\nFrom ₹ 31.49 Lakh\n');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=0-10&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(5)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=55-500&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=8&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=10&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=1&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        
        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=3&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=BS-IV&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=BS-VI&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=3-6');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(4)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=15-500');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();


        cy.visit("https://trucks.tractorjunction.com/en/buses/upcoming");
        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=1&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=3&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=0-10&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(5)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=55-500&vehicle_type_category_id=&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=&vehicle_type_category_id=7&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('.accordionBlock-body > :nth-child(6)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=&vehicle_type_category_id=14&fuel_id=&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=&vehicle_type_category_id=&fuel_id=1&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=&vehicle_type_category_id=&fuel_id=4&emission=&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=&vehicle_type_category_id=&fuel_id=&emission=BS-IV&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=&vehicle_type_category_id=&fuel_id=&emission=E-VI&payload=');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=3-6');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
        cy.wait(2000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming?sortBy=&brand_id=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=15-500');
        cy.go('back');
        cy.get('.d-none > .borderBtn').click();

       cy.visit("https://trucks.tractorjunction.com/en/buses/latest");

       cy.xpath("((//div[@class='accordionBlock-body'])[1]//label)[1]").click();
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=1&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseTwo > .accordionBlock-body > :nth-child(2)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=3&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(1)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.xpath("(//p[@class='newTruckBlock-price'])[3]").should('have.text','\nFrom ₹ 13.60 Lakh\n');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseThree > .accordionBlock-body > :nth-child(5)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.xpath("(//p[@class='newTruckBlock-price'])[3]").should('have.text','\nFrom ₹ 1.45 Cr\n');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=0-10&vehicle_type_category_id=&fuel_id=&emission=&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(5)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=55-500&vehicle_type_category_id=&fuel_id=&emission=&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(1)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=7&fuel_id=&emission=&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('.accordionBlock-body > :nth-child(6)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=14&fuel_id=&emission=&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=1&emission=&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(3)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=4&emission=&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=BS-VI&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=E-VI&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=E-VI&payload=');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=6-10');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();

       cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(3)').click({force: true});
       cy.wait(2000);
       cy.get('.row > :nth-child(3) > .fillBtn').click(2000);
       cy.wait(2000);
       cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest?sortBy=&brand_id=&price=&seats=&vehicle_type_category_id=&fuel_id=&emission=&payload=15-500');
       cy.go('back');
       cy.get('.d-none > .borderBtn').click();


    });

});