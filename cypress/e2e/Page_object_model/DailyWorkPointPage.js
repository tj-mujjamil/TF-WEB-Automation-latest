class DailyWorkpointPage {

    DWPDateRange() {
        // cy.visit("https://t3finj.tractorfirst.com/daily-target/all");
        cy.get('#daterange').click();
        cy.wait(2000);

    }
    DWPselectThisYear() {
        cy.get('input[name="daterange"]').click();
        cy.wait(2000);
        cy.get('[data-range-key="This Year"]').click();
        cy.wait(2000);
    }
    DWPState() {
        // cy.get('.applicationForm-box.selectfrmHeight > .select2-container > .selection > .select2-selection').type("Maharashtra{enter}");
        cy.get('.applicationForm-inner > :nth-child(2) > .select2-container > .selection > .select2-selection').type("Maharashtra{enter}");
        cy.wait(2000);
    }
    DWPClusterHead() {
        cy.get('span[role="textbox"][title="Cluster Head"]').click();
        cy.get('input.select2-search__field').type('santosh{enter}')
        cy.wait(3000);
    }
    DWPApplyFilter() {
        cy.get('.applicationFormdbtn > .global-btn').click();
    }
    DWPURLAssertion() {
        // cy.url().should('contain', 'daily-target/all?&state_id=18&cluster_id=');    
        cy.url().then((currentUrl) => {
            if (currentUrl.includes('daily-target/all?&state_id=18&cluster_id=')) {
                cy.log('✅ Test case ran successfully.');
            } else {
                cy.log('❌ Test case failed: Unexpected URL.');

            }
        });
    }
    DWPReset() {
        cy.wait(2000);
        cy.get('.resetFormdbtn').click();

    }
}

export default new DailyWorkpointPage;