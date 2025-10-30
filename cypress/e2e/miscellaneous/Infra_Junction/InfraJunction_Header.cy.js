describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://infra.tractorjunction.com/");
        cy.wait(2000);

        cy.get('#inpt-serch').type('jcb');
        cy.wait(2000);
        cy.get('.navbar > .search-input-wrp > .serach-btn-wrp > #serachid > .search-module-inner > .serch-header-list > :nth-child(2) > :nth-child(1) > a').click();
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/100c1');
        cy.go('back');

        cy.get('.new-btn').click();
        cy.get('#mobile').clear();
        cy.wait(2000);
        cy.get('#mobile').type("9158593785");
        cy.wait(2000);
        cy.get('#password').type("pass@123");
        cy.wait(2000);
        cy.get('.packOne-form > .fillBtn').click();
        cy.wait(3000);
        cy.get('.nav-links').trigger('mouseover');
        cy.wait(4000);
        cy.xpath("(//ul[@class='navbar-nav ml-auto mobileBlockMenuSecondNav new-lang-wrp']//li)[3]//button").click({force: true});

        cy.get('.new-btn').click();
        cy.wait(2000);
        cy.get('.reg-btn').click();
        cy.get('.packTwo-form > .row > :nth-child(1) > .inpt-wrp > .form-control').clear();
        cy.get('.packTwo-form > .row > :nth-child(1) > .inpt-wrp > .form-control').type("testqa");
        cy.wait(2000);
        cy.get(':nth-child(2) > .inpt-wrp > .mobile-valid').type('9158593785');
        cy.get('#passwordSignUp').type('pass@123');
        cy.get('#passwordSignUpConfirm').type('pass@123');
        cy.get('.signupCityctn > .inpt-wrp > .form-control').type('noida');
        cy.get('.signupCityctn > .inpt-wrp > #search-main-city > .search-module-inner > .serch-header-list > ul > :nth-child(1) > a').click();
        cy.get('.logi-btn').click();
        cy.get('#login_form > .modal-dialog > .modal-content > .close > img').click();
        cy.get('.navbar-brand > img').click();
        cy.wait(3000);
        // cy.get('#signupsubmit').click();

        cy.get(':nth-child(1) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='JCB'])[3]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/backhoe-loader');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='CAT'])[3]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/cat-construction-equipments/backhoe-loader');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Mahindra'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/mahindra-construction-equipments/backhoe-loader');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Tata Hitachi'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/tata-hitachi-construction-equipments/backhoe-loader');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Ace'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/ace-construction-equipments/backhoe-loader');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Mini'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/excavator/mini');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Crawler'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/excavator/crawler');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Heavy duty'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/excavator/heavy-duty');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Wheeled'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/excavator/wheeled');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='medium'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/excavator/medium');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Manitou'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/manitou-construction-equipments/telehandler');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='CAT'])[4]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/cat-construction-equipments/telehandler');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='JCB'])[4]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jcb-construction-equipments/telehandler');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='JLG'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/jlg-construction-equipments/telehandler');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Merlo Panoramic'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/merlo-panoramic-construction-equipments/telehandler');
        cy.go('back');
      

        cy.get(':nth-child(4) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Jib'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/crane/jib');
        cy.go('back');

        cy.get(':nth-child(4) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Tower'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/crane/tower');
        cy.go('back');

        cy.get(':nth-child(4) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Heavy Duty'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/crane/heavy-duty');
        cy.go('back');

        cy.get(':nth-child(4) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Truck'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/crane/truck');
        cy.go('back');

        cy.get(':nth-child(4) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Telescopic'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/crane/telescopic');
        cy.go('back');

        cy.get(':nth-child(5) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/construction-equipment-loan');
        cy.go('back');

        cy.get(':nth-child(6) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/dealers');
        cy.go('back');

        cy.get(':nth-child(7) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/compare');
        cy.go('back');

        cy.get(':nth-child(8) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/loan-emi-calculator');
        cy.go('back');

        cy.get(':nth-child(9) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://infra.tractorjunction.com/en/on-road-price');
        cy.go('back');

        cy.visit("https://trucks.tractorjunction.com/en/transit-mixer?utm_source=infrajunction");
        cy.wait(3000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/transit-mixer?utm_source=infrajunction');
        cy.go('back');

        cy.visit("https://trucks.tractorjunction.com/en/tippers?utm_source=infrajunction");
        cy.wait(3000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/tippers?utm_source=infrajunction');
        cy.go('back');

        cy.visit("https://trucks.tractorjunction.com/en/tractor?utm_source=infrajunction");
        cy.wait(3000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/tractor?utm_source=infrajunction');
        cy.go('back');

        cy.visit("https://trucks.tractorjunction.com/en/trucks?utm_source=infrajunction");
        cy.wait(3000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/trucks?utm_source=infrajunction');
        cy.go('back');

       //cy.get(':nth-child(10) > #navbarDropdown1').trigger('mouseover');
       //cy.wait(2000);
       //cy.xpath("//a[@title='Mixer']").click();
      // cy.wait(3000);
      // cy.url().should('include','https://trucks.tractorjunction.com/en/transit-mixer?utm_source=infrajunction');
       //cy.go('back');

        cy.get(':nth-child(10) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Tipper'])[1]").click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/tippers?utm_source=infrajunction');
        cy.go('back');

        cy.get(':nth-child(10) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Trailer'])[1]").click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/tractor?utm_source=infrajunction');
        cy.go('back');

        cy.get(':nth-child(10) > #navbarDropdown1').trigger('mouseover');
        cy.xpath("(//a[text()='Truck'])[2]").click({force: true});
        cy.wait(3000);
        cy.url().should('include','https://trucks.tractorjunction.com/en/trucks?utm_source=infrajunction');
        cy.go('back');
      
      


    });

});
