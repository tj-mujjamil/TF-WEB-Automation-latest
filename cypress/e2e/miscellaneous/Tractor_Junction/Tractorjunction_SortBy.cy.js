describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://www.tractorjunction.com/");
        cy.wait(2000);
      
        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Find New Tractors'])[1]").click();
        cy.wait(2000);
        cy.xpath("//select[@onchange='shortPrice(this.value);']").select(1);
        cy.wait(2000); 
        cy.get(':nth-child(1) > .filter-block-main-inner > :nth-child(1)').click();
        cy.wait(3000);
        cy.get('.form-submit-btn2').click();
        cy.wait(5000);
        cy.get(':nth-child(4) > .new-tractor-main > .new-tractor-content > .new-tractor-info').should('have.text','\nFrom: ₹2.45-2.50 lac*\n');
        
        cy.wait(2000);
        cy.get('.navbar-brand > img').click();  
        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Find New Tractors'])[1]").click();
        cy.wait(2000);
        cy.xpath("//select[@onchange='shortPrice(this.value);']").select(2);
        cy.wait(2000); 
        cy.get(':nth-child(1) > .filter-block-main-inner > :nth-child(7)').click();
        cy.wait(2000);
        cy.get('.form-submit-btn2').click();
        cy.wait(5000);
        cy.get(':nth-child(1) > .new-tractor-main > .new-tractor-content > .new-tractor-info').should('have.text','\nFrom: ₹32.50-33.90 lac*\n');
         
    });

});