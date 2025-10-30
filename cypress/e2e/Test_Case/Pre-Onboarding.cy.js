import PreOnboardingPage from '../Page_object_model/PreOnboardingPage';
import '../../support/commands';
it('Pre-Onboarding', () => {
    cy.clearAllCookies();
    cy.visit("https://t3finj.tractorfirst.com/");
    const mobile = '8005566027';
    const otp = ['1', '2', '3', '4', '5', '6'];

    cy.loginWithOTP(mobile, otp);

    PreOnboardingPage.PreOnboardingName("Kamal");
    PreOnboardingPage.PreOnboardingMobilenumber();
    PreOnboardingPage.PreOnboardingpartnerType();
    PreOnboardingPage.PreOnboardingState();
    //PreOnboardingPage.PreOnboardingCluster_head();
    //PreOnboardingPage.PreOnboardingFieldOfficer();
    PreOnboardingPage.PreOnboardingStatus();


}); 