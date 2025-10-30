describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/en/body-makers?utm_source=push_ads");
        cy.get('#cities').select(5);
        cy.get('#filterBody').click();
        cy.get('.dealerBlock-contact > .linkclr').click();
        cy.get('#name').type("testqa");
        cy.get('#mobile').type(9878945687);

        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('#DealerLeadForm > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();

        cy.get('#brand_id').select(3);
        cy.get('#model_id').select(6);
        cy.get('#DealerLeadForm > .row > .check-group > .check-box-wrp > :nth-child(4)').click();
        cy.get('#SubmitDealerLead').click();






    });

});