describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://bikes.tractorjunction.com/");
        cy.wait(3000);

        cy.get('.container-mid > .viewall > a').click();
        cy.wait(5000);
        cy.get(':nth-child(1) > .common-compare > .bike-select').click();
        cy.wait(5000);
        cy.get('.accordionBlock-body > :nth-child(2)').click();
        cy.wait(5000);
        cy.get('#bikeModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(3)').click();
        cy.wait(5000);
        cy.get('#variantModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(2)').click();
       

       cy.get(':nth-child(2) > .common-compare > .bike-select').click();
       cy.wait(5000);
       cy.get('#brandModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(2)').click();
       cy.wait(5000);
       cy.get('#bikeModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(1)').click();
       cy.wait(5000);
       cy.get('#variantModal > .modal-dialog > .modal-content > .accordionBlock-body > .checkbox-custom').click();
       cy.get('.comparebtn-content > .fillBtn').click();
       cy.url().should('include','https://bikes.tractorjunction.com/en/compare-bikes/honda-activa-6g-premium-edition-deluxe-vs-honda-125-scooter-std-fi-bs-vi');
       cy.go('back');
       
    });

});