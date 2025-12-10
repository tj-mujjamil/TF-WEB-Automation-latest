class Website{

Contact_US(){
    cy.wait(3000);
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="mobile"]').type('9999999999');
    cy.get('input[name="email"]').type('JohnDoe@gmail.com');
    cy.get('select[name="state"]').select('Karnataka');
    cy.get('textarea[name="message"]').type('This is a test message from John Doe.');
    cy.wait(3000);
    cy.get('button[type="button"]').contains('Submit').click();
    cy.wait(3000);

     cy.get('div[role="alert"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', "Thank you, we'll reach you shortly");

    // Optional: assert the toast has the success icon
    cy.get('div[role="alert"]').within(() => {
      cy.get('svg').should('exist');
    });

    cy.wait(3000);
}

EMI_Calculator(){
    // Clear and enter random loan amount (between 100000 and 10000000)
    const randomLoanAmount = Math.floor(Math.random() * (10000000 - 100000 + 1)) + 100000;
    cy.get('input#loanAmount').clear().type(randomLoanAmount.toString());
    
    // Select random tenure button (1Y, 2Y, 3Y, 5Y, 7Y)
    const tenureButtons = ['1Y', '2Y', '3Y', '5Y', '7Y'];
    const randomTenure = tenureButtons[Math.floor(Math.random() * tenureButtons.length)];
    cy.get('button').contains(randomTenure).click();
    
    // Enter random interest rate (between 8 and 30)
    const randomInterestRate = (Math.random() * (30 - 8) + 8).toFixed(1);
    cy.get('input#interestRate').clear().type(randomInterestRate);
    
    cy.wait(2000);
}


}
export default new Website;