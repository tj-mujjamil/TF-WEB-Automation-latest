describe("Finj Filter", () => {
    it("passes", () => {

    cy.visit("https://t3finj.tractorfirst.com/");
    cy.get('.login-btn').click();
    cy.get('.step-2 > .welcome-box-two > .pb-1 > .form-control').type(8005566027);
    cy.get('.step-2 > .welcome-box-two > .global-btn').click();
    cy.wait(2000);
    cy.get('.first-otp-input').type(1);
    cy.get('.mb-2 > :nth-child(2)').type(2);
    cy.get('.mb-2 > :nth-child(3)').type(3);
    cy.get('.mb-2 > :nth-child(4)').type(4);
    cy.get('.mb-2 > :nth-child(5)').type(5);
    cy.get('.mb-2 > :nth-child(6)').type(6);
    cy.get('.step-3 > .welcome-box-two > .global-btn').click();

    //Dashboard 
    cy.get('#daterange').click();
    cy.get('[data-range-key="This Year"]').click();
    cy.get('.applicationFormdbtn > .global-btn').click();
    cy.wait(2000);
    cy.get('.applicationForm-inner > :nth-child(2) > .select2-container > .selection > .select2-selection').click();
    cy.wait(3000);
    cy.get('#select2-shSelect-result-qqdb-337').click();
    cy.wait(2000);
    cy.get('#select2-clusterSelect-result-a0rm-385').click();
    cy.wait(2000);
    cy.get('#select2-agent_id-29-result-os6n-385').click();
    cy.wait(2000);
    cy.get('.applicationFormdbtn > .global-btn').click();
    cy.url().should('eq', 'https://t3finj.tractorfirst.com/?daterange=2024-01-01%2B2024-07-30&sh_id=&cluster_id=&agent_id=');


        
    });

});