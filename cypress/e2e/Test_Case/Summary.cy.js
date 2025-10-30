import '../../support/commands';

import SummaryPage from '../Page_object_model/SummaryPage';
it('CreateLead', () => {
  cy.clearAllCookies();
  const mobile = '8005566027';
  const otp = ['1', '2', '3', '4', '5', '6'];

  cy.loginWithOTP(mobile, otp);
  cy.wait(3000);
  cy.visit ("https://t3finj.tractorfirst.com/pre_partner/summary");

  });