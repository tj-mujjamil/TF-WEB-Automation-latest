import LoanAmmountPage from '../Page_object_model/LoanAmmountPage';
import '../../support/commands';
it('LoanAmmount_filter', () => {
    cy.clearAllCookies();
    cy.visit("https://t3finj.tractorfirst.com/");
    const mobile = '8005566027';
    const otp = ['1', '2', '3', '4', '5', '6'];

    cy.loginWithOTP(mobile, otp);

    LoanAmmountPage.LoanAmmountDateRange();
    LoanAmmountPage.LoanAmmountselectThisYear();
    LoanAmmountPage.LoanAmmountDisbursmentDate();
    LoanAmmountPage.LoanAmmountpaymentStatus();
    LoanAmmountPage.LoanAmmountLenderName();
    LoanAmmountPage.LoanAmmountCustomerName();
    LoanAmmountPage.LoanAmmountRCNo();
    LoanAmmountPage.loanAmmountSearch();
    LoanAmmountPage.loanAmmountURLAssertion();
    LoanAmmountPage.loanAmmountReset();

});