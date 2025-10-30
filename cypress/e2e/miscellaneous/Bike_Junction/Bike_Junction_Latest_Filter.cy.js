describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://bikes.tractorjunction.com/");
        cy.wait(2000);

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='LATEST BIKES']").click();
        cy.wait(3000);
        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?brand_id=17');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(3) > .bodyFilter > .checkbox-custom > .checkmark').click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?brand_id=44');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?mileage=60-80');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(4)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?mileage=0-30');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?displacement=100-110');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('.accordionBlock-body > :nth-child(6)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?displacement=200-250');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?brake=drum');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?brake=double-disc');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?brake=double-disc');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?body_type_id=1');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(3) > .bodyFilter > .checkbox-custom > .checkmark').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?body_type_id=3');
        cy.wait(3000);
        cy.get('.text-right').click();

        cy.get('#cancle-filter').click();
        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?price=60000-80000');
        cy.wait(2000);

        cy.get('#cancle-filter').click();
        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes?price=80000-100000');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='LATEST SCOOTERS']").click();

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?brand_id=17');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseOne > .accordionBlock-body > .row > :nth-child(2)').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?brand_id=19');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?price=60000-80000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?price=80000-100000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?mileage=60-80');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?mileage=40-60');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?displacement=1-100');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?displacement=100-110');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?brake=drum');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?brake=single-disc');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(9)').click( {force: true});
        cy.wait(5000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > .row > :nth-child(13) > .bodyFilter > .checkbox-custom > .checkmark').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters?body_type_id=13');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("//a[text()='LATEST ELECTRIC BIKES']").click();
        cy.wait(3000);
        cy.get(':nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click();
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?brand_id=80');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?brand_id=117');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?price=60000-80000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click( {force: true});
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?price=80000-100000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?range=200-250');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(4)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?range=100-150');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?brake=drum');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?brake=single-disc');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?chargingtime=0-2');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest?chargingtime=2-4');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("//a[text()='LATEST ELECTRIC SCOOTERS']").click();
        cy.wait(3000);

        cy.get(':nth-child(1) > .bodyFilter > .checkbox-custom > .checkmark').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?brand_id=34');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(2) > .bodyFilter > .checkbox-custom > .checkmark').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?brand_id=4');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹60,000 to ₹80,000"] > .pricetab').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?price=60000-80000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('[title="₹80,000 to ₹1,00,000"] > .pricetab').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?price=80000-100000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?range=250-1000');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFour > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?range=200-250');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?brake=drum');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?brake=single-disc');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(1)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?chargingtime=0-2');
        cy.wait(3000);
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(2)').click( {force: true});
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest?chargingtime=2-4');
        cy.wait(3000);
        cy.get('#cancle-filter').click();














    });

});