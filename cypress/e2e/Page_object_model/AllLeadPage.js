
class AllLeadPage {

    openDateRange() {
        cy.wait(3000);
        cy.visit("https://t3finj.tractorfirst.com/lead/all");
        cy.wait(3000);
        cy.get('.bg-transparent').click();
        cy.wait(2000);
        cy.get('#daterange').click();

    }

    selectLastMonthRange() {
        cy.get('#daterange').click();
        cy.wait(2000);
        cy.get('[data-range-key="Last Month"]').click();
    }

    selectClusterHead() {
        cy.get('.adv-filter-height > :nth-child(3) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("anjali cluster{enter}");
        cy.wait(2000);
    }

    selectFieldOfficer() {
        cy.get('.adv-filter-height > :nth-child(4) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("abhijeet swarnkar{enter}");
        cy.wait(2000);
    }

    selectVehicleType() {
        cy.get(':nth-child(7) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("Tractor{enter}");
        cy.wait(2000);
    }

    enterName() {
        cy.get('#nameInput').type("Rampal");
        cy.wait(2000);
    }

    enterRegistrationNumber() {
        cy.get('.adv-filter-height > :nth-child(6) > .form-control').type("UP22AL5830");
        cy.wait(2000);
    }

    selectSource() {
        cy.get(':nth-child(10) .select2-selection').click();
        cy.get('.select2-search__field').type("Direct{enter}");
        cy.wait(2000);
    }

    selectLenderName() {
        cy.get(':nth-child(11) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("SK Finance{enter}");
        cy.wait(2000);
    }

    selectState() {
        cy.get(':nth-child(12) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("uttar pradesh{enter}");
        cy.wait(2000);
    }

    selectDistrict() {
        cy.get(':nth-child(14) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("rampur{enter}");
        cy.wait(2000);
    }

    selectRCLimit() {
        cy.get(':nth-child(18) .select2-selection').click();
        cy.get('.select2-search__field').type("Yes{enter}");
        cy.wait(2000);
    }

    selectRCLimitPending() {
        cy.get(':nth-child(19) .select2-selection').click();
        cy.get('.select2-search__field').type("Yes{enter}");
        cy.wait(2000);
    }

    clickSearch() {
        cy.get('.adv-filter-height > .applicationFormdbtn > .global-btn').click();
        cy.wait(2000);
    }

    assertURL() {
        cy.url().then((currentUrl) => {
            if (currentUrl.includes('state_id=29&district_id=459&status=&appStatus=&payment_status=&payout_status=&user_status=2&centerstatus=Y&ops_rejected=&ops_rejected=&pdd_status=')) {
                cy.log('✅ Test case ran successfully.');
            } else {
                cy.log('❌ Test case failed: Unexpected URL.');
            }
        });
    }

    clickReset() {
        cy.wait(2000);
        cy.get('.card-header > .allApplicationBtn > .btn-reset').click();
    }
}

export default new AllLeadPage;
