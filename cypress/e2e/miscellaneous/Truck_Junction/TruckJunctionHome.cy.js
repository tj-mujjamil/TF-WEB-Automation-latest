describe("Home page navigation", () => {
it("Search", () => {

 cy.visit('https://trucks.tractorjunction.com/');
 cy.wait(3000);

 cy.get('#exampleFormControlSelect2').select(3);
 cy.get('#price_Search').select(4);
 cy.get('#search_truck').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/mahindra?price=15-20');
 cy.go('back');
});

it("used-truck", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-filter-used-truck').click();
 cy.get('#brands').select(4);
 cy.get('#states').select(5);
 cy.get('#filter-used-truck > form > .w-100').click();
 cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks?brand_id=4&state_id=10');
 cy.go('back');
});

it("truck-popular", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-popular').click();
 cy.get('#truck-popular > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/popular-trucks');
 cy.go('back');
});

it("truck-latest", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-latest').click();
 cy.get('#truck-latest > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/latest-trucks');
 cy.go('back');
});

it("truck-upcoming", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-upcoming').click();
 cy.get('#truck-upcoming > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/upcoming-trucks');
 cy.go('back');
});

it("brands", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(6) > .container-mid > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/brands');
 cy.go('back');
});

it("trucks", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-trucks').click();
 cy.get('#trucks > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/trucks');
 cy.go('back');
});

it("tractor", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-tractor').click();
 cy.get('#tractor > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/tractor');
 cy.go('back');
});

it("mini-truck", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-mini-truck').click();
 cy.get('#mini-truck > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/mini-truck');
 cy.go('back');
});

it("pickup", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-pickup').click();
 cy.get('#pickup > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/pickup');
 cy.go('back');
});

it("tippers_1", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-tippers').click();
 cy.get('#tippers > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/tippers');
 cy.go('back');
});

it("tippers_2", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-tippers').click();
 cy.get('#tippers > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/tippers');
 cy.go('back');
});

it("3-wheeler", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-three-wheeler').click();
 cy.get('#three-wheeler > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/3-wheeler');
 cy.go('back');
});

it("transit-mixer", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-transit-mixer').click();
 cy.get('#transit-mixer > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/transit-mixer');
 cy.go('back');
});

it("auto-rickshaw_1", () => {
 cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-auto-rickshaw').click();
 cy.get('#auto-rickshaw > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/auto-rickshaw');
 cy.go('back');
});

it("auto-rickshaw_2", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-auto-rickshaw').click();
 cy.get('#auto-rickshaw > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/auto-rickshaw');
 cy.go('back');
});

it("tempo-traveller", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-tempo-traveller').click();
 cy.get('#tempo-traveller > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/tempo-traveller');
 cy.go('back');
});

it("e-rickshaw", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-e-rickshaw').click();
 cy.get('#e-rickshaw > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/electric/e-rickshaw');
 cy.go('back');
});

it("truck-appli", () => {
    cy.visit('https://trucks.tractorjunction.com/');
    cy.get('#nav-truck-appli').click();
    cy.get('#truck-appli > .widget-viewall > .d-inline-block').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks');
 cy.go('back');
});

it("truck-budget", () => {
 cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-budget').click();
 cy.get('#truck-budget > .widget-viewall > .d-inline-block').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks');
 cy.go('back');
});


it("bodytype", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-bodytype').click();
 cy.get('#truck-bodytype > .widget-viewall > .d-inline-block').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks');
 cy.go('back');
});

it("fueltype", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-fueltype').click();
 cy.get('#truck-fueltype > .widget-viewall > .d-inline-block').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks');
 cy.go('back');
});

it("payload", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-payload').click();
 cy.get('#truck-payload > .widget-viewall > .d-inline-block').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks');
 cy.go('back');
});

it("seriesin", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-seriesin').click();
 cy.get('#truck-seriesin > .widget-viewall > .d-inline-block').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/commercial-vehicle-series');
 cy.go('back');
});

/*it("commercial-vehicle-series", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-family').click();
 cy.get('#family > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/commercial-vehicle-series');
 cy.go('back');
});*/

it("buy-used-trucks", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('.whitebg > .container-mid > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks');
 cy.go('back');
});

it("compare", () => {
    cy.visit('https://trucks.tractorjunction.com/');
    cy.get('.widgitCard-container > .widget-viewall > .d-inline-block').click();
 cy.wait(4000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/compare');
 cy.go('back');
});

it("news", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-news').click();
 cy.get('#truck-news > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/news');
 cy.go('back');
});

it("videos", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get('#nav-truck-videos').click();
 cy.get('#truck-videos > .viewall > .boldfont').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/videos');
 cy.go('back');
});

it("about-us", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(1) > a > .toolsBlock-inner').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/about-us');
 cy.go('back');
});

it("contact-us", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(2) > a > .toolsBlock-inner').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/contact-us');
 cy.go('back');
});

it("compare_2", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(3) > a > .toolsBlock-inner').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/compare');
 cy.go('back');
});

it("loan", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(4) > a > .toolsBlock-inner').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/loan');
 cy.go('back');
});

it("service-center", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(5) > a > .toolsBlock-inner').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/service-center');
 cy.go('back');
});

it("dealers", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(6) > a > .toolsBlock-inner').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/dealers');
 cy.go('back');
});

it("body-makers", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(7) > a > .toolsBlock-inner').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/body-makers');
 cy.go('back');
});

it("spare-parts", () => {
    cy.visit('https://trucks.tractorjunction.com/');
 cy.get(':nth-child(8) > a > .toolsBlock-inner').click();
 cy.wait(2000);
 cy.url().should('include','https://trucks.tractorjunction.com/en/spare-parts');
 cy.go('back');
 
    });

});
    