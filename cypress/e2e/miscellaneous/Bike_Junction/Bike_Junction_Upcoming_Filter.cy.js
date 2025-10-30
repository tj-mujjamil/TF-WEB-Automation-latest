describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://bikes.tractorjunction.com/");
        cy.wait(2000);

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING BIKES']").click();
        cy.wait(3000);

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?brand_id=17');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?brand_id=19');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?price=60000-80000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?price=80000-100000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?mileage=60-80');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?mileage=40-60');
        cy.wait(3000);
        cy.get('#cancle-filter').click();
 
        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?mileage=40-60');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?displacement=1-100');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?displacement=100-110');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?brake=drum');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?brake=single-disc');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?body_type_id=1');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(3) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes?body_type_id=3');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING SCOOTERS']").click();
        cy.wait(3000);

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?brand_id=17');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?brand_id=19');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?price=60000-80000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?price=80000-100000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?mileage=60-80');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?mileage=40-60');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?displacement=1-100');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?displacement=100-110');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?brake=drum');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?brake=single-disc');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(7) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?body_type_id=7');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(9) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters?body_type_id=9');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING ELECTRIC BIKES']").click();
        cy.wait(3000);

        cy.get(':nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?brand_id=80');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?brand_id=117');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?price=60000-80000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?price=80000-100000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?range=200-250');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?range=200-250');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(4)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?range=100-150');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?brake=drum');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?brake=single-disc');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?chargingtime=0-2');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming?chargingtime=2-4');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING ELECTRIC SCOOTERS']").click();
        cy.wait(3000);

        cy.get(':nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?brand_id=34');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?brand_id=4');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?price=80000-100000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(4)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?range=100-150');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(5)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?range=0-100');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?brake=drum');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?brake=single-disc');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?chargingtime=0-2');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming?chargingtime=2-4');
        cy.wait(3000);
        cy.get('#cancle-filter').click();















    });

});