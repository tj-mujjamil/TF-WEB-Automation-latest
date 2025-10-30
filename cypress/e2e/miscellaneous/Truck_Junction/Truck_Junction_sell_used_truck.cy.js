describe("template spec", () => {
    it("passes", () => {
        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(3000);
  
    cy.visit("https://trucks.tractorjunction.com/en/sell-used-truck?utm_source=push_ads");
    cy.wait(3000);
    cy.xpath("//input[@name='brand']").click();
    cy.wait(3000);
    cy.xpath("(//div[@id='brand']//a)[10]").click();
    cy.wait(3000);
    cy.xpath("//input[@name='model']");
    cy.xpath("(//div[@id='model']//a)[11]").click();
    cy.xpath("//input[@name='kilo']");
    cy.xpath("(//div[@id='year']//a)[11]").click();

    cy.get('#rc > .sellTruckForm-priceInfo > .fillBtn').click();
    cy.get('#selltruckPrice').type(100);
    cy.get('#selltruckKilo').type(50);
    cy.get('#images > .sellTruckForm-priceInfo > .fillBtn').click();

    cy.wait(2000);    
    cy.get('#fileField1')
    .selectFile("cypress/fixtures/Truck_1.png" ,{force: true});
     cy.get('#fileField2')
    .selectFile("cypress/fixtures/Truck_2.png" ,{force: true});
    cy.wait(2000); 
    cy.get('#images > .sellTruckForm-priceInfo > .fillBtn').click();
    cy.wait(2000);
    cy.get('#selltruckoverview').type('Thank you',{force: true});
    cy.wait(2000);
    cy.get('#images > .sellTruckForm-priceInfo > .fillBtn').click({force: true});

    cy.get('#userDetails > .row > :nth-child(1) > .form-control').type('testqa',{force: true});
    cy.get('#userDetails > .row > :nth-child(2) > .form-control').type('9082539192',{force: true});
    cy.get('#userDetails > .row > :nth-child(3) > .form-control').type('abc@123',{force: true});
    cy.get('#exampleFormControlSelect2').select(2,{force: true});
    cy.get('#exampleFormControlSelect3').select(1,{force: true});
    cy.get('#exampleFormControlSelect4').select(1,{force: true});
    cy.get('#finalFormSubmit').click({force: true});

        
    });

});