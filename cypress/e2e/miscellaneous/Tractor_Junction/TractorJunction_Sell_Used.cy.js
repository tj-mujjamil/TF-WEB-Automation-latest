describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://www.tractorjunction.com/");
        cy.wait(2000);

        cy.get('#navbarDropdown3').trigger('mouseover');
        cy.xpath("(//a[@title='Used Tractor'])[1]").click();
        cy.wait(3000);
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .loc-edit > span').click();
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type('noida');
        cy.wait(12000);
        cy.get('#locations > li > a').click();
        cy.get('#userName').type('testqa');
        cy.get('#userMobile').type('9082539192');
        cy.get('.form-sell-btn2').click();
        cy.wait(12000);
        cy.get('#tractorBrand').select(3);
        cy.get('#tractorModal').select(2);
        cy.get(':nth-child(4) > .form-group > #tractorYear').select(2);
        cy.get('#step1 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click();
        cy.wait(5000);
        cy.get('#tractorEnginConditions').select(1);
        cy.get('#tractorTyreConditions').select(2);
        cy.get('#tractorEngineHours').select(2);
        cy.get('#step2 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click();
        cy.wait(5000);

        // img uplode code
       // cy.get('#fileField1').selectFile("cypress/fixtures/Truck_1.png" ,{force: true});
       // cy.get('#fileField2').selectFile("cypress/fixtures/Truck_2.png" ,{force: true});
        
cy.visit("https://www.tractorjunction.com/sell/harvester/");
cy.get('.col-12 > .form-group > .form-control').select(2);
cy.wait(3000);
cy.get(':nth-child(2) > .form-group > .form-control').clear();
cy.get(':nth-child(2) > .form-group > .form-control').type("TESTQA");
cy.wait(2000);
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(1);
cy.get(':nth-child(4) > .form-group > .form-control').select(2);
cy.get('.row > :nth-child(5) > .form-group > .form-control').select(1);
cy.get('fieldset.ng-scope > .form-submit-btn').click();

cy.wait(5000);
cy.get('.col-12 > .form-group > .form-control').clear({force: true});
cy.get('.col-12 > .form-group > .form-control').type("TESTQA");
cy.wait(2000);
cy.get(':nth-child(2) > .form-group > .form-control').select(3);
cy.wait(2000);
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(3);
cy.wait(2000);
cy.get('.input-group > .form-control').type(50);
cy.wait(2000);
cy.get('.row > :nth-child(5) > .form-group > .form-control').type("thank you");
cy.get('fieldset.ng-scope > .form-submit-btn').click();

cy.get('#fileField1').selectFile("cypress/fixtures/Truck_1.png" ,{force: true});
cy.get('#fileField2').selectFile("cypress/fixtures/Truck_2.png" ,{force: true});
cy.wait(2000);
cy.get('fieldset.ng-scope > .form-submit-btn').click();


    });

});