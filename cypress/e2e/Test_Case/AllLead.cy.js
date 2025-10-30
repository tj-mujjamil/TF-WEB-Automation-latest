import AllLeadPage from '../Page_object_model/AllLeadPage'
import '../../support/commands';

it('AllLead_filter', () => {

  cy.clearAllCookies();
  cy.visit("https://t3finj.tractorfirst.com");

  const mobile = '8005566027';
  const otp = ['1', '2', '3', '4', '5', '6']; // Replace with actual OTP or mock

  cy.loginWithOTP(mobile, otp);
  AllLeadPage.openDateRange();
  AllLeadPage.selectLastMonthRange();
  AllLeadPage.selectClusterHead();
  AllLeadPage.selectFieldOfficer();
  AllLeadPage.selectVehicleType();
  AllLeadPage.enterName();
  AllLeadPage.enterRegistrationNumber();
  AllLeadPage.selectSource();
  AllLeadPage.selectLenderName();
  AllLeadPage.selectState();
  AllLeadPage.selectDistrict();
  AllLeadPage.selectRCLimit();
  AllLeadPage.selectRCLimitPending();
  AllLeadPage.clickSearch();
  AllLeadPage.assertURL();
});