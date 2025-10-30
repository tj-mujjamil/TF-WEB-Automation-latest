  import ReportsPage from '../Page_object_model/ReportsPage';
 it('Reports_filter', () => {
        cy.clearAllCookies();
        cy.visit("https://t3finj.tractorfirst.com/");
        //const ReportsPage = new ReportsPOM();
        ReportsPage.ReportsLogin();
        ReportsPage.ReportsMobileNumber("8005566027");
        ReportsPage.ReportsgetStarted();
        ReportsPage.ReportsSetOTP("123456");
        ReportsPage.ReportsuserLogin();
        }); 