describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.tractorjunction.com/");
    cy.get('.new-btn').click();
    cy.get('.page-banner-content > .mb-0 > a').click();
    cy.get('#name').type("Ram");
    cy.get('#mobileNo').type(9999999999);
    cy.get('#email').type("abc@123");
    cy.get('#state_id').select(7);
    cy.get('#dist_id').select(8);
    cy.get('#tehsil_id').select(5)
    cy.get('#register-form > .form-submit-btn').click();
   
    

   // cy.get(':nth-child(2) > .form-group > .form-control').type("abc");
   /*if("cy.get('.col-xs-11')" ){
    "status code =404" ;
  }
  else{
    "status code =200"
  }*/
  
  
  
  
  });
});