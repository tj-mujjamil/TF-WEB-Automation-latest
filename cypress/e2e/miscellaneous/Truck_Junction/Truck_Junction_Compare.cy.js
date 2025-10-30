describe("template spec", () => {
    it("passes", () => {
        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(3000);

        cy.get('.d-inline-block').click();

        cy.get('#brands1').select(3);
        cy.wait(5000);
        cy.get('#brands2').select(2);
        cy.wait(5000);
        cy.get('.text-center.mt-4 > .fillBtn').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/compare/mahindra+alfa-vs-piaggio+ape-auto-ht-dx');
        cy.go('back');
        
    });

});