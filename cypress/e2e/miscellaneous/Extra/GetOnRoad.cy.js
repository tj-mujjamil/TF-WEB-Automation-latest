describe("template spec", () => {
    it("passes", () => {


        cy.visit("https://www.tractorjunction.com/");
        cy.get('#popularnew > .section-css-slider > :nth-child(1) > .new-tractor-main > .mb-2 > .tractor_initiate').click();
        cy.get(':nth-child(8) > :nth-child(1) > .form-control').type("ABC");
        cy.wait(3000);
        cy.get(':nth-child(8) > :nth-child(1) > .form-control').clear();

       /* cy.get('#brands1').select(2);
        cy.get('#models1').select(3);
        cy.get('#variant1').select(2);
        cy.wait(2000);
        cy.get('#brands2').select(3);
        cy.get('#models2').select(1);
        cy.get('#variant2').select(1);  */
        
      /*  cy.get('.text-center.mt-4 > .fillBtn').click();
        cy.wait(2000);
        cy.get('.offset-md-1 > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
        cy.get('#Name').type("testqa");
        cy.get('#phone').type(9890978909);

        cy.xpath("//div[@class='loc-edit']").click();
        cy.get('.input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();

        cy.get('.check-box-wrp > :nth-child(4)').click();
        cy.get('#SubmitOnroadPriceForm').click();   

     */













       /* cy.visit("https://trucks.tractorjunction.com/?Amp=1");
        cy.get('#truck-popular > .newTruckBlock > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
        cy.wait(4000);
        cy.get('#Name').type("Raju");
        cy.get('#phone').type(9158593894);
        cy.xpath("//div[@class='loc-edit']").click();
        cy.get('.input-box-inner > #cityName').type("noida");
        cy.wait(3000);
        
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('.check-box-wrp > :nth-child(2)').click();
        cy.get('#SubmitOnroadPriceForm').click();
        //cy.xpath("//input[@placeholder='Select your location']").select(3);

     // cy.xpath("//div[@class='loc-edit']");  */





    });

});