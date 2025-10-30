describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://www.tractorjunction.com/");
        cy.wait(2000);

        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Find New Tractors'])[1]").click();
        cy.wait(2000);
        
        cy.get(':nth-child(2) > .filter-block-main-inner > :nth-child(1)').click();
        cy.wait(2000);
        cy.get('.form-submit-btn2').click();
        cy.url().should('include','https://www.tractorjunction.com/tractors/?shortBy=&prices=&hps=1-20&brands=');
        
        cy.get(':nth-child(1) > .form-submit-btn').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .filter-block-main-inner > :nth-child(8)').click();
        cy.get('.form-submit-btn2').click();
        cy.wait(3000);
        cy.url().should('include','https://www.tractorjunction.com/tractors/?shortBy=&prices=&hps=76-150&brands=');
        
        cy.get(':nth-child(1) > .form-submit-btn').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .filter-block-main-inner > :nth-child(2)').click();
        cy.get('.form-submit-btn2').click();
        cy.wait(2000);

        cy.get('.col-md-9 > .section-heading > h2').should('have.text','72 - New Tractors');
        cy.wait(2000);
        
        cy.get(':nth-child(1) > .form-submit-btn').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .filter-block-main-inner > :nth-child(3)').click();
        cy.get('.form-submit-btn2').click();
        cy.wait(2000);
        cy.get('.col-md-9 > .section-heading > h2').should('have.text','58 - New Tractors');
        cy.get(':nth-child(1) > .form-submit-btn').click();
        cy.wait(2000);

        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Find New Tractors'])[1]").click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .filter-block-main-inner > :nth-child(2)').click();
        cy.get('.form-submit-btn2').click();
        cy.wait(2000);
        cy.get('.col-md-9 > .section-heading > h2').should('have.text','57 - New Tractors');


       


    });

});