describe("template spec", () => {
    it("passes", () => {

        cy.visit('https://bikes.tractorjunction.com/');
        cy.wait(3000);

        cy.get('#nav-truck-popular').click();
        cy.get('#bikes-popular > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india');
        cy.go('back');

        cy.get('#nav-truck-latest').click();
        cy.get('#bikes-latest > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes');
        cy.go('back');

        cy.get('#nav-truck-latest').click();
        cy.get('#bikes-latest > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes');
        cy.go('back');

        cy.get('#nav-truck-upcoming').click();
        cy.get('#bikes-upcoming > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes');
        cy.go('back');

        cy.get('#nav-new-0').click();
        cy.get('#new-0 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-brands');
        cy.go('back');

        cy.get('#nav-new-1').click();
        cy.get('#new-1 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/scooter-brands');
        cy.go('back');

        cy.get('#nav-new-2').click();
        cy.get('#new-2 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bike-brands');
        cy.go('back');

        cy.get('#nav-new-3').click();
        cy.get('#new-3 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooter-brands');
        cy.go('back');

        cy.get('#nav-truck-mileage').click();
        cy.get('#bikes-mileage > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-mileage-bikes');
        cy.go('back');

        cy.get('#nav-truck-budget').click();
        cy.get('#bikes-budget > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/bikes-under-1-lakh');
        cy.go('back');

        cy.get('#nav-body-need-dirt').click();
        cy.get('#body-need-dirt > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/dirt-bikes');
        cy.go('back');

        cy.get('#nav-body-need-off-road').click();
        cy.get('#body-need-off-road > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/off-road-bikes');
        cy.go('back');

        cy.get('.container-mid > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/compare-bikes');
        cy.go('back');

        cy.get('#nav-cate-0').click();
        cy.get('#cate-0 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/hero');
        cy.go('back');

        cy.get('#nav-cate-1').click();
        cy.get('#cate-1 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/honda');
        cy.go('back');

        cy.get('#nav-cate-2').click();
        cy.get('#cate-2 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/tvs');
        cy.go('back');

        cy.get('#nav-cate-3').click();
        cy.get('#cate-3 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/bajaj');
        cy.go('back');

        cy.get('#nav-cate-4').click();
        cy.get('#cate-4 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/royal-enfield');
        cy.go('back');

        cy.get('#nav-cate-5').click();
        cy.get('#cate-5 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/suzuki');
        cy.go('back');

        cy.get('#nav-cate-6').click();
        cy.get('#cate-6 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/yamaha');
        cy.go('back');

        cy.get('#nav-cate-7').click();
        cy.get('#cate-7 > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms/okinawa');
        cy.go('back');

        cy.get('#nav-tab > [href="https://bikes.tractorjunction.com/en/bike-dealer-showrooms"]').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms');
        cy.go('back');

        cy.get('#nav-budget').click();
        cy.get('#budget > .row > :nth-child(1) > .filterBlock-chips').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/bikes-under-50000');
        cy.go('back');

        cy.get('#nav-mileage').click();
        cy.get('#mileage > .row > :nth-child(1) > .filterBlock-chips').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/under-30kmpl-mileage-bikes');
        cy.go('back');

        cy.get('#nav-displacements').click();
        cy.get('#displacements > .row > :nth-child(1) > .filterBlock-chips').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/best-100cc-bikes');
        cy.go('back');

        cy.get('#nav-brakes').click();
        cy.get('#brakes > .row > :nth-child(1) > .filterBlock-chips').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/drum-brake-bikes');
        cy.go('back');

        cy.get('#nav-series').click();
        cy.get('#series > .row > :nth-child(1) > .filterBlock-chips').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/hero-bikes/splendor');
        cy.go('back');

        cy.get('#nav-body-sports').click();
        cy.get('#body-sports > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/sports-bikes');
        cy.go('back');

        cy.get('#nav-body-cruiser').click();
        cy.get('#body-cruiser > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/cruiser-bikes');
        cy.go('back');

        cy.get('#nav-body-cafe-racer').click();
        cy.get('#body-cafe-racer > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/cafe-racer-bikes');
        cy.go('back');

        cy.get('#nav-body-adventure-tourer').click();
        cy.get('#body-adventure-tourer > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/adventure-tourer-bikes');
        cy.go('back');

        cy.get('#nav-body-dirt').click();
        cy.get('#body-dirt > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/dirt-bikes');
        cy.go('back');

        cy.get('#nav-body-moped').click();
        cy.get('#body-moped > .viewall > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/moped-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > a > .bikecityBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/about-us');
        cy.go('back');

        cy.get(':nth-child(2) > a > .bikecityBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/contact-us');
        cy.go('back');

        cy.get(':nth-child(3) > a > .bikecityBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/compare-bikes');
        cy.go('back');

        cy.get(':nth-child(4) > a > .bikecityBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-loan');
        cy.go('back');

        cy.get(':nth-child(5) > a > .bikecityBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms');
        cy.go('back');

        cy.get(':nth-child(6) > a > .bikecityBlock-inner').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-loan-emi-calculator');
        cy.go('back');




















        


















    });

});