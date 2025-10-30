describe("template spec", () => {
    it('passes', () => {
   
   cy.visit("https://bikes.tractorjunction.com/");
   cy.wait(3000);
   //cy.get('#SubmitNo').click();
   cy.get('#brandsBybudget').select(3);
   cy.get('#budgets').select(2);
   cy.xpath("(//div[@id='nav-tabContent']//button)[1]").invoke('removeAttr','window.open(url, _blank)').click();
   //(https://bikes.tractorjunction.com/en/tvs-bikes?price=40000-60000)
   cy.go('back');
   //cy.xpath("(//button[text()='Search'])[1]").click();
   cy.wait(3000);
  // cy.go('back');
   
   


   

  // cy.xpath("(//div[@id='nav-tabContent']//button)[1]").then((e)=>{

// url=e.prop();
  // cy.visit('https://bikes.tractorjunction.com/en/hop-bikes?price=40000-60000');
  // })
   
 // cy.url().should('include','https://bikes.tractorjunction.com/en/hop-bikes?price=40000-60000');

  //cy.wait(3000);
 // cy.go('back');
  // correct url-https://bikes.tractorjunction.com/en/hop-bikes?price=40000-60000
 
   

  /* 
   cy.get('#getOnRoadPriceModalForm > .text-center > .linkclr').invoke('removeAttr','target').click();

 cy.url().should('include','https://bikes.tractorjunction.com/en/privacy-policy');
 cy.go('back');
  
  
  
  
  
  
  cy.visit("https://bikes.tractorjunction.com/");
   cy.wait(2000);
   cy.get('#nav-filter-used-truck').click();
   cy.get('#brandsByMileage').select(3);
   cy.get('#mileageList').select(2);
   cy.get('#filter-used-truck > .w-100').click();  
   
   cy.url().should('include','https://bikes.tractorjunction.com/en/komaki-bikes?mileage=40-60');
   */
  

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    });


});