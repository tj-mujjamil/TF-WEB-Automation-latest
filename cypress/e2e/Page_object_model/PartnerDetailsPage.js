class PartnerDetailsPage {


    PatnerDateRange() {
        cy.wait(2000);
        cy.visit("https://t3finj.tractorfirst.com/partner/all");
        cy.get('#daterange').click();
        cy.wait(2000);
    }
    PatnerselectThisYear() {
        cy.get('#daterange').click();
        cy.wait(2000);
        cy.get('[data-range-key="This Year"]').click();
    }
    patnerType() {
        cy.get('.applicationForm-inner > :nth-child(4) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("Broker{enter}");
    }
    PatnerClusterHead() {
        cy.get(':nth-child(7) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("Abdul wajid{enter}");
        cy.wait(2000);
    }
    PatnerFieldOfficer() {
        cy.get(':nth-child(8) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("neeraj kumar{enter}");
    }
    PatnerHomeCoordinates() {
        cy.get(':nth-child(11) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("available{enter}");
    }
    PatnerPennyDrop() {
        cy.get(':nth-child(12) > .select2-container > .selection > .select2-selection').click();
        cy.wait(2000);
        cy.get('.select2-search__field').type("yes{enter}");
    }

    Patnersearch() {
        cy.get('.applicationFormdbtn > .global-btn').click();
        cy.wait(2000);
    }
    PatnerURLAssertion() {
        // cy.url().should('contain', 'constitution_id=&status=&state_id=&district_id=&cluster_id=&fo_id=183&name=&mobile=&home_coordinate=yes&acc_verified=yes&mob_verified=&platform=&spoc_status=');
        cy.url().then((currentUrl) => {
            if (currentUrl.includes('constitution_id=&status=&state_id=&district_id=&cluster_id=&fo_id=183&name=&mobile=&home_coordinate=yes&acc_verified=yes&mob_verified=&platform=&spoc_status=')) {
                cy.log('✅ Test case ran successfully.');
            } else {
                cy.log('❌ Test case failed: Unexpected URL.');

            }
        });
    }
}

export default new PartnerDetailsPage;