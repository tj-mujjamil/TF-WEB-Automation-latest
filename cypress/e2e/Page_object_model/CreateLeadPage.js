import 'cypress-file-upload';

class CreateLeadPage {

    fillStep1Details() {
        cy.wait(3000);
        cy.visit("https://t3finj.tractorfirst.com/lead/create");
        cy.get('.step-1 > :nth-child(2) > .form-control').type("testqa ");
        cy.get('.step-1 > .mt-1 > .form-control').type("8787878787");

        // State
        cy.get('.step-1 > .state-section > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("rajasthan{enter}");

        // District
        cy.get('.step-1 > :nth-child(5) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("alwar{enter}");

        // Wait for tehsil dropdown to load options
        cy.get('.step-1 > :nth-child(6) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-results__option').should('not.contain', 'No results found');
        cy.get('.select2-search__field').type("alwar{enter}");

        // Sourcing
        cy.get('.step-1 > :nth-child(7) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("self_sourcing{enter}");

        cy.get('.step-1 > .d-flex > .global-btn').click();
    }

    fillStep2Details() {
        Cypress.Commands.add('generateUniqueRegNo', () => {
            const prefix = 'UP12LZ';
            const randomNumber = Math.floor(1000 + Math.random() * 9000);
            const uniqueRegNo = `${prefix}${randomNumber}`;

            return cy.wrap(uniqueRegNo).as('regNo');
        });


    }

    fillStep3Details() {
        cy.get(':nth-child(4) > #dropdownYear').select('Tractor');
        cy.wait(3000);
        cy.get('.step-2 > :nth-child(5) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("Mahindra{enter}");
        cy.wait(3000);
        cy.get('.step-2 > :nth-child(6) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("235 DI{enter}");
        cy.wait(3000);
        cy.get('.step-2 > :nth-child(7) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("2022{enter}");
        cy.get('.step-2 > .flex-column > .d-flex > .btn-plateform').click();
        cy.wait(3000);
        cy.get('#panCardInput').type("DLQPM6732K{enter}");
        cy.wait(3000);
        cy.get('#panFileInput').attachFile('Truck_1.png');
        //cy.get('input[type="file"]').should('have.value').and('include', 'Truck_1.png');
        cy.get('.step-3 > .flex-column > .d-flex > .btn-plateform').click();
    }

    fillStep4Details() {
        cy.get(':nth-child(5) > #floatingTextarea').type("This is a test comment");
        cy.get('.step-4 > :nth-child(6) > .select2-container > .selection > .select2-selection').click();
        cy.wait(2000);
        cy.get('.select2-search__field').type("good{enter}");
        cy.get('.step-4 > :nth-child(7) > .select2-container > .selection > .select2-selection').click();
        cy.wait(2000);
        cy.get('.select2-search__field').type("yes{enter}");
        cy.get(':nth-child(4) > .gstformLoan-box-radio-in > .gstformLoan-box-radio > :nth-child(2) > .checkmark').click();
        cy.get(':nth-child(3) > .gstformLoan-box-radio-in > .gstformLoan-box-radio > :nth-child(2) > .checkmark').click();
        cy.wait(3000);
        cy.get('.step-4 > .flex-column > .d-flex > .btn-plateform').click();

    }
}

export default new CreateLeadPage;