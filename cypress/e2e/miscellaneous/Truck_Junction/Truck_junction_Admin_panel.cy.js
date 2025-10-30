describe("Admin Panel", () => {
    it("newtruckleads", () => {
        cy.visit("https://trucks.tractorjunction.com/en/manage");
        cy.wait(2000);
        cy.get('#user_id').type('hacker@gmail.com');
        cy.get('#password').type('QgZbP3%9Q9Ge');
        cy.get('#LoginSubmit').click();
        cy.wait(5000);
        cy.visit('https://trucks.tractorjunction.com/en/manage/newtruckleads');
        cy.get('#daterange').click();
        cy.get('.ranges > ul > .active').click();
        cy.wait(2000);
        cy.get(':nth-child(4) > .form-control').type('7303488620');
        cy.get('.col > .btn-primary').click();
        cy.get('.mt-0').should('exist');
        cy.get('#exportToExcel').click(('pageLoadTimeout', 70000));
    });
        it("newbusleads", () => {
        cy.visit("https://trucks.tractorjunction.com/en/manage");
        cy.wait(2000);
        cy.get('#user_id').type('hacker@gmail.com');
        cy.get('#password').type('QgZbP3%9Q9Ge');
        cy.get('#LoginSubmit').click();
        cy.wait(5000);
        cy.visit("https://trucks.tractorjunction.com/en/manage/newbusleads");
        cy.get('#daterange').click();
        cy.get('.ranges > ul > .active').click();
        cy.wait(2000);
        cy.get(':nth-child(4) > .form-control').type('7303488620');
        cy.get('.col > .btn-primary').click();
        cy.get('.mt-0').should('exist');
        cy.get('#exportToExcel').click();
    });
        it("dealerleads", () => {
        cy.visit("https://trucks.tractorjunction.com/en/manage");
        cy.wait(2000);
        cy.get('#user_id').type('hacker@gmail.com');
        cy.get('#password').type('QgZbP3%9Q9Ge');
        cy.get('#LoginSubmit').click();
        cy.wait(5000);
        cy.visit("https://trucks.tractorjunction.com/en/manage/dealerleads/all");
        cy.get('#daterange').click();
        cy.get('.ranges > ul > .active').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .form-control').type('7303488620');
        cy.get('.col > .btn-primary').click();
        cy.get('.mt-0').should('exist');
        cy.get('#exportToExcel').click();
    });
        it("finance", () => {
        cy.visit("https://trucks.tractorjunction.com/en/manage");
        cy.wait(2000);
        cy.get('#user_id').type('hacker@gmail.com');
        cy.get('#password').type('QgZbP3%9Q9Ge');
        cy.get('#LoginSubmit').click();
        cy.wait(5000);
        cy.visit("https://trucks.tractorjunction.com/en/manage/finance/all");
        cy.get('#daterange').click();
        cy.get('.ranges > ul > .active').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .form-control').type('7303488620');
        cy.get('.col > .btn-primary').click();
        cy.get('.mt-0').should('exist');
        cy.get('#exportToExcel').click();
    });

});





