describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://infra.tractorjunction.com/");
        cy.wait(2000);

        cy.get(':nth-child(6) > .nav-link').click();
        cy.wait(2000);
        cy.get('#category').select(3);
        cy.wait(3000);
        cy.get('#brands').select(2);
        cy.get('#selectedState').type('Mah');
        cy.wait(2000);
        cy.get('#states > :nth-child(8) > a').click({force: true});
        cy.get('#findDealers').click();
        cy.url().should('include','https://infra.tractorjunction.com/en/dealers/forklift-truck/voltas/maharashtra');
        cy.go('back');
        cy.wait(2000);
        cy.get('#category').select(4);
        cy.wait(3000);
        cy.get('#brands').select(3);
        cy.get('#selectedState').type('utt');
        cy.wait(3000);
        cy.get(':nth-child(14) > a').click({force: true});
        cy.get('#findDealers').click();
        cy.url().should('include','https://infra.tractorjunction.com/en/dealers/backhoe-loader/jcb/uttar-pradesh');
        cy.go('back');

        cy.wait(3000);
        cy.get('.owl-stage > :nth-child(1) > .brandsBlock-main > a > .brandsBlock-inner').click();
        cy.url().should('include','https://infra.tractorjunction.com/en/ace-construction-equipments');
        cy.go('back');

        cy.wait(3000);
        cy.get(':nth-child(2) > .brandsBlock-main > a > .brandsBlock-inner').click();
        cy.url().should('include','https://infra.tractorjunction.com/en/bobcat-construction-equipments');
        cy.go('back');

        cy.wait(3000);
        cy.get(':nth-child(3) > .brandsBlock-main > a > .brandsBlock-inner').click();
        cy.url().should('include','https://infra.tractorjunction.com/en/bull-construction-equipments');
        cy.go('back');


    });

});