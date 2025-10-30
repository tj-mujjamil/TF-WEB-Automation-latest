describe("template spec", () => {
    it("passes", () => {
     // cy.visit("https://trucks.tractorjunction.com/?Amp=1");
      cy.visit("https://shift-truck.tractorjunction.com/");
      cy.get('.loginBtn > .nav-link > .boldfont').click();
     // cy.get('.new-btn').click();
      cy.get('#nav-register').click();
      cy.get('#name').type("RAM");
      cy.get('#mobile').type(9999999999);
      cy.get('#email').type("ABC@123");
      cy.get('#state_id').select(5);
      cy.get('#dist_id').select(2);
      cy.get('#tehsil_id').select(1);
      cy.get('#RegisterSubmit').click();

      cy.get('.navbar-brand > img').click();
      cy.get('#nav-truck-popular').click();
      cy.get('#truck-popular > .newTruckBlock > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
      cy.get('#name').type("test QA");
      cy.get('#mobile').type(8888888888);
      cy.get('#state_id').select(7);
      cy.get('#dist_id').select(3);
      cy.get('.check-box-wrp > :nth-child(1)').click();
      cy.get('#SubmitOnroadPriceForm').click();
      cy.wait(4000);
      cy.get('#getBusinessOwner > .modal-dialog > .modal-content > .close > img').click();
      cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();

      
      cy.get('#nav-truck-latest').click();
      cy.wait(3000);
      cy.get('#truck-latest > .newTruckBlock > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
      
      cy.get('#name').type("SHAM");
      cy.get('#mobile').type(9158593788);
      cy.get('#state_id').select(4);
      cy.get('#dist_id').select(5);
      cy.get('.check-box-wrp > :nth-child(2)').click();
      cy.get('#SubmitOnroadPriceForm').click();
      cy.wait(4000);
      cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();

      cy.wait(4000);
      cy.get('#nav-truck-upcoming').click();
      cy.get('#truck-upcoming > .newTruckBlock > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
      cy.get('#name').type("mahesh");
      cy.get('#mobile').type(9082539294);
      cy.get('#state_id').select(4);
      cy.get('#dist_id').select(2);
      cy.get('.check-box-wrp > :nth-child(3)').click();
      cy.get('#SubmitOnroadPriceForm').click();
      cy.wait(3000);
      cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();

       
      cy.get('[href="https://shift-truck.tractorjunction.com/en/onroadprice"]').click();
      cy.get('#onroadPriceForm > .row > :nth-child(1) > .form-control').type("ABCDE");
      cy.get('#onroadPriceForm > .row > :nth-child(2) > .form-control').type(9063739192);
      cy.get('#onroadPriceForm > .row > :nth-child(2) > .form-control').type("QRST");
      cy.get('#onroadPriceForm > .row > :nth-child(3) > .form-control').select(3);
      cy.get('#onroadPriceForm > .row > :nth-child(4) > .form-control').select(4);
      cy.get(':nth-child(5) > .form-control').select(2);
      cy.get(':nth-child(6) > .form-control').select(2);
      cy.get('#onroadPriceForm > .row > .check-group > .check-box-wrp > :nth-child(4) > .checkmark').click();
      cy.get('#SubmitOnroadPrice').click();


      cy.xpath("(//a[text()='Terms and Conditions'])[1]").click();
      
      //cy.get('#onroadPriceForm > .text-center > .linkclr').click();










    });

});

    


       

    



     //cy.get('#nav-truck-latest')

      //cy.get('#Name').type("Test QA");
      //cy.get('#phone').type(8888888888);
     // cy.get('.input-box-inner > #cityName').type("pune");
      //cy.get('.check-box-wrp > :nth-child(4)').click();
    //  cy.get('#SubmitOnroadPriceForm').click();      
      


      
     // cy.xpath("//input[@placeholder='Select your location']").click();



 
     
     
     
     
     
      // cy.xpath("(//a[text()='Get On Road Price'])[2])").click();
   