describe("template spec", () => {
   /* it("passes", () => {

        cy.visit("https://trucks.tractorjunction.com/");
        cy.wait(2000);
        //cy.visit("https://bikes.tractorjunction.com/en/compare-bikes");
       // cy.clearAllCookies();
        cy.wait(3000);
       // cy.get('.active > .img-fluid').should('have.class="img-fluid"', 'expected.class="img-fluid"');
      
        cy.get('.active > .img-fluid').invoke('html').then(htmlContent => {
            cy.log(htmlContent);
            cy.get('.active > .img-fluid').debug();
            cy.should('have.img-fluid', 'expected.img-fluid');
          });
      
      
        //  cy.get('.ather-tracking').should('have.ather-tracking', 'expected.ather-tracking')
//cy.get().should('have.class','expected.class');


       // cy.get('.ather-tracking').should(cy.get('.ather-tracking'));

      //  cy.visit("https://bikes.tractorjunction.com/en/tvs-bikes/raider-125")



        
    });*/

    it("Product detail page", () => {
      cy.visit("https://bikes.tractorjunction.com/");
      cy.wait(3000);
      cy.get(':nth-child(1) > :nth-child(3) > .slick-slider > .slick-list > .slick-track > .slick-current > :nth-child(1) > .bike_contentcard_contentCard__l3Ayy > .bike_contentcard_contentInnerBox__3dP9a > :nth-child(1) > .bike_contentcard_bikeCardimage__TBcox > .bike_contentcard_image___GV0v').click();
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='1920']").should("exist");
      cy.xpath("//img[@height='550']").should("exist");
    });
  
  it("Comapre page", () => {
      cy.visit("https://bikes.tractorjunction.com/en/compare-bikes");
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='1920']").should("exist");
      cy.xpath("//img[@height='550']").should("exist");
    });

    it("Compare Result", () => {
      cy.visit("https://bikes.tractorjunction.com/en/compare-bikes/hero-splendor-plus-xtec-i3s-drum-self-alloy-vs-tvs-radeon-digital-disc");
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='1920']").should("exist");
      cy.xpath("//img[@height='550']").should("exist");
    });

    it("All Brands", () => {
      cy.visit("https://bikes.tractorjunction.com/en/bike-brands");
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='1920']").should("exist");
      cy.xpath("//img[@height='550']").should("exist");
    });

    it("News Detail", () => {
      cy.visit("https://bikes.tractorjunction.com/en/news/hero-mavrick-440-prices-announced-will-range-between-rs-1.99-and-rs-2.24-lakh");
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='1920']").should("exist");
      cy.xpath("//img[@height='550']").should("exist");
    });

    it("Product Listing", () => {
      cy.visit("https://bikes.tractorjunction.com/en/latest-bikes");
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='900']").should("exist");
      cy.xpath("//img[@height='150']").should("exist");
    });

    it("Bike Loan", () => {
      cy.visit("https://bikes.tractorjunction.com/en/bike-loan");
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='1920']").should("exist");
      cy.xpath("//img[@height='550']").should("exist");
    });

    it("EMI Calculator", () => {
      cy.visit("https://bikes.tractorjunction.com/en/bike-loan-emi-calculator");
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='19201']").should("exist");
      cy.xpath("//img[@height='550']").should("exist");
    });
  
    it("Dealer Landing", () => {
      cy.visit("https://bikes.tractorjunction.com/en/bike-dealer-showrooms");
      cy.wait(3000);
      cy.xpath("//img[@title='Ather Banner']").should("exist");
      cy.xpath("//img[@width='19201']").should("exist");
      cy.xpath("//img[@height='550']").should("exist");
    });
  
  });