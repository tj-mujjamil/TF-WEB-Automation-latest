import UserPointPage from '../Page_object_model/UserPointPage';
import '../../support/commands';
it('UserPoint_filter', () => {
    cy.clearAllCookies();
    cy.visit("https://t3finj.tractorfirst.com/");
    cy.clearAllCookies();
    const mobile = '8005566027';
    const otp = ['1', '2', '3', '4', '5', '6'];

    cy.loginWithOTP(mobile, otp);
    UserPointPage.UserPointDateRange();
    UserPointPage.UserPointselectThisYear();
    UserPointPage.userPointLastLogin();
    UserPointPage.userPointName();
    UserPointPage.userPointMobileNo();
    UserPointPage.userPointstate();
    UserPointPage.userPointDistrict();
    UserPointPage.userPointStatus();
    UserPointPage.userPointRole();
    UserPointPage.userPointHomeCoordinate();
    UserPointPage.userpointApplyFilter();
    UserPointPage.userpointURLAssertion();
    UserPointPage.userpointReset();
}); 