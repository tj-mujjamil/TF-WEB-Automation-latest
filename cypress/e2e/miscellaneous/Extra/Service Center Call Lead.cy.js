describe("template spec", () => {
    it("passes", () => {

cy.visit("https://trucks.tractorjunction.com/en/service-center/tata?utm_source=push_ads");
cy.get(':nth-child(1) > .dealerBlock-inner > .dealer-inner-content > .dealerBlock-contact > .linkclr').click();
cy.get('#name').type("testqa1");
cy.get('#mobile').type(9000000000);

cy.xpath("(//div[@class='loc-edit'])[1]").click();
cy.get('#DealerLeadForm > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
cy.get('.hashpop-result > #locations > li > a').click();

cy.get('#model_id').select(3);
cy.get('#DealerLeadForm > .row > .check-group > .check-box-wrp > :nth-child(2)').click();
cy.get('#SubmitDealerLead').click();





    });

});