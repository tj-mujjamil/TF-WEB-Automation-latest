import partnerPage from '../Page_object_model/PartnerDetailsPage'
import '../../support/commands';
it('Partner_filter', () => {
    cy.clearAllCookies();
    cy.visit("https://t3finj.tractorfirst.com");
    const mobile = '8005566027';
    const otp = ['1', '2', '3', '4', '5', '6'];

    cy.loginWithOTP(mobile, otp);

    partnerPage.PatnerDateRange();
    partnerPage.PatnerselectThisYear();
    partnerPage.patnerType();
    partnerPage.PatnerClusterHead();
    partnerPage.PatnerFieldOfficer();
    partnerPage.PatnerHomeCoordinates();
    partnerPage.PatnerPennyDrop();
    partnerPage.Patnersearch();
    partnerPage.PatnerURLAssertion();
});