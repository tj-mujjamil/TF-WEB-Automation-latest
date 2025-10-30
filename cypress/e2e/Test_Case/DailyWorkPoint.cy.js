import DailyWorkPointPage from '../Page_object_model/DailyWorkPointPage';
import '../../support/commands';
it('DailyWorkPoint_filter', () => {
  cy.clearAllCookies();
  cy.visit("https://t3finj.tractorfirst.com/");
  cy.clearAllCookies();
  const mobile = '8005566027';
  const otp = ['1', '2', '3', '4', '5', '6'];

  cy.loginWithOTP(mobile, otp);
  cy.wait(3000);

  cy.visit("https://t3finj.tractorfirst.com/daily-target/all");
  DailyWorkPointPage.DWPDateRange();
  DailyWorkPointPage.DWPselectThisYear();
  DailyWorkPointPage.DWPState();
  DailyWorkPointPage.DWPClusterHead();
  DailyWorkPointPage.DWPApplyFilter();
  DailyWorkPointPage.DWPURLAssertion();
  DailyWorkPointPage.DWPReset();
}); 