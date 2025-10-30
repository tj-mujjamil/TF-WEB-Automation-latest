describe("template spec", () => {
    it("passes", () => {

 cy.visit("https://www.tractorjunction.com/");
 cy.wait(2000);

 cy.get('.navbar-nav > :nth-child(5) > .nav-link').click();
 cy.xpath("//a[@onclick='selectVehicle(1)']").click();
 cy.xpath("//label[@id='label1']").click();
 cy.wait(3000);
 cy.xpath("(//label[@class='checkbox-custom compare_modelhide'])[3]").click();
 cy.wait(3000);
 cy.get('#brandModal > .modal-dialog > .modal-content > .modal-form-wrap > .brand-header > h3 > span').click();
 
 cy.get('.carCompare-inner2 > .common-compare > .bike-select').click();
 cy.wait(2000);
 cy.xpath("//label[@id='label0']").click();
 cy.wait(3000);
 cy.xpath("(//label[@class='checkbox-custom compare_modelhide'])[2]").click();
 cy.wait(3000);
 cy.get('.comparebtn-content > .fillBtn').click();
 cy.wait(2000);
 cy.url().should('include','https://www.tractorjunction.com/compare-tractors/swaraj+744-fe-vs-mahindra+475-di-xp-plus/');
 cy.get('.navbar-brand > img').click(); 




});

});
//cy.get('#label2').type('Eicher{enter}') 
//cy.get('#vehicleModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(4)').type('Euro 439{enter}') 
//cy.get('.carCompare-inner2 > .common-compare > .bike-select').click();

/* 
 
 cy.get('#brandModal > .modal-dialog > .modal-content > .modal-form-wrap > .brand-header > h3 > span').type('mahindra{enter}') 

 cy.get('#label8').type('swaraj{enter}')
 cy.wait(2000);
 cy.get('#vehicleModal > .modal-dialog > .modal-content > .accordionBlock-body > :nth-child(6)').type('200 DI{enter}')
 cy.wait(2000);
 cy.get('#brandModal > .modal-dialog > .modal-content > .modal-form-wrap > .brand-header > h3 > span').type('john deere{enter}')
 
 */