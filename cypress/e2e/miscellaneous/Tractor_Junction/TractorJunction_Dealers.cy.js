describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://www.tractorjunction.com/");
        cy.wait(2000);

        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Tractor Dealers'])[1]").click();
        cy.wait(3000);
        cy.get('.home-page-filter > .row > :nth-child(1) > .form-control').select(3);
        cy.wait(2000);
        cy.get('.home-page-filter > .row > :nth-child(2) > .form-control').select(1);
        cy.wait(2000);
        cy.get('.home-page-filter > .row > :nth-child(3) > .form-control').select(1);
        cy.get(':nth-child(4) > .form-submit-btn').click();
        cy.wait(2000);
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/sonalika/rae-bareli/');

        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Tractor Dealers'])[1]").click();
        cy.wait(3000);
        cy.get('.home-page-filter > .row > :nth-child(1) > .form-control').select(4);
        cy.wait(2000);
        cy.get('.home-page-filter > .row > :nth-child(2) > .form-control').select(2);
        cy.wait(2000);
        cy.get('.home-page-filter > .row > :nth-child(3) > .form-control').select(1);
        cy.get(':nth-child(4) > .form-submit-btn').click();
        cy.wait(2000);
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/john-deere/mahbubnagar/');
        
        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Tractor Dealers'])[1]").click();
        cy.wait(3000);
        cy.xpath("//a[@title='Mahindra Tractor Dealers and Showrooms']").invoke('removeAttr','target').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/mahindra/');
        cy.go('back');

        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Tractor Dealers'])[1]").click();
        cy.wait(3000);
        cy.xpath("//a[@title='Swaraj Tractor Dealers and Showrooms']").invoke('removeAttr','target').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/swaraj/');
        cy.go('back');

        cy.get('#navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[@title='Tractor Dealers'])[1]").click();
        cy.wait(3000);
        cy.xpath("//a[@title='Sonalika Tractor Dealers and Showrooms']").invoke('removeAttr','target').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/sonalika/');
        cy.go('back');

        cy.get('.pb-4.grey-bg > .container-mid > .row > :nth-child(1) > .tag-chips').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/ahmednagar/');
        cy.go('back');

        cy.get('.pb-4.grey-bg > .container-mid > .row > :nth-child(2) > .tag-chips').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/nashik/');
        cy.go('back');

        cy.get('.pb-4.grey-bg > .container-mid > .row > :nth-child(3) > .tag-chips').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/pune/');
        cy.go('back');

        cy.get(':nth-child(7) > .container-mid > .row > :nth-child(1) > .tag-chips').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/uttar-pradesh/');
        cy.go('back');

        cy.get(':nth-child(7) > .container-mid > .row > :nth-child(2) > .tag-chips').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/madhya-pradesh/');
        cy.go('back');

        cy.get(':nth-child(7) > .container-mid > .row > :nth-child(3) > .tag-chips').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/maharashtra/');
        cy.go('back');

        cy.get(':nth-child(8) > .container-mid > .section-css-slider > :nth-child(1) > .brand-main').click();
        cy.url().should('include','https://www.tractorjunction.com/tractor-service-centers/');
        cy.go('back');

        cy.get(':nth-child(8) > .container-mid > .section-css-slider > :nth-child(2) > .brand-main').click();
        cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/');
        cy.go('back');

    });

});