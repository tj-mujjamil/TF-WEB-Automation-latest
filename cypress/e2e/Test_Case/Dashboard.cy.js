import dashboardPage from '../Page_object_model/DashboardPage';
import '../../support/commands';
it('Dashboard_filter', () => {
  cy.clearAllCookies();
  cy.visit("https://t3finj.tractorfirst.com/");
  cy.clearAllCookies();
  const mobile = '8005566027';
  const otp = ['1', '2', '3', '4', '5', '6'];

  cy.loginWithOTP(mobile, otp);


  dashboardPage.daterange();
  dashboardPage.selectThisYear();
  dashboardPage.stateHead();
  dashboardPage.ClusterHead();
  dashboardPage.FieldOfficer();
  dashboardPage.search();
  dashboardPage.URLAssertion();
  cy.screenshot('full-page', { capture: 'fullPage' });

  cy.screenshot();
});