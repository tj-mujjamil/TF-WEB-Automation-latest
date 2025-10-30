describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(3000);
        
        cy.get(':nth-child(7) > .nav-link').trigger('mouseover');
        cy.xpath("(//a[@title='Find Dealers'])[1]").click();
        cy.wait(3000);
        
        cy.get('#brand_Id').select('Tata');
        cy.get('#cities').select('Pune, Maharashtra');
        cy.get('#filterDealer').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/dealers/tata/maharashtra/pune');
        cy.go('back');

        cy.get(':nth-child(1) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/dealers/tata');
        cy.go('back');
        cy.get(':nth-child(2) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/dealers/ashok-leyland');
        cy.go('back');

        cy.get(':nth-child(3) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/dealers/mahindra');
        cy.go('back');

        cy.get(':nth-child(1) > .filterBlock-chips').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/dealers/karnataka/bangalore');
        cy.go('back');

        cy.get(':nth-child(2) > .filterBlock-chips').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/dealers/maharashtra/pune');
        cy.go('back');

        cy.get(':nth-child(3) > .filterBlock-chips').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/dealers/telangana/hyderabad');
        cy.go('back');

        cy.get(':nth-child(7) > .nav-link').trigger('mouseover');
        cy.xpath("(//a[@title='Find Service Center'])[1]").click();
        cy.wait(3000);
        cy.get('#brand_Id').select(4);
        cy.get('#cities').select(1);
        cy.get('#filterDealer').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/dealers/force/maharashtra/pune');
        cy.go('back');

        cy.get(':nth-child(1) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/service-center/tata');
        cy.go('back');

        cy.get(':nth-child(2) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/service-center/ashok-leyland');
        cy.go('back');

        cy.get(':nth-child(3) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/service-center/piaggio');
        cy.go('back');

        cy.get(':nth-child(1) > .filterBlock-chips').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/service-center/maharashtra/pune');
        cy.go('back');

        cy.get(':nth-child(2) > .filterBlock-chips').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/service-center/delhi/delhi');
        cy.go('back');

        cy.get(':nth-child(3) > .filterBlock-chips').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/service-center/rajasthan/jaipur');
        cy.go('back');


        cy.get(':nth-child(7) > .nav-link').trigger('mouseover');
        cy.xpath("(//a[@title='Spare Parts'])[1]").click();
        cy.wait(3000);
        cy.get('#brand_Id').select(2);
        cy.get('#cities').select(3);
        cy.get('#filterDealer').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/spare-parts/ashok-leyland/karnataka/bangalore');
        cy.go('back');

        cy.get(':nth-child(1) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/spare-parts/tata');
        cy.go('back');

        cy.get(':nth-child(2) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/spare-parts/ashok-leyland');
        cy.go('back');

        cy.get(':nth-child(3) > a > .brandsBlock-inner').click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/spare-parts/force');
        cy.go('back');

        cy.xpath("((//div[@class='row'])[3]//div)[1]").click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/spare-parts/maharashtra/pune');
        cy.go('back');

        cy.xpath("((//div[@class='row'])[3]//div)[2]").click();
        cy.url().should('include','https://trucks.tractorjunction.com/en/spare-parts/delhi/delhi');
        cy.go('back');

       cy.get(':nth-child(7) > .nav-link').trigger('mouseover');
       cy.xpath("(//a[@title='Body Makers'])[1]").click();
       cy.wait(4000);
       cy.xpath("//div[@class='form-group mb-0']//select").select('Jaipur Rajasthan');
       cy.get('#filterBody').click();
       cy.url().should('include','https://trucks.tractorjunction.com/en/body-makers/rajasthan/jaipur');
       cy.go('back');

       cy.xpath("//a[@href='https://trucks.tractorjunction.com/en/body-makers/rajasthan/jaipur']").click();
       cy.url().should('include','https://trucks.tractorjunction.com/en/body-makers/rajasthan/jaipur');
       cy.go('back');

       cy.xpath("//a[@href='https://trucks.tractorjunction.com/en/body-makers/delhi/delhi']").click();
       cy.url().should('include','https://trucks.tractorjunction.com/en/body-makers/delhi/delhi');
       cy.go('back');

 
    });

});