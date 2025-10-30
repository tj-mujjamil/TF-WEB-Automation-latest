describe("Get latest offers_button", () => {
   it("passes", () => {
   cy.visit("https://bikes.tractorjunction.com/en/honda-scooters/activa-6g/activa-6g-h-smart");
   cy.wait(3000);
   cy.get('.ProductDescription_btn_container__YslA5 > .bike_button_btn_primary__AMdSz').click();
   cy.wait(3000);
   cy.get(':nth-child(1) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').clear();
   cy.get(':nth-child(1) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type("Testqa");
   cy.get(':nth-child(2) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type(9158593785);
   cy.get('.GenerateFormFields_city_search_outerMain__cFNe1 > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type("noida");
   cy.get('.GenerateFormFields_city_search_overlayMain__uPaj6 > ul > :nth-child(1)').click();
   cy.get('form > .bike_button_btn_primary__AMdSz').click();
   cy.wait(2000);
   cy.get('.bike_thankyoucard_thankyoucard_main__gHO_c > :nth-child(2)').should('exist');
   cy.wait(2000);
   cy.get('.modal_crossicon__3B2W8').click();
});

   it("bike-dealer-showrooms", () => {
   cy.wait(3000);
   cy.visit("https://bikes.tractorjunction.com/en/bike-dealer-showrooms/aprilia");
   cy.get(':nth-child(1) > .bike_dealer_DealerCardWrp__tpi9E > .bike_dealer_borderdBtn__mZfuK').click();
   cy.wait(3000);
   cy.get(':nth-child(1) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').clear();
   cy.get(':nth-child(1) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type("Testqa");
   cy.get(':nth-child(2) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type(9158593785);
   cy.get('.GenerateFormFields_city_search_outerMain__cFNe1 > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type("noida");
   cy.get('.GenerateFormFields_city_search_overlayMain__uPaj6 > ul > :nth-child(1)').click();
   cy.get('form > .bike_button_btn_primary__AMdSz').click();
   cy.wait(2000);
   cy.get('.bike_thankyoucard_thankyoucard_main__gHO_c > :nth-child(2)').should('exist');
   cy.wait(2000);
   cy.get('.modal_crossicon__3B2W8').click();
});

   it("Get On Road price _Page", () => {
   cy.visit("https://bikes.tractorjunction.com/en/check-on-road-price-in-india");
   cy.wait(3000);
   cy.get(':nth-child(1) > .bike_select_select_main__PQuxT').select(3);
   cy.get(':nth-child(2) > .bike_select_select_main__PQuxT').select(1);
   cy.get('.bike_input_icon_input__8lgWo').type("noida");
   cy.wait(2000);
   cy.get('.GenerateFormFields_city_search_overlayMain__uPaj6 > ul > :nth-child(1)').click();
   cy.get(':nth-child(4) > .bike_input_input__UF6o_').clear();
   cy.get(':nth-child(4) > .bike_input_input__UF6o_').type("Testqa");
   cy.get(':nth-child(5) > .bike_input_input__UF6o_').type(9158593785);
   cy.get('.bike_button_btn_primary__AMdSz').click();
   cy.wait(2000);
   cy.get('.bike_thankyoucard_thankyoucard_main__gHO_c > :nth-child(2)').should('exist');
   cy.wait(2000);
   cy.get('.modal_crossicon__3B2W8').click();
});

   it("bike-loan_page", () => {
   cy.wait(3000);
   cy.visit("https://bikes.tractorjunction.com/en/bike-loan");
   cy.get(':nth-child(1) > .bike_select_select_main__PQuxT').select(2);
   cy.get(':nth-child(2) > .bike_select_select_main__PQuxT').select(1);
   cy.get(':nth-child(3) > .bike_select_select_main__PQuxT').select(1);
   cy.get(':nth-child(4) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').clear();
   cy.get(':nth-child(4) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type("Testqa");
   cy.get(':nth-child(5) > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type(9158593785);
   cy.get('.GenerateFormFields_city_search_outerMain__cFNe1 > .bike_input_icon_input_wrapper__FhGhQ > .bike_input_icon_input__8lgWo').type("Noida");
   cy.get('.GenerateFormFields_city_search_overlayMain__uPaj6 > ul > :nth-child(1)').click();
   cy.get('.bike_button_btn_primary__AMdSz').click();
   cy.wait(3000);
   cy.get('.bike_thankyoucard_thankyoucard_main__gHO_c > :nth-child(2)').should('exist');
   cy.wait(2000);
   cy.get('.modal_crossicon__3B2W8').click();
});
   it("bike-loan-emi-calculator", () => {
   cy.visit("https://bikes.tractorjunction.com/en/bike-loan-emi-calculator");
   cy.wait(3000);
   cy.get(':nth-child(1) > .bike_select_select_main__PQuxT').select(2);
   cy.get(':nth-child(2) > .bike_select_select_main__PQuxT').select(1);
   cy.get(':nth-child(3) > .bike_select_select_main__PQuxT').select(1);
   cy.get('.bike_button_btn_primary__AMdSz').click();
   cy.wait(3000);
   cy.get('.bike_loanemicalculator_loanemicalculator_inflex__AdVZ8 > .bike_button_btn_primary__AMdSz').click();
   
});
});










   /*
  
   */

   

