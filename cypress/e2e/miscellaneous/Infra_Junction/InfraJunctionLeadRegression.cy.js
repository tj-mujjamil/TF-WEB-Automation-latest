describe("template spec", () => {
    it("passes", () => {
    cy.request({url: 'https://infra.tractorjunction.com/', failOnStatusCode: false});
   // cy.visit("https://infra.tractorjunction.com/");
    cy.wait(3000);
    cy.request({url:"https://infra.tractorjunction.com/en/jcb-construction-equipments", failOnStatusCode: false});
   // cy.visit("https://infra.tractorjunction.com/en/jcb-construction-equipments");
    cy.wait(3000);
    cy.get('.MoreBikes > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
    cy.get('#onroadName').clear();
    cy.wait(3000);
    cy.get('#onroadName').type("Testqa")
    cy.wait(3000);
    cy.get('#onroadMobile').type("9158593785");
    cy.get('#getOnRoadPriceModalForm > .row > .cityModalCtn > .inpt-wrp > .form-control').type("Noida");
    cy.get('#getOnRoadPriceModalForm > .row > .cityModalCtn > .inpt-wrp > #search-main-city > .search-module-inner > .serch-header-list > ul > :nth-child(1) > a').click();
    cy.get('#submitGetOnRoadPriceModal').click();
    cy.wait(4000);
    cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();

    cy.wait(3000);
    cy.visit("https://infra.tractorjunction.com/en/on-road-price");
    cy.get('#category_id').select(2);
    cy.wait(3000);
    cy.get('#brand_id').select(3);
    cy.wait(3000);
    cy.get('#model_id').select(2);
    cy.wait(3000);
    cy.get('#name').clear();
    cy.get('#name').type("Testqa");
    cy.wait(2000);
    cy.get('.form-group > #mobile').type("9158593785");
    cy.wait(3000);
    cy.get('#state_id').select(2);
    cy.get('#dist_id').select(2);
    cy.get('#SubmitOnroadPrice').click();
    cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click();
    
    cy.wait(3000);
    cy.visit("https://infra.tractorjunction.com/en/dealers");
    cy.get('#category').select(3);
    cy.wait(3000);
    cy.get('#brands').select(3);
    cy.wait(3000);
    cy.get('#selectedState').type('Delhi{enter}');
    cy.wait(3000);
    cy.get('#findDealers').click();
    cy.visit("https://infra.tractorjunction.com/en/dealers/motor-grader/tata-hitachi/delhi");
    cy.get('.borderBtn').click();
    cy.get('#dealerName').clear();
    cy.wait(2000);
    cy.get('#dealerName').type("Testqa");
    cy.wait(3000);
    cy.get('#dealerMobile').type(9158593785);
    cy.get('#talkToDealerModalForm > .row > .cityModalCtn > .inpt-wrp > .form-control').type("noida");
    cy.get('#talkToDealerModalForm > .row > .cityModalCtn > .inpt-wrp > #search-main-city > .search-module-inner > .serch-header-list > ul > :nth-child(2) > a').click();
    cy.wait(2000);
    cy.get('#submitTalkToDealerModal').click();

    cy.visit("https://infra.tractorjunction.com/en/construction-equipment-loan");
    cy.get('#category_id').select(2);
    cy.wait(2000);
    cy.get('#brand_id').select(3);
    cy.wait(2000);
    cy.get('#model_id').select(3);
    cy.wait(2000);
    cy.get('#nextBtn').click();
    
    cy.get('#loanName').clear();
    cy.wait(3000);
    cy.get('#loanName').type("Testqa");
    cy.wait(3000);
    cy.get('#loanMobile').type(9158593785);
    cy.get('#loanCity').type("noida");
    cy.get('.cityCtn > #search-main-city > .search-module-inner > .serch-header-list > ul > :nth-child(1) > a').click();
    cy.get('#nextBtn').click();



    /*cy.visit("https://infra.tractorjunction.com/en/jcb-construction-equipments");
    cy.get('.MoreBikes > :nth-child(1) > .newTruckBlock-inner > .newTruckBlock-content > .borderBtn').click();
    cy.get('#onroadName').clear();
    cy.wait(2000);
    cy.get('#onroadName').type("Testqa");
    cy.wait(2000);
    cy.get('#onroadMobile').type(9158593785);
    cy.get('#getOnRoadPriceModalForm > .row > .cityModalCtn > .inpt-wrp > .form-control').type("Noida");
    cy.get('#getOnRoadPriceModalForm > .row > .cityModalCtn > .inpt-wrp > #search-main-city > .search-module-inner > .serch-header-list > ul > :nth-child(1) > a').click();
    cy.get('#submitGetOnRoadPriceModal').click();
    cy.get('#thanksPopup > .modal-dialog > .modal-content > .close > img').click(); */


  



  




    });

});