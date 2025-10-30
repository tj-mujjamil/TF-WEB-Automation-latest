describe("template spec", () => {
    it("passes", () => {
        cy.visit("https://infra.tractorjunction.com/");
        cy.wait(2000);

        cy.get(':nth-child(1) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='JCB'])[3]").click();
        cy.wait(3000);
        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?hydraulic_oil_system=0-50');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseFive > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?hydraulic_oil_system=100-150');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?max_lift_capacity=0-2000');
        cy.get('#cancle-filter').click();

        
        cy.get('#filter-collapseSix > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?max_lift_capacity=2000-3000');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader');
        cy.get('#cancle-filter').click();
        
        cy.get('#filter-collapseSeven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEight > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?max_reach_at_full_height_bucket_dumped=2000-3000');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?max_operating_weight=0-5000');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseNine > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?max_operating_weight=5000-8000');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseTen > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?bucket_capacity=0-1');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseTen > .accordionBlock-body > :nth-child(3)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?bucket_capacity=2-9');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEleven > .accordionBlock-body > :nth-child(1)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader');
        cy.get('#cancle-filter').click();

        cy.get('#filter-collapseEleven > .accordionBlock-body > :nth-child(2)').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader');
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(1) > .pricetab').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader?price=0-2000000');
        cy.get('#cancle-filter').click();

        cy.get(':nth-child(2) > .pricetab').click({force: true});
        cy.wait(2000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader');
        cy.get('#cancle-filter').click();







    });

});