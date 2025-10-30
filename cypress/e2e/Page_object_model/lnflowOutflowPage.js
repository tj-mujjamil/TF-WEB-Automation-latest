class InflowOutflowPage {


    InflowProcess1() {
        cy.wait(3000);
        cy.visit("https://t3finj.tractorfirst.com/payments/all");
        cy.get('[href="https://t3finj.tractorfirst.com/payments/all"] > .d-flex > .tabtitle').click();

        cy.get('.applicationForm-inner > :nth-child(11) > .form-control').type("TH98IK9098");
        cy.get('.applicationFormdbtn > .global-btn').click();
    }
    InflowProcess2() {
        cy.get('.threedot').click();
        cy.get(':nth-child(1) > .threedot-btn > .threedotText').click();
        cy.wait(3000);
        cy.clearLocalStorage();
        cy.get('.applicationForm-edit-box > :nth-child(1) > .form-control').type(45645645535);
        cy.get('.amountBlock > .form-control').type(50000);
        cy.wait(3000);
        cy.get('input.form-control.date-valid[name="date"]').should('exist');

        cy.get('input.form-control.date-valid[name="date"]').click();
        cy.get('.ui-datepicker-calendar td:not(.ui-datepicker-other-month)').contains('1').click();
        cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click();

        cy.get('#payment-slipFileInput').attachFile('Truck_1.png');
        cy.get('#floatingTextarea').type("okokokokokokok");
        cy.get('.applicationForm-edit-box > .d-flex > .global-btn').click();

    }
    //Outflow 
}
export default new InflowOutflowPage;








