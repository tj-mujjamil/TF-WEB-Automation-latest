
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --

// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import 'cypress-downloadfile/lib/downloadFileCommand';

//Custom login command
Cypress.Commands.add('loginWithOTP', (mobileNumber, otp) => {
  cy.visit('https://t3finj.tractorfirst.com/'); 
  cy.get('.login-btn').click();
  cy.get('.step-2 > .welcome-box-two > .pb-1 > .form-control').type(mobileNumber);
  cy.get('.step-2 > .welcome-box-two > .global-btn').click();

  // Type OTP digits
  cy.get('.first-otp-input').type(otp[0]);
  cy.get('.mb-2 > :nth-child(2)').type(otp[1]);
  cy.get('.mb-2 > :nth-child(3)').type(otp[2]);
  cy.get('.mb-2 > :nth-child(4)').type(otp[3]);
  cy.get('.mb-2 > :nth-child(5)').type(otp[4]);
  cy.get('.mb-2 > :nth-child(6)').type(otp[5]);

  cy.get('.step-3 > .welcome-box-two > .global-btn').click();
});






