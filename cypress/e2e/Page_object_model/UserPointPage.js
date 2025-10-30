class UserPointPage {

    UserPointDateRange() {
        cy.wait(3000);
        cy.visit("https://t3finj.tractorfirst.com/user/all");
        cy.get('#daterange').click();
        cy.wait(2000);
    }
    UserPointselectThisYear() {
        cy.get('#daterange').click();
        cy.wait(2000);
        cy.get('[data-range-key="This Year"]').click();
    }
    userPointLastLogin() {
        cy.get('.applicationForm-inner > :nth-child(2) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("last login{enter}");
        cy.wait(2000);
    }
    userPointName() {
        cy.get('#nameInput').type("Developer");
        cy.wait(2000);
    }
    userPointMobileNo() {
        cy.get('.applicationForm-inner > :nth-child(4) > .form-control').type("8005566027");
        cy.wait(2000);
    }
    userPointstate() {
        cy.get('.applicationForm-inner > :nth-child(5) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("Rajasthan{enter}");
        cy.wait(2000);
    }
    userPointDistrict() {
        cy.get('.applicationForm-inner > :nth-child(6) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("Alwar{enter}");
        cy.wait(2000);
    }
    userPointStatus() {
        cy.get('.applicationForm-inner > :nth-child(7) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("Active{enter}");
        cy.wait(2000);
    }
    userPointRole() {
        cy.get('.applicationForm-inner > :nth-child(8) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("Super_Admin{enter}");
        cy.wait(2000);
    }
    userPointHomeCoordinate() {
        cy.get('.applicationForm-inner > :nth-child(9) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("Not Available{enter}");
        cy.wait(2000);
    }
    userpointApplyFilter() {
        cy.get('.applicationFormdbtn > .global-btn').click();
    }
    userpointURLAssertion() {
        //   cy.url().should('contain', 'datetype=last_login&name=Developer&mobile=8005566027&state_id=32&district_id=539&status=1&role=Super_Admin&home_coordinate=no');  
        cy.url().then((currentUrl) => {
            if (currentUrl.includes('state_id=32&district_id=539&status=1&role=Super_Admin&home_coordinate=no')) {
                cy.log('✅ Test case ran successfully.');
            } else {
                cy.log('❌ Test case failed: Unexpected URL.');

            }
        });
    }
    userpointReset() {
        cy.wait(2000);
        cy.get('.resetFormdbtn').click();

    }
}
export default new UserPointPage;