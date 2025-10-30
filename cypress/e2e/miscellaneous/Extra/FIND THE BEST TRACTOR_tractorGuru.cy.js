describe("template spec", () => {
    it("passes", () => {

 cy.visit("https://tractorguru.in/");
 cy.get('#txtBrand').select(3);
 cy.get('#txtHp').select(2);
 cy.get('#txtPrice').select(2);
 cy.get('#searchFrm > :nth-child(3) > .btn').click();
 cy.go('back');
 cy.wait(3000);

 //cy.get('.breadcrumb > :nth-child(1) > a').click();
 cy.get('#nav-usedFilter-tab').click();
 cy.get('#txtBrand1').select(3);
 cy.get('#txtHp1').select(2);
 cy.get('#txtPrice1').select(3);
 cy.get('#searchFrm1 > :nth-child(3) > .btn').click();
 cy.wait(3000);
 cy.go('back');









    });

});
