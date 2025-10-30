import InflowOutflowPage from '../Page_object_model/lnflowOutflowPage';
import '../../support/commands';



it('InflowOutflow', () => {
        cy.clearAllCookies();
        cy.visit("https://t3finj.tractorfirst.com/");
        const mobile = '8005566027';
        const otp = ['1', '2', '3', '4', '5', '6'];

        cy.loginWithOTP(mobile, otp);

        InflowOutflowPage.InflowProcess1();
        InflowOutflowPage.InflowProcess2();


});
