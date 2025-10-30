describe("template spec", () => {
    it("passes", () => {

   cy.visit("https://www.tractorjunction.com/");
   cy.wait(2000);

   cy.get('#inpt-serch').type("mahindra");
   cy.wait(3000);
   cy.get('.serch-header-list > :nth-child(2) > :nth-child(1) > a').click();
   cy.url().should('include','https://www.tractorjunction.com/mahindra-tractor/novo-655-di-pp-4wd-crdi/');
   cy.go('back');

   cy.get('#lang-mobile-btn > :nth-child(1) > img').click();
   cy.wait(2000);
   cy.get('.checkLang_hi').click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/hi/');
   cy.go('back');
 
   cy.wait(3000);
   cy.get('.new-btn').click();
   cy.wait(3000);
   cy.get('#mobile').type("mujjamilsalim@tractorjunction.com");
   cy.wait(3000);
   cy.get('#password').type("8381814138");
   cy.get('#loginbtn').click();
   cy.wait(2000);
   cy.get('.new-btn').click();
  // cy.wait(5000);
  // cy.get('.user-left > .form-submit-btn').click();

  // cy.get('.new-btn').click();
   cy.wait(2000);
   cy.get('.page-banner-content > .mb-0 > a').click();
   cy.wait(2000);
   cy.get('#name').clear();
   cy.get('#name').type('testqa');
   cy.wait(2000);
   cy.get('#mobileNo').type('9158593785');
   cy.wait(2000);
   cy.get('#email').type('abc@123');
   cy.get('#state_id').select(2);
   cy.wait(2000);
   cy.get('#dist_id').select(2);
   cy.wait(2000);
   cy.get('#tehsil_id').select(2);
   cy.get('#register-form > .form-submit-btn').click();
   cy.xpath("//span[text()='Mobile number is Already Registered.']").should('have.text','Mobile number is Already Registered.');
   
   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@id='navbarDropdown6'])[1]").trigger('mouseover');
   cy.xpath("(//a[@title='Mahindra'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/mahindra-tractor/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@id='navbarDropdown6'])[1]").trigger('mouseover');
   cy.xpath("(//a[@title='Swaraj'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/swaraj-tractor/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@id='navbarDropdown6'])[1]").trigger('mouseover');
   cy.xpath("(//a[@title='Farmtrac'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/farmtrac-tractor/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@id='navbarDropdown6'])[1]").trigger('mouseover');
   cy.xpath("(//a[@title='Massey Ferguson'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/massey-ferguson-tractor/');
   cy.go('back');
   
   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@id='navbarDropdown6'])[1]").trigger('mouseover');
   cy.xpath("(//a[@title='John Deere'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/john-deere-tractor/');
   cy.go('back');
   
   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@id='navbarDropdown6'])[1]").trigger('mouseover');
   cy.xpath("(//a[@title='New Holland'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/new-holland-tractor/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@id='navbarDropdown6'])[1]").trigger('mouseover');
   cy.xpath("(//a[text()='ALL BRANDS'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/all-brands/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Find New Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Popular Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/popular-tractors/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Upcoming Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/upcoming-tractors/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Latest Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/latest-tractors/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Electric Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/electric-tractors/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Mini Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/mini-tractors/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='4WD Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/4wd-tractors/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='AC Cabin Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/ac-cabin-tractors/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Offers'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/special-tractor-offers/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Tractor Dealers'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/');
   cy.go('back');

   cy.get('#navbarDropdown1').trigger('mouseover');
   cy.xpath("(//a[@title='Tractor Service Center'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-service-centers/');
   cy.go('back');

   cy.get('#navbarDropdown4').trigger('mouseover');
   cy.xpath("(//a[@title='Certified Used Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/assured-used-tractors-for-sell/');
   cy.go('back');
   
   cy.get('#navbarDropdown4').trigger('mouseover');
   cy.xpath("(//a[@title='Used Tractors'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/used-tractors-for-sell/');
   cy.go('back');

   cy.get('#navbarDropdown4').trigger('mouseover');
   cy.xpath("(//a[@title='Used Farm Implements'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/used-farm-implements-for-sell/');
   cy.go('back');

   cy.get('#navbarDropdown4').trigger('mouseover');
   cy.xpath("(//a[@title='Used Harvester'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/used-harvester-for-sell/');
   cy.go('back');

   cy.get('#navbarDropdown4').trigger('mouseover');
   cy.xpath("(//a[@title='Tractor valuation'])[1]").click();
   //cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/used-tractor-valuation/');
   cy.go('back');

   cy.get('#navbarDropdown4').trigger('mouseover');
   cy.xpath("(//a[text()='Find Used Tractor'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/buy-used-tractor/');
   cy.go('back');

   cy.get('#navbarDropdown3').trigger('mouseover');
   cy.xpath("(//a[@title='Used Tractor'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/sell-used-tractor/');
   cy.go('back');

   cy.get('#navbarDropdown3').trigger('mouseover');
   cy.xpath("(//a[text()='Used Farm Implements'])[2]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/sell/farm-implements/');
   cy.go('back');

   cy.get('#navbarDropdown3').trigger('mouseover');
   cy.xpath("(//a[@title='Used Harvester'])[2]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/sell/harvester/');
   cy.go('back');

   cy.get('#navbarDropdown5').trigger('mouseover');
   cy.xpath("//a[@id='navbarDropdown7']").trigger('mouseover');
   cy.xpath("(//a[@title='All Implements'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-implements/');
   cy.go('back');

   cy.get('#navbarDropdown5').trigger('mouseover');
   cy.xpath("//a[@id='navbarDropdown7']").trigger('mouseover');
   cy.xpath("(//a[@title='Rotary Tiller'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-implements/rotary-tiller-rotavator/');
   cy.go('back');

   
   cy.get('#navbarDropdown5').trigger('mouseover');
   cy.xpath("//a[@id='navbarDropdown7']").trigger('mouseover');
   cy.xpath("(//a[@title='Cultivator'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-implements/cultivator/');
   cy.go('back');

   cy.get('#navbarDropdown5').trigger('mouseover');
   cy.xpath("//a[@id='navbarDropdown7']").trigger('mouseover');
   cy.xpath("(//a[@title='Plough'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-implements/plough/');
   cy.go('back');

   cy.get('#navbarDropdown5').trigger('mouseover');
   cy.xpath("//a[@id='navbarDropdown7']").trigger('mouseover');
   cy.xpath("(//a[@title='Harrow'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-implements/harrow/');
   cy.go('back');

   cy.get('#navbarDropdown5').trigger('mouseover');
   cy.xpath("//a[@id='navbarDropdown7']").trigger('mouseover');
   cy.xpath("(//a[@title='Trailor'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-implements/trolley/');
   cy.go('back');

   cy.get('#navbarDropdown5').trigger('mouseover');
   cy.xpath("//a[@id='navbarDropdown7']").trigger('mouseover');
   cy.xpath("(//a[@title='Tractor Mounted Sprayers'])[1]").click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-implements/sprayer/');
   cy.go('back');

   cy.get('#navbarDropdown5').trigger('mouseover');
   cy.xpath("(//a[@title='Harvester'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/tractor-combine-harvesters/');
   cy.go('back');

   cy.get('.navbar-nav > :nth-child(5) > .nav-link').click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/compare-tractors/');
   cy.go('back');

   cy.get('.navbar-nav > :nth-child(6) > .nav-link').click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/on-road-price/');
   cy.go('back');

   cy.get('.navbar-nav > :nth-child(7) > .nav-link').click();
   cy.wait(3000);
   cy.url().should('include','https://www.tractorjunction.com/shop/service-kit');
   cy.go('back');

   cy.get('#navbarDropdown10').trigger('mouseover');
   cy.xpath("(//a[@title='New Tractor Loan'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/tractor-loan/');
   cy.go('back');

   cy.get('#navbarDropdown10').trigger('mouseover');
   cy.xpath("(//a[@title='Used Tractor Loan'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/used-tractor-loan/');
   cy.go('back');

   cy.get('#navbarDropdown10').trigger('mouseover');
   cy.xpath("(//a[@title='Loan Against Tractor'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/loan-against-tractor/');
   cy.go('back');

   cy.get('#navbarDropdown10').trigger('mouseover');
   cy.xpath("//a[@title='Personal Loan']").click();
   cy.url().should('include','https://www.tractorjunction.com/personal-loan/');
   cy.go('back');

   cy.get('#navbarDropdown12').trigger('mouseover');
   cy.xpath("(//a[@title='All News'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/news/');
   cy.go('back');

   cy.get('#navbarDropdown12').trigger('mouseover');
   cy.xpath("(//a[@title='Tractor News'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/tractor-news/');
   cy.go('back');

   cy.get('#navbarDropdown12').trigger('mouseover');
   cy.xpath("(//a[@title='Agriculture News'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/agriculture-news/');
   cy.go('back');

   cy.get('#navbarDropdown12').trigger('mouseover');
   cy.xpath("(//a[@title='Sarkari Yojana news'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/sarkari-yojana-news/');
   cy.go('back');

   cy.get('#navbarDropdown12').trigger('mouseover');
   cy.xpath("(//a[@title='Web Story'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/web-stories/');
   cy.go('back');

   cy.get('#navbarDropdown12').trigger('mouseover');
   cy.xpath("(//a[@title='Blog'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/blog/');
   cy.go('back');

   cy.get('#navbarDropdown12').trigger('mouseover');
   cy.xpath("(//a[@title='Videos'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/videos/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='EMI Calculator'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/tractor-loan-emi-calculator/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='Finance'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/loan/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='Tyres'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/tyres/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='Insurance'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/tractor-insurance/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='Dealership Enquiry'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/tractor-dealership-enquiry/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='Certified Dealers'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/certified-dealers/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='Become Certified Dealers'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/become-certified-dealer/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='Broker Dealer'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/broker-dealers/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='JCB Backhoe Loader'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/jcb-backhoe-loaders/');
   cy.go('back');

   cy.get('#navbarDropdown8').trigger('mouseover');
   cy.xpath("(//a[@title='Krish-e'])[1]").click();
   cy.url().should('include','https://www.tractorjunction.com/hi/krishe');
   cy.go('back');

    });

});