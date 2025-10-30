describe("template spec", () => {
    it("passes", () => {

  cy.visit("https://trucks.tractorjunction.com/en/onroadprice?utm_source=push_ads");

  cy.get('#onroadPriceForm > .row > :nth-child(1) > .form-control').type("testqa");
  cy.get('#onroadPriceForm > .row > :nth-child(2) > .form-control').type(9897897834);
  cy.get(':nth-child(3) > .form-control').select(3);
  cy.get(':nth-child(4) > .form-control').select(2);
  cy.get(':nth-child(5) > .form-group-inner > .loc-edit').click();
  cy.get(':nth-child(5) > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
  cy.get('.hashpop-result > #locations > li > a').click();
  cy.get('#onroadPriceForm > .row > .check-group > .check-box-wrp > :nth-child(4)').click();
  cy.get('#SubmitOnroadPrice').click();
  










    });

});