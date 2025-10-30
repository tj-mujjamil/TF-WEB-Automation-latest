import CreatePartnerPage from "../Page_object_model/CreatePartnerPage";
import '../../support/commands';

it('CreateLead', () => {
    cy.clearAllCookies();
    const mobile = '8005566027';
    const otp = ['1', '2', '3', '4', '5', '6'];

    cy.loginWithOTP(mobile, otp);
    CreatePartnerPage.Step1();
    CreatePartnerPage.Step2();

});