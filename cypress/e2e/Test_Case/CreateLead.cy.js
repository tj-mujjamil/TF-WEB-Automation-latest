import CreateLeadPage from '../Page_object_model/CreateLeadPage';
import '../../support/commands';

it('CreateLead', () => {
  cy.clearAllCookies();
  const mobile = '8005566027';
  const otp = ['1', '2', '3', '4', '5', '6'];

  cy.loginWithOTP(mobile, otp);


  CreateLeadPage.fillStep1Details();
  CreateLeadPage.fillStep2Details();
  cy.get('.step-2 > :nth-child(2) > .form-control').type("100000");

  cy.generateUniqueRegNo().then((uniqueRegNo) => {
    cy.get('.step-2 > .mt-1 > .form-control').type(uniqueRegNo);

    // you can use `uniqueRegNo` in assertions, filters, etc. later
  });
  CreateLeadPage.fillStep3Details();
  CreateLeadPage.fillStep4Details();

});