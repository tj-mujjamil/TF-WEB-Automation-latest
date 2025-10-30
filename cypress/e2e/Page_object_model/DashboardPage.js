class DashboardPage {
    // clickLogin() {
    //     cy.get('.login-btn').click();
    // }

    // setMobileNumber(mobileNumber) {
    //     cy.get('.step-2 > .welcome-box-two > .pb-1 > .form-control').type(mobileNumber);
    // }

    // getStarted() {
    //     cy.get('.step-2 > .welcome-box-two > .global-btn').click();
    // }

    // setOTP(otp) {
    //     cy.get('.first-otp-input').type(otp[0]);
    //     cy.get('.mb-2 > :nth-child(2)').type(otp[1]);
    //     cy.get('.mb-2 > :nth-child(3)').type(otp[2]);
    //     cy.get('.mb-2 > :nth-child(4)').type(otp[3]);
    //     cy.get('.mb-2 > :nth-child(5)').type(otp[4]);
    //     cy.get('.mb-2 > :nth-child(6)'). type(otp[5]);
    // }

    // userLogin() {
    //     cy.get('.step-3 > .welcome-box-two > .global-btn').click();
    // }
    daterange(){
        cy.get('#daterange').click();
    }
    
    selectThisYear(){
        cy.get('[data-range-key="Last 6 Months"]').click();
    }

    stateHead(){
        cy.get('.applicationForm-inner > :nth-child(2) > .select2-container > .selection > .select2-selection').click();
        cy.get(2000);
        cy.get('.select2-search__field').type("Aman kumar{enter}");
        cy.wait(2000);

    }
   
    ClusterHead(){
        cy.get('.applicationForm-inner > :nth-child(3) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("Aman kumar{enter}");
        cy.wait(2000);
    }
    FieldOfficer(){
        cy.get('.applicationForm-inner > :nth-child(4) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("corp fo {enter}");
       
    
    }
    search(){
        cy.get('.applicationFormdbtn > .global-btn').click();
        cy.wait(2000);
    }

    URLAssertion(){
                                    
  cy.url().then((currentUrl) => {
  if (currentUrl.includes('sh_id=881&cluster_id=880&agent_id=874')) {
    cy.log('✅ Test case ran successfully.');
  } else {
    cy.log('❌ Test case failed: Unexpected URL.');
   
  }
});
        
    }

}

export default new DashboardPage;