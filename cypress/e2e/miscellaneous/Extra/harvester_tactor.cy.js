describe("template spec", () => {
    it("passes", () => {

cy.visit("https://www.tractorjunction.com/hi/krishe");

cy.get('#inputname').type("testqa");
cy.get('#inputnumber').type(9080709999);

cy.get(':nth-child(3) > .form-group > #locationPlaceholder').click();
cy.wait(7000);
cy.get('#submitEKrishe').click();








/*cy.get('.col-12 > .form-group > .form-control').select(3);
cy.get(':nth-child(2) > .form-group > .form-control').type("ABC");
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(4);
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(4);
cy.get('.row > :nth-child(3) > .form-group > .form-control').select(1);
cy.get(':nth-child(4) > .form-group > .form-control').select(2);

cy.get('fieldset.ng-scope > .form-submit-btn').click(); */







    });

});