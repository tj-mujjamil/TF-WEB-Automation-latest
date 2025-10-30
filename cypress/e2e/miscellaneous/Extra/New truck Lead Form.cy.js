describe("template spec", () => {
    it("passes", () => {
        cy.visit("https://trucks.tractorjunction.com/en/tata-truck/intra-v50?utm_source=push_ads")
        cy.get('.floatingMobile-left > .fillBtn').click();
        
        cy.get('#Name').type("raju");
        cy.get('#phone').type(9158458798);
        
        cy.xpath("(//div[@class='loc-edit'])[2]").click();
        cy.get('#onRoadPriceFormData > .row > .col-sm-12.form-group > .form-group-inner > .hashpop > .forms > .input-box > .input-box-inner > #cityName').type("noida");
        cy.wait(2000);
        cy.get('.hashpop-result > #locations > li > a').click();

        cy.get('#tentative_purchase > .check-box-wrp > :nth-child(2)').click();
        cy.get('#SubmitOnroadPriceForm').click();
        //cy.wait(5000);
       // cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();
        
        cy.get('.floatingMobile-right > .borderBtn').click();
        cy.get('#loannewit').select(2); 
        cy.get('#loanSubmit').click();
        





    });

});