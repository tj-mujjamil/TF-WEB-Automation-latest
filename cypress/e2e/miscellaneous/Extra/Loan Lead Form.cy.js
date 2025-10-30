describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/en/new-truck-loan?utm_source=push_ads");
        cy.get(':nth-child(2) > .input-group > .form-control').type("TESTQA");
        cy.get(':nth-child(3) > .input-group > .form-control').type(9164873895);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('#loanSubmit').click();

        cy.visit("https://trucks.tractorjunction.com/en/used-truck-loan?utm_source=push_ads");
        cy.get(':nth-child(2) > .input-group > .form-control').type("testqa");
        cy.get(':nth-child(3) > .input-group > .form-control').type(9898989900);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('#loanSubmit').click();

        cy.visit("https://trucks.tractorjunction.com/en/loan-against-truck?utm_source=push_ads");
        cy.get(':nth-child(2) > .input-group > .form-control').type("testqa1");
        cy.get(':nth-child(3) > .input-group > .form-control').type(9999998780);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('#loanSubmit').click();


        cy.visit("https://trucks.tractorjunction.com/en/personal-loan?utm_source=push_ads");
        cy.get(':nth-child(2) > .input-group > .form-control').type("testqa2");
        cy.get(':nth-child(3) > .input-group > .form-control').type(9989998780);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('#loanSubmit').click();




    });

});