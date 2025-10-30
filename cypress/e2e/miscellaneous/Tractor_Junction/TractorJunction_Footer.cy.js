describe("template spec", () => {
    it("passes", () => {

 cy.visit("https://www.tractorjunction.com/");
 cy.wait(2000);
/*
 cy.xpath("(//div[@class='social-media']//a)[1]").invoke('removeAttr','target');
 cy.wait(5000);
 
 cy.xpath("(//div[@class='social-media']//a)[1]//img[@class='filter-img']").click({ multiple: true });
 cy.wait(5000);
 cy.url().should('include','https://www.facebook.com/tractorjunction/');
 */

 cy.get(':nth-child(1) > .quicklinks > :nth-child(1) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/shop/service-kit');
 cy.go('back');

 cy.get(':nth-child(1) > .quicklinks > :nth-child(2) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/about-us/');
 cy.go('back');

 cy.get(':nth-child(1) > .quicklinks > :nth-child(3) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/contact-us/');
 cy.go('back');

 cy.get(':nth-child(1) > .quicklinks > :nth-child(4) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/career/');
 cy.go('back');

 cy.get(':nth-child(1) > .quicklinks > :nth-child(5) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/tractor-customer-care/');
 cy.go('back');

 cy.get(':nth-child(1) > .quicklinks > :nth-child(6) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/tractor-service-centers/');
 cy.go('back');

 cy.get(':nth-child(1) > .quicklinks > :nth-child(7) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/loan/');
 cy.go('back');

 cy.get(':nth-child(1) > .quicklinks > :nth-child(8) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/guest-post/');
 cy.go('back');

 cy.get(':nth-child(1) > .quicklinks > :nth-child(9) > .linkwhite').invoke('removeAttr','target').click();
 cy.wait(2000);
 cy.url().should('include','https://dealers.tractorjunction.com/');
 cy.go('back');  

 cy.get(':nth-child(2) > .quicklinks > :nth-child(1) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/tractor-news/');
 cy.go('back');  

 cy.get(':nth-child(2) > .quicklinks > :nth-child(2) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/agriculture-news/');
 cy.go('back');  

 cy.get(':nth-child(2) > .quicklinks > :nth-child(3) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/weather-news/');
 cy.go('back');  

 cy.get(':nth-child(2) > .quicklinks > :nth-child(4) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/agri-business-news/');
 cy.go('back');  

 cy.get(':nth-child(2) > .quicklinks > :nth-child(5) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/sarkari-yojana-news/');
 cy.go('back');  
 cy.wait(3000);

 cy.get(':nth-child(2) > .quicklinks > :nth-child(6) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/machinery-news/');
 cy.go('back');  

 cy.get(':nth-child(2) > .quicklinks > :nth-child(7) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/social-news/');
 cy.go('back');  

 cy.get(':nth-child(2) > .quicklinks > :nth-child(8) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/animal-husbandry-news/');
 cy.go('back');  

 cy.get(':nth-child(2) > .quicklinks > :nth-child(9) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/tractor-subsidy-in-india/');
 cy.go('back'); 

 cy.get(':nth-child(3) > .quicklinks > :nth-child(1) > .linkwhite').click();
 cy.wait(10000);
 cy.url().should('include','https://www.tractorjunction.com/used-tractors-for-sell/');
 cy.go('back'); 
 
 cy.get(':nth-child(3) > .quicklinks > :nth-child(2) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/used-farm-implements-for-sell/');
 cy.go('back'); 

 cy.get(':nth-child(3) > .quicklinks > :nth-child(3) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/used-harvester-for-sell/');
 cy.go('back'); 

 cy.get(':nth-child(4) > .quicklinks > :nth-child(1) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/sell-used-tractor/');
 cy.go('back'); 

 cy.get(':nth-child(4) > .quicklinks > :nth-child(2) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/sell/farm-implements/');
 cy.go('back'); 

 cy.get(':nth-child(4) > .quicklinks > :nth-child(3) > .linkwhite').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/sell/harvester/');
 cy.go('back'); 



//cy.get('[href="https://www.facebook.com/tractorjunction/"] > .filter-img').click();

 //cy.xpath("(//div[@class='social-media']//a)[1]").invoke('removeAttr','target').click();
 //cy.wait(3000);
 //cy.url().should('include','https://www.facebook.com/tractorjunction/');
 //cy.xpath("(//span[@Class='command-message-text'])[10]").click();
// cy.url().should('include','https://www.facebook.com/tractorjunction/');
 
 //cy.go('back'); 
/*
 cy.get('[href="https://www.instagram.com/tractor_junction/"] > .filter-img').invoke('removeAttr','target').click();
 cy.wait(2000);
 cy.url().should('include','https://www.instagram.com/tractor_junction/');
 cy.go('back'); 

 cy.get('[href="https://www.linkedin.com/company/tractorjunction/?originalSubdomain=in"] > .filter-img').invoke('removeAttr','target').click();
 cy.wait(2000);
 cy.url().should('include','https://www.linkedin.com/company/tractorjunction/?originalSubdomain=in');
 cy.go('back'); 

 cy.get('[href="https://twitter.com/tractorjunction"] > .filter-img').invoke('removeAttr','target').click();
 cy.wait(2000);
 cy.url().should('include','https://twitter.com/tractorjunction');
 cy.go('back'); 

 cy.get('[href="https://www.youtube.com/c/TractorJunction"] > .filter-img').invoke('removeAttr','target').click();
 cy.wait(2000);
 cy.url().should('include','https://www.youtube.com/c/TractorJunction');
 cy.go('back'); 


*/

 /*it('gets the post', () => {
    
    getIframeBody().find('Reload Page').should('have.text', 'Reload Page').click()
    //cy.xpath("(//div[@class='xqui205']//div)[1]").click();
    
  }); */


 //cy.url().should('include','https://www.facebook.com/tractorjunction/');
 
 //iframe//cy.xpath("(//div[@class='xqui205']//div)[5]").click({force: true });



    });

});