import 'cypress-file-upload';
class LeadEndToEndPage {

  StepA() {
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
  StepB() {
    cy.get('#loan_amount_input').type("500000");
    cy.wait(2000);

 
    // Cypress.Commands.add('generateUniqueRegNo', () => {
    //   const prefix = 'UP12LZ';
    //   const randomNumber = Math.floor(1000 + Math.random() * 9000);
    //   const uniqueRegNo = `${prefix}${randomNumber}`;

    //   return cy.wrap(uniqueRegNo).as('regNo');
    // });
  }
  StepC() {
    cy.wait(3000);
    cy.get(':nth-child(5) > #dropdownYear').select('Tractor')
   // cy.get(':nth-child(5) > #dropdownYear').click().select('Tractor');
    cy.wait(3000);
    cy.get('.step-2 > :nth-child(6) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("Mahindra{enter}");
    cy.wait(3000);
    cy.get('.step-2 > :nth-child(7) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("235 DI{enter}");
    cy.wait(3000);
    cy.get('.step-2 > :nth-child(8) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("2022{enter}");
    cy.get('.step-2 > .flex-column > .d-flex > .btn-plateform').click();
    cy.wait(3000);
    cy.get('#panCardInput').type("DLQPM6732K{enter}");
    cy.wait(3000);
    cy.get('#panFileInput').attachFile('Truck_1.png');
    //cy.get('input[type="file"]').should('have.value').and('include', 'Truck_1.png');
    cy.get('.step-3 > .flex-column > .d-flex > .btn-plateform').click();

  }
  StepD() {
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

  StepE_leadStatus() {
    cy.get('.threedot').click();
    cy.get(':nth-child(1) > .threedot-btn').click();
    cy.get('.applicationForm-edit-box > :nth-child(1) > .select2-container > .selection > .select2-selection').click();
    cy.wait(2000);
    cy.get('.select2-search__field').type("FI{enter}");
    cy.wait(2000);
    cy.get('#cibil_score_btn').click();
    cy.wait(2000);
    cy.get('.submitExperion').click();
    cy.wait(2000);
    cy.get('#experionCibil > .modal-dialog > .modal-content > .modal-header > .btn-close').click();
    cy.get('.noZindexshow > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("RBL Bank{enter}");
    cy.get('.applicationForm-edit-box > :nth-child(5) > .form-control').type("Test lender spoc name");
    cy.get('.applicationForm-edit-box > :nth-child(6) > .form-control').type("9999999999");
    cy.get('#cibil_score').type("750");
    cy.get('.gstformLoan-box-radio > :nth-child(1) > .checkmark').click();
    cy.get('.gstformLoan-box-radio-in > .plateformLoan > .select-btn-inner > .select-btn').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .checkbox-in > .checkbox-custom').click();
    cy.get('body').click(300, 300); // Clicks at coordinates (100, 100) in the body
    cy.get('#floatingTextarea').type("Test comment for lead status");
    cy.get('.applicationForm-edit-box > .mt-3 > .global-btn').click();

    //capture the status
    cy.get('table').contains('td', 'FI').should('exist')// or use a more specific selector for your table
      .then($cell => {
        const statusText = $cell.text();
        cy.log('Captured Status:', statusText); // logs the status
        // You can add further assertions if needed
        expect(statusText).to.eq('FI');
      });
  }
  StepFiToLogin() {
    cy.wait(3000);
    cy.get('.threedot').click();
    cy.get(':nth-child(1) > .threedot-btn').click();
    cy.get('.applicationForm-edit-box > :nth-child(1) > .select2-container > .selection > .select2-selection').click();
    cy.wait(2000);
    cy.get('.select2-search__field').type("login{enter}");
    cy.get('.applicationForm-edit-box > :nth-child(9) > .form-control').type("12345");
    cy.get(':nth-child(10) > .form-control').type("100000");
    cy.get('#floatingTextarea').type("FI To Login");
    cy.get('.applicationForm-edit-box > .mt-3 > .global-btn').click();
    cy.wait(3000);

    // cy.get('table').contains('td', 'FI').should('exist').then($cell => {
    //   const statusText = $cell.text();
    //   cy.log('Captured Status:', statusText);
    //   expect(statusText).to.eq('LOGIN');
    // });
  }

  StepLoginToOps() {
    cy.wait(3000);
    cy.get('.threedot').click();
    cy.get(':nth-child(1) > .threedot-btn').click();
    cy.get('.applicationForm-edit-box > :nth-child(1) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("ops check pending{enter}");
    cy.get('.d-new-wrap > :nth-child(2) > .form-control').type("1234556");
    cy.get('.d-new-wrap > :nth-child(3) > .form-control').type("1234556")
    cy.get('.widthfullchecked > .select-btn-inner > .select-btn').click();
    cy.get('.list-items > :nth-child(2)').click();

    //cy.get('.d-new-wrap > :nth-child(5) > .commonRadioBox-box-radio-in > .commonRadioBox-box-radio > :nth-child(1)').click();
    cy.get('body').click(300, 300);
    cy.get(':nth-child(6) > .commonRadioBox-box-radio-in > .commonRadioBox-box-radio > :nth-child(1)').click();
    cy.get('.d-new-wrap > .mt-3 > .global-btn').scrollIntoView().should('be.visible').click({ force: true });
    //cy.get('.not_required').scrollIntoView(2000).should('be.visible').click();
    cy.wait(3000);
    cy.get('.not_required').scrollIntoView().should('be.visible').click({ force: true });
    //cy.get('.d-new-wrap > .mt-3 > .global-btn').scrollIntoView().should('be.visible').click();

    cy.get('.d-new-wrap > .mt-3 > .global-btn').click();
    cy.wait(3000);
    cy.scrollTo(0, 3000);
    cy.get('.step-2 > .d-flex > .btn-plateform').scrollIntoView().should('be.visible').click({ force: true });
    // cy.get('table').contains('td', 'FI').should('exist').then($cell => {
    //   const statusText = $cell.text();
    //   cy.log('Captured Status:', statusText);
    //   cy.wait(5000);
    //   expect(statusText).to.eq('OPS CHECK PENDING');

    // });
  }

  stepsOpsToApproved() {
    cy.wait(5000);
    cy.get('.threedot').click();
    cy.get(':nth-child(1) > .threedot-btn').click();
    cy.wait(2000);
    cy.get('.applicationForm-edit-box > :nth-child(2) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("yes{enter}");
    cy.wait(2000);
    cy.get('.ops_lenderList > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("RBL Bank{enter}");
    cy.wait(2000);
    cy.get('.applicationForm-edit-box > :nth-child(4) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("not available{enter}");
    cy.wait(2000);
    cy.get('.applicationForm-edit-box > :nth-child(5) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("not required{enter}");
    cy.wait(2000);
    cy.get('.applicationForm-edit-box > :nth-child(6) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("yes{enter}");
    cy.wait(2000);
    cy.get(':nth-child(7) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("required{enter}");
    cy.wait(2000);
    cy.get(':nth-child(11) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("active{enter}");
    cy.wait(2000);
    cy.get(':nth-child(12) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("no{enter}");
    cy.wait(2000);
    cy.get(':nth-child(14) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("completed{enter}");
    cy.wait(2000);
    cy.get(':nth-child(15) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("no{enter}");
    cy.wait(2000);
    cy.get(':nth-child(16) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("yes{enter}");
    cy.wait(2000);
    cy.get(':nth-child(17) > .form-control').type("1000");
    cy.wait(2000);
    cy.get('#vahan-checkFileInput').attachFile('Truck_1.png');
    cy.wait(2000);
    cy.get('#floatingTextarea').type("Test comment for ops to approved");
    cy.wait(3000);
    cy.get('.applicationForm-edit-box > .mobilefixedbtn > .global-btn').click();
    cy.wait(3000);
    // cy.get('table').contains('td', 'FI').should('exist').then($cell => {
    //   const statusText = $cell.text();
    //   cy.log('Captured Status:', statusText);
    //   cy.wait(5000);
    //   expect(statusText).to.eq('APPROVED');

    // });
  }
  stepsApprovedToVP() {
    cy.get('.threedot').click();
    cy.get(':nth-child(1) > .threedot-btn').click();
    cy.wait(2000);
    cy.get('.applicationForm-edit-box > :nth-child(1) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("verification pending{enter}");
    cy.get('#UploadDeclaration').attachFile('Truck_1.png');
    cy.wait(2000);
    cy.get('.plateformLoan-box-radio > :nth-child(1)').click();
    cy.get('#DisbursalReceipt').attachFile('Truck_1.png');
    cy.wait(2000);
    cy.contains('Disbursement Date').parent().find('input').click(); // Use a stable selector
    cy.wait(4000);
    cy.scrollTo(0, 500);
    cy.wait(3000);
    cy.get('.ui-datepicker-month').should('be.visible').select('8');
    cy.wait(3000);
    cy.get('.ui-datepicker-year').should('be.visible').select('2025');
    cy.wait(3000);
    cy.contains('.ui-datepicker-calendar td', '20').click();

    cy.wait(3000);
    cy.get('.plateformLoan.frequency > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("monthly{enter}");
    cy.wait(2000);
    cy.get('.plateformLoan.amount_credited_to > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("agrowheels{enter}");
    cy.wait(2000);
    cy.get('#floatingTextarea').type("Test comment for approved to VP");
    cy.wait(3000);
    cy.get('.plateformLoan.tenure > .form-control').type("06");
    cy.get('.plateformLoan.interest_rate > .form-control').type("12");
    cy.get('.applicationForm-edit-box > .mt-3 > .global-btn').click();


    // cy.get('table').contains('td', 'FI').should('exist').then($cell => {
    //   const statusText = $cell.text();
    //   cy.log('Captured Status:', statusText);
    //   cy.wait(5000);
    //   expect(statusText).to.eq('APPROVED');
    // });
  }

  stepsVPToDisbursal() {
    cy.get('.threedot').click();
    cy.get(':nth-child(1) > .threedot-btn').click();
    cy.wait(2000);
    cy.get('.applicationForm-edit-box > :nth-child(1) > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("disbursed{enter}");
    cy.wait(2000);
    cy.get('.applicationForm-edit-box > .mt-3 > .global-btn').click();
    cy.wait(3000);
  }
  InflowProcess1() {
    cy.wait(3000);
    cy.get('.threedot').click();
    cy.get(':nth-child(4) > .threedot-btn').click();
    cy.wait(3000);
    cy.visit("https://t3finj.tractorfirst.com/payments/all");
    cy.get('[href="https://t3finj.tractorfirst.com/payments/all"] > .d-flex > .tabtitle').click();
    cy.get('.applicationForm-inner > :nth-child(11) > .form-control').type("UP80DE6818");
    cy.get('.applicationFormdbtn > .global-btn').click();
  }
  InflowProcess2() {
    //cy.get('.px-3 > .threedot-td > .threedot').click();
    cy.get('.threedot').click();
    cy.get(':nth-child(1) > .threedot-btn > .threedotText').click();
    cy.wait(3000);
    cy.clearLocalStorage();
    // cy.get('.applicationForm-edit-box > :nth-child(1) > .form-control').type(45645645535);
    const utrNumber = 'UTR' + Math.floor(10000000000 + Math.random() * 90000000000);
    cy.get('.applicationForm-edit-box > :nth-child(1) > .form-control').type(utrNumber);
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

  InflowVerification() {
    cy.wait(3000);
    cy.get('.applicationForm-inner > :nth-child(11) > .form-control').type("UP80DE6818");
    cy.get('.applicationFormdbtn > .global-btn').click();
    cy.wait(3000);
    cy.get('.px-3 > .threedot-td > .threedot').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > .threedot-btn').click();
    cy.wait(2000);
    cy.get('.col-16 > .threedot-td > .threedot').click();
    cy.get('.col-16 > .threedot-td > .threedot-list > :nth-child(1) > .threedot-btn').click();
    cy.get('#payment-proofFileInput').attachFile('Truck_1.png');
    cy.get('#floatingTextarea').type("Inflow verification done");
    cy.get('.btn-approved').click();
    cy.wait(3000);
  }
  OutflowProcess1() {
    cy.wait(3000);
    cy.get('.px-3 > .threedot-td > .threedot').click();
    cy.wait(2000);
    cy.get('.px-3 > .threedot-td > .threedot-list > :nth-child(2) > .threedot-btn').click();
    cy.wait(2000);
    cy.get('#receiverDiv > .select2-container > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type("third party{enter}");
    cy.get('#receiverName').type("Test third party");
    cy.get('#maskedBankInput').type("1234567890");
    cy.get('#bankInput').type("1234567890");
    cy.get('#ifcsInput').type("HDFC0001234");
    cy.get('#verifyAccountBtn').click();
    cy.wait(3000);
    cy.get('.inline-flex > .ms-2').click();
    cy.get('#cancelled-checkFileInput').attachFile('Truck_1.png');
    cy.wait(3000);
    cy.get('#agreementFileInput').attachFile('Truck_1.png');
    cy.wait(3000);
    cy.get('.applicationForm-edit-box > .mt-3 > .global-btn').click();
    cy.wait(5000);

    const fileInputs = [
      '#pddFileInput',
      '#insuranceFileInput',
      '#valid-nocFileInput',
      '#party-presenceFileInput',
      '#hypothecationFileInput'
    ];

    fileInputs.forEach(selector => {
      cy.get('body').then($body => {
        if ($body.find(selector).length) {
          cy.get(selector).attachFile('Truck_1.png');
        } else {
          cy.log(`${selector} not found, running alternate test or skipping`);
          // Optionally, call another test case or function here
          // e.g. this.runAlternateTestCase(selector);
        }
      });
    });
    cy.get('#pddFileInput').attachFile('Truck_1.png');
    cy.get('#insuranceFileInput').attachFile('Truck_1.png');
    cy.get('#valid-nocFileInput').attachFile('Truck_1.png');
    cy.get('#party-presenceFileInput').attachFile('Truck_1.png');
    cy.get('#hypothecationFileInput').attachFile('Truck_1.png');
    cy.get('.paymenTypeformLoan-box-input > .form-control').type("50000");
    cy.get('.applicationForm-edit-box > .mobilefixedbtn > .global-btn').click();
  }
  OutFlowOPS() {
    cy.get('.px-3 > .threedot-td > .threedot').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > .threedot-btn').click();
    cy.get('[data-bs-target="#nav-outflow-1634"]').click();
    cy.wait(2000); cy.get(':nth-child(2) > .fixed-col-2 > .btn-badge-edit').click();
    cy.wait(2000);
    cy.get('.position-tick > .pt-2 > .form-control').clear().type("1000");
    cy.get('#remarkTextarea').type("Outflow OPS verification done");
    cy.get('.btn-approved').click();

  }
  OutFlowRetail() {
    cy.get('.px-3 > .threedot-td > .threedot').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > .threedot-btn').click();
    cy.get('[data-bs-target="#nav-outflow-1634"]').click();
    cy.wait(2000);
    cy.get('span.btn-badge-edit-wrp[onclick*="out-flow-verify-1/2099"][title="Verify 1"]').should('be.visible').click();
    cy.get(':nth-child(4) > .pt-2 > .form-control').clear().type("1000");
    cy.get('#remarkTextarea').type("Outflow Retail verification done");
    cy.wait(2000);
    cy.get('.btn-approved').click();

  }
  OutFlowSH() {
    cy.get('.px-3 > .threedot-td > .threedot').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > .threedot-btn').click();
    cy.wait(2000);
    cy.get('span.btn-badge-edit-wrp[onclick*="out-flow-verify-2/2099"][title="Verify 2"]').should('be.visible').click({ force: true });
    //cy.get('span.btn-badge-edit-wrp[onclick*="out-flow-verify-1/2099"][title="Verify 1"]').should('not.have.class', 'disable').should('be.visible').click();
    cy.get('#remarkTextarea').type("Outflow SH verification done");
    cy.wait(2000);
    cy.get('.btn-approved').click();

  }
  OutFlowPayment() {
    cy.get('.px-3 > .threedot-td > .threedot').click();
    cy.wait(2000);
    cy.get('[data-bs-target="#nav-outflow-1634"]').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .fixed-col-2 > .btn-badge-edit').click();
    cy.wait(2000);
    //cy.get('.paymenTypeformLoan-box-select > .form-select').click();
    cy.wait(2000);
    cy.get('select[name="disposition"]').should('be.visible').select('In Process ');
    cy.wait(2000);
    cy.get('.col-3 > .btn').click();
    cy.wait(5000);
    cy.get('select[name="manual_penny_drop"]').should('be.visible').select('Yes');
    cy.get('select[name="from_account"]').should('be.visible').select('AXIS - 919020003632724');
    cy.get('select[name="transfer_type"]').should('be.visible').select('NEFT')
    cy.get('#floatingTextarea').type("Outflow Payment done");
    cy.get('.btn-approved').click();
  }
}
export default new LeadEndToEndPage();