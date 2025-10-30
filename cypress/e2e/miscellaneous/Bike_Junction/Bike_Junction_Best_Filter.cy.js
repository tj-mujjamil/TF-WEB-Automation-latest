describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://bikes.tractorjunction.com/");
        cy.wait(2000);

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='BEST BIKES']").click();
        cy.wait(3000);

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(1)').click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?brand_id=17');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?brand_id=19');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?price=60000-80000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?price=80000-100000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?mileage=60-80');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?mileage=40-60');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?displacement=1-100');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?displacement=100-110');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?brake=drum');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?brake=single-disc');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?body_type_id=1');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(3) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india?body_type_id=3');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='BEST SCOOTERS']").click();
        cy.wait(3000);
        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?brand_id=17');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?brand_id=19');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?price=60000-80000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?price=80000-100000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?mileage=60-80');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?mileage=40-60');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?displacement=1-100');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?displacement=100-110');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?brake=drum');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?brake=single-disc');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(7) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?body_type_id=7');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(9) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india?body_type_id=9');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("//a[text()='BEST ELECTRIC BIKES']").click();
        cy.wait(3000);

        cy.get(':nth-child(3) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?brand_id=114');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get(':nth-child(4) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?brand_id=113');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?price=60000-80000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?price=80000-100000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?range=200-250');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(4)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?range=100-150');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?brake=drum');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?brake=single-disc');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?chargingtime=0-2');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best?chargingtime=2-4');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("//a[text()='BEST ELECTRIC SCOOTERS']").click();
        cy.wait(3000);

        cy.get(':nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?brand_id=34');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get(':nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?brand_id=4');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?price=60000-80000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?price=80000-100000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?range=250-1000');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?range=200-250');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?brake=drum');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?brake=single-disc');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best?chargingtime=2-4');
        cy.wait(3000);
        cy.get('.text-right').click();
    

    });

});