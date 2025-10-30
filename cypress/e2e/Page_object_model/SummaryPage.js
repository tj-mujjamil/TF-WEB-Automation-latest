class SummaryPage {
    SumDR() {
        cy.get('#daterange').click();
    }

    // DWPsetMobileNumber(mobileNumber) {
    //     cy.get('.step-2 > .welcome-box-two > .pb-1 > .form-control').type(mobileNumber);
    // }

    // DWPgetStarted() {
    //     cy.get('.step-2 > .welcome-box-two > .global-btn').click();
    // }

    // DWPSetOTP(otp) {
    //     cy.get('.first-otp-input').type(otp[0]);
    //     cy.get('.mb-2 > :nth-child(2)').type(otp[1]);
    //     cy.get('.mb-2 > :nth-child(3)').type(otp[2]);
    //     cy.get('.mb-2 > :nth-child(4)').type(otp[3]);
    //     cy.get('.mb-2 > :nth-child(5)').type(otp[4]);
    //     cy.get('.mb-2 > :nth-child(6)'). type(otp[5]);
    // }




}
export default new SummaryPage;