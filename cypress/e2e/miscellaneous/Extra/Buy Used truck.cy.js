describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/en/used-truck/tata/intra-v50-9642?utm_source=push_ads");

        cy.get('.row > :nth-child(1) > .fillBtn').click();
        cy.get('#contactSellerDetailForm > .row > :nth-child(1) > .form-control').type("TESTQA");
        cy.get('#contactSellerDetailForm > .row > :nth-child(2) > .form-control').type(9158593788);
        cy.get(':nth-child(3) > .form-control').select(2);
        cy.get(':nth-child(4) > .form-control').select(3);
        cy.get(':nth-child(5) > .form-control').select(1);
        cy.get(':nth-child(6) > .form-control').type(100);
        cy.get('#submitContactSeller').click();
        cy.wait(2000);
        cy.get('#sellerdetailsubmission > .modal-dialog > .modal-content > .close > img').click();

        cy.get('.row > :nth-child(2) > .borderBtn').click();
        cy.get('#loannewit').select(3);
        cy.get(':nth-child(2) > .input-group > .form-control').type("TestQA");
        cy.get(':nth-child(3) > .input-group > .form-control').type(8184784900);
        cy.xpath("(//div[@class='loc-edit'])[1]").click();
        cy.get('.form-group > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.get('.hashpop-result > #locations > li > a').click();
        cy.get('#loanSubmit').click();
    });

});