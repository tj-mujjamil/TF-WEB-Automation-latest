class ReportsPage {
    ReportsLogin() {
        cy.get('.login-btn').click();
        cy.wait(2000);
    }

    ReportsMobileNumber(mobileNumber) {
        cy.get('.step-2 > .welcome-box-two > .pb-1 > .form-control').type(mobileNumber);
    }

    ReportsgetStarted() {
        cy.get('.step-2 > .welcome-box-two > .global-btn').click();
    }

    ReportsSetOTP(otp) {
        cy.get('.first-otp-input').type(otp[0]);
        cy.get('.mb-2 > :nth-child(2)').type(otp[1]);
        cy.get('.mb-2 > :nth-child(3)').type(otp[2]);
        cy.get('.mb-2 > :nth-child(4)').type(otp[3]);
        cy.get('.mb-2 > :nth-child(5)').type(otp[4]);
        cy.get('.mb-2 > :nth-child(6)').type(otp[5]);
    }
    ReportsuserLogin() {
        cy.get('.step-3 > .welcome-box-two > .global-btn').click();
        cy.wait(2000);
    }
}
export default new ReportsPage;