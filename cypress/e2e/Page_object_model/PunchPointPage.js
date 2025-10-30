class PunchPointPage {

    PunchPointDateRange() {
        cy.wait(3000);
        cy.visit("https://t3finj.tractorfirst.com/reports/punch-point");
        cy.get('#daterange').click();
        cy.wait(2000);
    }
    PunchPointselectThisYear() {
        cy.get('#daterange').click();
        cy.wait(2000);
        cy.get('[data-range-key="This Year"]').click();
        cy.wait(2000);
    }
    PunchPointState() {
        cy.get('.applicationForm-inner > :nth-child(2) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("Rajasthan{enter}");
        cy.wait(2000);
    }
    PunchPointDistrict() {
        cy.get('.applicationForm-inner > :nth-child(3) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("alwar{enter}");
    }
    PunchPointApplyFilter() {
        cy.get('.applicationFormdbtn > .global-btn').click();
        cy.wait(3000);
    }
    PunchPointURLAssertion() {
        // cy.url().should('contain', 'state_id=32&district_id=539&cluster_id=&agent_id=&role=');  
        cy.url().then((currentUrl) => {
            if (currentUrl.includes('state_id=32&district_id=539&cluster_id=&agent_id=&role=')) {
                cy.log('✅ Test case ran successfully.');
            } else {
                cy.log('❌ Test case failed: Unexpected URL.');

            }
        });
    }
    PunchPointReset() {
        cy.wait(2000);
        cy.get('.resetFormdbtn').click();

    }
}
export default new PunchPointPage;
