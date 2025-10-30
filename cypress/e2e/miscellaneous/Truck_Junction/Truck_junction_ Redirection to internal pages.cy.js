describe("Header", () => {
  /* it("redirection_brochure", () => {
    cy.visit("https://trucks.tractorjunction.com/en/tata-truck/yodha-2-0");
    
    cy.xpath("(//a[@target='_blank'])[13]").invoke('removeAttr','target').click();
    cy.url().should('include','https://trucks.tractorjunction.com/en/tata-truck/yodha-2-0/brochure');
    cy.go('back'); 
    });*/
  it("redirection_specifications", () => {
    cy.visit("https://trucks.tractorjunction.com/en/tata-truck/yodha-2-0");
    // cy.get('button').should('not.have.attr', 'disabled');

    cy.xpath("(//span[@class='slideDown-link smoothScroll'])[3]").should('not.have.attr', 'disabled').click();
    cy.url().should('include', 'https://trucks.tractorjunction.com/en/tata-truck/yodha-2-0/specifications');
    cy.go('back');
  });



});