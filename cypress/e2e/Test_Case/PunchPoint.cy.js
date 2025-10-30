import PunchPointPage from '../Page_object_model/PunchPointPage';
import '../../support/commands';
it('PunchPoint_filter', () => {
   cy.clearAllCookies();
   cy.visit("https://t3finj.tractorfirst.com/");
   

   const mobile = '8005566027';
   const otp = ['1', '2', '3', '4', '5', '6'];

   cy.loginWithOTP(mobile, otp);
   //  PunchPointPage.PunchPointuserLogin();
   PunchPointPage.PunchPointDateRange();
   PunchPointPage.PunchPointselectThisYear();
   PunchPointPage.PunchPointState();
   PunchPointPage.PunchPointDistrict();
   PunchPointPage.PunchPointApplyFilter();
   PunchPointPage.PunchPointURLAssertion();
   PunchPointPage.PunchPointReset();
});

