describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://infra.tractorjunction.com/");
        cy.get('.container-mid > .viewall > a').click();
        cy.wait(5000);
        cy.get(':nth-child(1) > .common-compare > .bike-select').click();
        cy.wait(5000);
        cy.xpath("(//div[@class='accordionBlock-body']//label)[1]").click();
        cy.wait(5000);
        cy.xpath("(//div[@class='accordionBlock-body brands']//label)[1]").click();
        cy.wait(5000);
        cy.get('#vehicleModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(1)').click();
        
        cy.wait(5000);
        cy.get(':nth-child(2) > .common-compare > .bike-select').click();
        cy.wait(5000);
        cy.get('#brandModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(1)').click();
        cy.wait(5000);
        cy.get('#vehicleModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(2)').click();
        cy.wait(5000);

        cy.get('.comparebtn-content > .fillBtn').click();
        cy.url().should('include','https://infra.tractorjunction.com/en/compare/ace-ax-124-backhoe-loader-vs-ace-ax-124-4wd-backhoe-loader');
        cy.go('back');
        
    });

});