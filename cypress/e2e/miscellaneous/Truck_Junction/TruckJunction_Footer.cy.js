describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/");
        
         cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(1) > .d-block').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks');
         cy.go('back');
        
         cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(2) > a').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks');
         cy.go('back');

         cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(3) > a').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/sell-used-truck');
         cy.go('back');

         cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(4) > a').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/electric');
         cy.go('back');

         cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(5) > a').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/loan');
         cy.go('back');


         cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(6) > a').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/compare');
         cy.go('back');

         cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(7) > a').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/dealers');
         cy.go('back');

         cy.get(':nth-child(1) > .footerMain-pageLinks > :nth-child(8) > a').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/select-your-truck');
         cy.go('back');

         cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(1) > .d-block').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/about-us');
         cy.go('back');

         cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(2) > .d-block').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/contact-us');
         cy.go('back');

         cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(3) > .d-block').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/sitemap');
         cy.go('back');

         cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(4) > .d-block').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/blog/');
         cy.go('back');

         cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(5) > .d-block').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/news');
         cy.go('back');

         cy.get(':nth-child(2) > .footerMain-pageLinks > :nth-child(6) > .d-block').click();
         cy.wait(2000);
         cy.url().should('include','https://trucks.tractorjunction.com/en/videos');
         cy.go('back');
                                
           /*
         cy.xpath("(//a[@title='facebook'])[2]").invoke('removeAttr','target').click();
         cy.wait(2000);
         cy.xpath("//div[@aria-label='Reload Page']").click();
         

         //cy.url().should('include','https://bikes.tractorjunction.com/en/privacy-policy');
         //cy.go('back');


             */

    });

});