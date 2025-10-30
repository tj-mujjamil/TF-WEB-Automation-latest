describe("Admin Panel", () => {
    it("passes", () => {
     cy.visit("https://www.tractorjunction.com/manage");
     cy.get('#mobile').type('hacker@gmail.com');
     cy.get('#password').type('QgZbP3%9Q9Ge');
     cy.get('#loginbtn').click();
     cy.wait(2000);
     cy.visit('https://www.tractorjunction.com/manage/request/all/OnRoad');
     cy.wait(2000);
     cy.get(':nth-child(2) > :nth-child(5) > .form-control').click();
     cy.get('.ranges > ul > .active').click();
     cy.get(':nth-child(2) > :nth-child(1) > .form-control').type(7303488620);
     cy.get('.col > .btn-primary').click();
     cy.get('.mt-0').should('exist');
     cy.get('#exportToExcel').click();
});
        it("finance", () => {
        cy.visit("https://www.tractorjunction.com/manage");
        cy.get('#mobile').type('hacker@gmail.com');
        cy.get('#password').type('QgZbP3%9Q9Ge');
        cy.get('#loginbtn').click();
        cy.visit("https://www.tractorjunction.com/manage/request/all/finance-new");
        cy.get(':nth-child(5) > .form-control').click();
        cy.get('.ranges > ul > .active').click();
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').type('testqa');
        cy.wait(2000);
        cy.get('.col > .btn-primary').click();
        cy.wait(2000);
        cy.get('.mt-0').should('exist');
        cy.get('#exportToExcel').click(); 
});
        it("dealer-enq", () => {
        cy.visit("https://www.tractorjunction.com/manage");
        cy.get('#mobile').type('hacker@gmail.com');
        cy.get('#password').type('QgZbP3%9Q9Ge');
        cy.get('#loginbtn').click();
        cy.visit("https://www.tractorjunction.com/manage/request/all/dealer-enq");
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').click();
        cy.get('.ranges > ul > .active').click();
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type(7303488620);
        cy.get(':nth-child(3) > .btn-primary').click();
        cy.get('.mt-0').should('exist');
        cy.get('#exportToExcel').click();
});
        it("krishe", () => {
        cy.visit("https://www.tractorjunction.com/manage");
        cy.get('#mobile').type('hacker@gmail.com');
        cy.get('#password').type('QgZbP3%9Q9Ge');
        cy.get('#loginbtn').click();
        cy.visit("https://www.tractorjunction.com/manage/krishe/all");
        cy.get('#pagename').type('testqa');
        cy.get(':nth-child(4) > .form-control').click();
        cy.get('.ranges > ul > .active').click();
        cy.get('[name="filterData"]').click();
        cy.get('.mt-0').should('exist');
        cy.get('#exportToExcel').click(); 
});
});

