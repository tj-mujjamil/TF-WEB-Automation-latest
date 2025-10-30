describe("template spec", () => {
    it("passes", () => {

        cy.visit("https://bikes.tractorjunction.com/");
        cy.wait(2000);

        cy.get('#inpt-serch').type('honda');
        cy.wait(2000);
        cy.get('.serch-header-list > :nth-child(2) > :nth-child(1) > a').click();
        cy.wait(2000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes');
        cy.go('back');

        cy.wait(3000);
        cy.get('.new-btn').click();
        cy.wait(2000);
        cy.get('#mobile').clear();
        cy.get('#mobile').type("9158593785");
        cy.wait(2000);
        cy.get('#password').type("Pass@123");
        cy.wait(2000);
        cy.get('.packOne-form > .fillBtn').click();
        cy.wait(2000);

        cy.get('.navbar > .navbar-nav > .nav-item').trigger('mouseover');
        cy.wait(5000);
        cy.xpath("(//ul[@class='navbar-nav ml-auto mobileBlockMenuSecondNav new-lang-wrp']//li)[3]//button").click({force: true});

        cy.get('.new-btn').click();
        cy.get('.reg-btn > .hand-cursor').click();
        cy.get('.packTwo-form > .row > :nth-child(1) > .inpt-wrp > .form-control').clear();
        cy.get('.packTwo-form > .row > :nth-child(1) > .inpt-wrp > .form-control').type("testqa");
        cy.wait(2000);
        cy.get('.packTwo-form > .row > :nth-child(2) > .inpt-wrp > .form-control').type("9158593785");
        cy.get('#passwordSignUp').type('Pass@123');
        cy.get('#passwordSignUpConfirm').type('Pass@123');
        cy.get('.signupCityctn > .inpt-wrp > .form-control').type('noida');
        cy.wait(2000);
        cy.get('.signupCityctn > .inpt-wrp > .form-control').click();
        cy.get('.logi-btn > .hand-cursor').click();

        cy.get('#login_form > .modal-dialog > .modal-content > .close > img').click();


        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='LATEST BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='BEST BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-bikes-in-india');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='HONDA'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='HERO'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/hero-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='TVS'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/tvs-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='YAMAHA'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/yamaha-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='ROYAL ENFIELD'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/royal-enfield-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='KTM'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/ktm-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='BAJAJ'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bajaj-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//li [@class='nav-item dropdown sum_menu-ancher']//span)[1]").trigger('mouseover');
        cy.xpath("(//a[text()='ALL BRANDS'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-brands');
        cy.go('back');
       
        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[3]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 1 LAKH']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/bikes-under-1-lakh');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[3]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 1.5 LAKH']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/bikes-under-1.5-lakh');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[3]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 2 LAKH']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/bikes-under-2-lakh');
        cy.go('back');

        
        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[3]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 2.5 LAKH']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/bikes-under-2.5-lakh');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[3]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 3 LAKH']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-bikes/bikes-under-3-lakh');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='BEST MILEAGE BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-mileage-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[4]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 30 KMPL MILEAGE BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/under-30kmpl-mileage-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[4]").trigger('mouseover');
        cy.xpath("//a[text()='40 - 50 KMPL MILEAGE BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/40kmpl-50kmpl-mileage-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[4]").trigger('mouseover');
        cy.xpath("//a[text()='50 - 60 KMPL MILEAGE BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/50kmpl-60kmpl-mileage-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[4]").trigger('mouseover');
        cy.xpath("//a[text()=' 60 - 70 KMPL MILEAGE BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/60kmpl-70kmpl-mileage-bikes');
        cy.go('back');

        cy.get(':nth-child(1) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[4]").trigger('mouseover');
        cy.xpath("//a[text()='ABOVE 70 KMPL MILEAGE BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/above-70kmpl-mileage-bikes');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='LATEST SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/latest-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='BEST SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-scooters-in-india');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/upcoming-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[6]").trigger('mouseover');
        cy.xpath("(//a[text()='HONDA'])[2]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/honda-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[6]").trigger('mouseover');
        cy.xpath("(//a[text()='HERO'])[2]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/hero-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[6]").trigger('mouseover');
        cy.xpath("(//a[text()='TVS'])[2]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/tvs-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[6]").trigger('mouseover');
        cy.xpath("(//a[text()='SUZUKI'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/suzuki-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[6]").trigger('mouseover');
        cy.xpath("(//a[text()='YAMAHA'])[2]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/yamaha-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[6]").trigger('mouseover');
        cy.xpath("(//a[text()='ALL SCOOTER BRANDS'])[1]").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/scooter-brands');
        cy.go('back');
       
        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[7]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 70,000']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-scooters/scooters-under-70000');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[7]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 80,000']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-scooters/scooters-under-80000');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[7]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 90,000']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-scooters/scooters-under-90000');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[7]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 1,00,000']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/new-scooters/scooters-under-1-lakh');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='BEST MILEAGE SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/best-mileage-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[8]").trigger('mouseover');
        cy.xpath("//a[text()='UNDER 30 KMPL MILEAGE SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/under-30kmpl-mileage-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[8]").trigger('mouseover');
        cy.xpath("//a[text()='30 - 40 KMPL MILEAGE SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/30kmpl-40kmpl-mileage-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[8]").trigger('mouseover');
        cy.xpath("//a[text()='40 - 50 KMPL MILEAGE SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/40kmpl-50kmpl-mileage-scooters');
        cy.go('back');

        cy.get(':nth-child(2) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[8]").trigger('mouseover');
        cy.xpath("//a[text()='ABOVE 50 KMPL MILEAGE SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/above-50kmpl-mileage-scooters');
        cy.go('back');
      
        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[11]").trigger('mouseover');
        cy.xpath("//a[text()='MATTER']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/matter');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[11]").trigger('mouseover');
        cy.xpath("//a[text()='REVOLT']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/revolt');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[11]").trigger('mouseover');
        cy.xpath("//a[text()='TORK']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/tork');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[11]").trigger('mouseover');
        cy.xpath("//a[text()='HOP']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/hop');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[11]").trigger('mouseover');
        cy.xpath("//a[text()='ALL E-BIKE BRANDS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bike-brands');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("//a[text()='LATEST ELECTRIC BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/latest');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("//a[text()='BEST ELECTRIC BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/best');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[10]").trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING ELECTRIC BIKES']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-bikes/upcoming');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[13]").trigger('mouseover');
        cy.xpath("//a[text()='OLA']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/ola');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[13]").trigger('mouseover');
        cy.xpath("//a[text()='OKINAWA']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/okinawa');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[13]").trigger('mouseover');
        cy.xpath("//a[text()='OKAYA']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/okaya');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[13]").trigger('mouseover');
        cy.xpath("//a[text()='BGAUSS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/bgauss');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("(//span[@role='button'])[13]").trigger('mouseover');
        cy.xpath("//a[text()='ALL E-SCOOTER BRANDS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooter-brands');
        cy.go('back');  

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("//a[text()='LATEST ELECTRIC SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/latest');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("//a[text()='BEST ELECTRIC SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/best');
        cy.go('back');

        cy.get(':nth-child(3) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("(//span[@role='button'])[12]").trigger('mouseover');
        cy.xpath("//a[text()='UPCOMING ELECTRIC SCOOTERS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/electric-scooters/upcoming');
        cy.go('back');

        cy.get(':nth-child(4) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/compare-bikes');
        cy.go('back'); 
        
        cy.get(':nth-child(4) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/compare-bikes');
        cy.go('back'); 

        cy.get(':nth-child(5) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/check-on-road-price-in-india');
        cy.go('back'); 

        cy.get(':nth-child(6) > .nav-link').click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-dealer-showrooms');
        cy.go('back'); 

        cy.get(':nth-child(7) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='NEWS']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/news');
        cy.go('back'); 

        cy.get(':nth-child(7) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='WEB STORY']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/web-stories');
        cy.go('back'); 

        cy.get(':nth-child(8) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='BIKE LOAN']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-loan');
        cy.go('back'); 

        cy.get(':nth-child(8) > #navbarDropdown-bike').trigger('mouseover');
        cy.xpath("//a[text()='EMI CALCULATOR']").click();
        cy.wait(3000);
        cy.url().should('include','https://bikes.tractorjunction.com/en/bike-loan-emi-calculator');
        cy.go('back');
        


    });

});