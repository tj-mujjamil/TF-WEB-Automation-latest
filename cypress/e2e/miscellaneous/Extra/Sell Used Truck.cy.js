import 'cypress-file-upload';
describe("template spec", () => {
    it("passes", () => {
    

    cy.visit("https://trucks.tractorjunction.com/en/sell-used-truck?utm_source=push_ads");

    cy.xpath("//input[@name='brand']").click();
    cy.xpath("(//div[@id='brand']//a)[10]").click();
    cy.wait(2000);
    cy.xpath("//input[@name='model']");
    cy.xpath("(//div[@id='model']//a)[11]").click();
    cy.xpath("//input[@name='kilo']");
    cy.xpath("(//div[@id='year']//a)[11]").click();

    cy.get('#rc > .sellTruckForm-priceInfo > .fillBtn').click();
    cy.get('#selltruckPrice').type(100);
    cy.get('#selltruckKilo').type(50);
    cy.get('#images > .sellTruckForm-priceInfo > .fillBtn').click();

    cy.wait(2000);
   // const Path1='Truck_1.png';
    //const Path2='Truck_2.png';
   // const filePath3='Truck_2.png';
   //cy.get('.uploadImgBlock-popup > .row > :nth-child(5)').selectFile("cypress/fixtures/truck_1.png");
   
   // cy.get('.uploadImgBlock-popup > .row > :nth-child(6)').selectFile("cypress/fixtures/truck_2.png");
    
   cy.get('#fileField1')
    .selectFile("cypress/fixtures/Truck_1.png" ,{force: true});

    cy.get('#fileField2')
    .selectFile("cypress/fixtures/Truck_2.png" ,{force: true});





    cy.wait(2000);
    //cy.get(':nth-child(5) > .m-t-16').attachFile(filePath3);    
    cy.get('#images > .sellTruckForm-priceInfo > .fillBtn').click();
    






   // cy.get('#selltruckFormInputs > :nth-child(1) > :nth-child(1) > .form-control').select(2);
//cy.get('#selltruckFormInputs > :nth-child(1) > :nth-child(2) > .form-control').select(4);
   // cy.get('#selltruckFormInputs > :nth-child(1) > :nth-child(3) > .form-control').select(6);
   // cy.get('#selltruckFormInputs > :nth-child(1) > :nth-child(4) > .form-control').type(100);
   // cy.get('#selltruckFormInputs > .fillBtn').click();


    });

});