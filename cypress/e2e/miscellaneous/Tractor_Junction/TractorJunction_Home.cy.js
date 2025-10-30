

describe("template spec", () => {
    it("passes", () => {

   cy.visit("https://www.tractorjunction.com/");
   cy.wait(2000);

   cy.get('#hps').select(5);
   cy.get('#brands').select(4);
   cy.get('#newtractor > form > .form-submit-btn').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-models/?hps=46-50&brands=58');
   cy.go('back');
   
   cy.get('#filterusedhome-tab').click();
   cy.get('#brandid').select(4);
   cy.get('#stateid').select(3);
   cy.get('.row > :nth-child(1) > .form-submit-btn').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/used-tractors-for-sell/?brandid=57&stateid=32');
   cy.go('back');

   cy.wait(2000);
   cy.get('#popularnew-tab').click();
   cy.get('#popularnew > .viewall > .d-inline-block').click();
   cy.url().should('include','https://www.tractorjunction.com/popular-tractors/');
   cy.go('back');

   cy.get('#latest-tab').click();
   cy.wait(2000);
   cy.xpath("( //a[@title='Latest'])[1]").click();
   cy.xpath("//a[@title='View All Latest Tractors']").click();
   cy.url().should('include','https://www.tractorjunction.com/latest-tractors/');
   cy.go('back');

   cy.get('#upcomingnew-tab').click();
   cy.get('#upcomingnew > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/upcoming-tractors/');
   cy.go('back');

   cy.get('#newbrand-tab').click();
   cy.get('#newbrand > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/all-brands/');
   cy.go('back');

   cy.get('#usedbrand-tab').click();
   cy.get('#usedbrand > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/all-brands/');
   cy.go('back');

   cy.get('#premium-tab').click();
   cy.get('#premium > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/used-tractors-for-sell/');
   cy.go('back');

   cy.get('#latest-tab').click();
   cy.get('#latest > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/used-tractors-for-sell/');
   cy.go('back');


   cy.get('#popular-tab').click();
   cy.get('#popular > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/used-tractors-for-sell/');
   cy.go('back');

   cy.get(':nth-child(8) > .container-mid > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/sell-used-tractor/');
   cy.go('back');

   cy.get(':nth-child(8) > .container-mid > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/sell-used-tractor/');
   cy.go('back');

   cy.get('#budget1-tab').click();
   cy.get('#budget1 > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-3-lakh/');
   cy.go('back');

   cy.get('#budget2-tab').click();
   cy.get('#budget2 > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-5-lakh/');
   cy.go('back');

   cy.get('#budget3-tab').click();
   cy.get('#budget3 > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-7-lakh/');
   cy.go('back');

   cy.get('#budget4-tab').click();
   cy.get('#budget4 > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-10-lakh/');
   cy.go('back');

   cy.get('#budget5-tab').click();
   cy.get('#budget5 > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/above-10-lakh/');
   cy.go('back');

   cy.get(':nth-child(1) > .tag-chips').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-20-hp/');
   cy.go('back');

   cy.get(':nth-child(2) > .tag-chips').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-30-hp/');
   cy.go('back');

   cy.get(':nth-child(3) > .tag-chips').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-40-hp/');
   cy.go('back');

   cy.get(':nth-child(4) > .tag-chips').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-45-hp/');
   cy.go('back');

   cy.get(':nth-child(5) > .tag-chips').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-50-hp/');
   cy.go('back');

   cy.get(':nth-child(6) > .tag-chips').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-60-hp/');
   cy.go('back');
   
   cy.get(':nth-child(7) > .tag-chips').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/under-75-hp/');
   cy.go('back');

   cy.get(':nth-child(8) > .tag-chips').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractors/above-75-hp/');
   cy.go('back');

   cy.get(':nth-child(11) > .container-mid > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/mini-tractors/');
   cy.go('back');

   cy.get(':nth-child(11) > .container-mid > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/compare-tractors/');
   cy.go('back');

   cy.get(':nth-child(13) > .container-mid > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-implements/');
   cy.go('back');

   cy.get('#agri-business-tab').click();
   cy.get('#agri-business > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/agri-business-news/');
   cy.go('back');

   cy.get('#agriculture-tab').click();
   cy.get('#agriculture > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/agriculture-news/');
   cy.go('back');

   cy.get('#animal-husbandry-tab').click();
   cy.get('#animal-husbandry > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/animal-husbandry-news/');
   cy.go('back');

   cy.get('#automobile-tab').click();
   cy.get('#automobile > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/automobile-news/');
   cy.go('back');

   cy.get('#farming-tips-tab').click();
   cy.get('#farming-tips > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/farming-tips-news/');
   cy.go('back');

   cy.get('#machinery-tab').click();
   cy.get('#machinery > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/machinery-news/');
   cy.go('back');

   cy.get('#sarkari-yojana-tab').click();
   cy.get('#sarkari-yojana > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/sarkari-yojana-news/');
   cy.go('back');

   cy.get('#social-tab').click();
   cy.get('#social > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/social-news/');
   cy.go('back');

   cy.get('#success-stories-tab').click();
   cy.get('#success-stories > .viewall > .d-inline-block').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/success-stories-news/');
   cy.go('back');

   cy.xpath("//a[@title='Tractor']").click();
   cy.xpath("(//a[@title='View More News'])[10]").click();
   cy.wait(4000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-news/');
   cy.go('back');

   cy.xpath("//a[@title='Weather']").click();
   cy.xpath("(//a[@title='View More News'])[11]").click();
   cy.wait(4000);
   cy.url().should('include','https://www.tractorjunction.com/weather-news/');
   cy.go('back');

   cy.get(':nth-child(1) > .brand-main > .weblink > .img-fluid').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-service-centers/');
   cy.go('back');
   
   cy.get(':nth-child(2) > .brand-main > .weblink > .img-fluid').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/find-tractor-dealers/');
   cy.go('back');

   cy.get(':nth-child(3) > .brand-main > .weblink > .img-fluid').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/special-tractor-offers/');
   cy.go('back');

   cy.get(':nth-child(4) > .brand-main > .weblink > .img-fluid').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/compare-tractors/');
   cy.go('back');

   cy.get(':nth-child(5) > .brand-main > .weblink > .img-fluid').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/tractor-customer-care/');
   cy.go('back');

   cy.get(':nth-child(6) > .brand-main > .weblink > .img-fluid').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/loan/');
   cy.go('back');
   
   cy.get(':nth-child(7) > .brand-main > .weblink > .img-fluid').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/about-us/');
   cy.go('back');

   cy.get(':nth-child(8) > .brand-main > .weblink > .img-fluid').click();
   cy.wait(2000);
   cy.url().should('include','https://www.tractorjunction.com/contact-us/');
   cy.go('back');
   
   










   








   







   














    });

});