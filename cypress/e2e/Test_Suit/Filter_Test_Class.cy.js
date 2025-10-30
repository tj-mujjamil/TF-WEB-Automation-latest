
import DashboardPOM from "./Dashboard_POM.cy.js";
import PatnerDetailsPOM from "./PatnerDetails_POM.cy.js";
import AllLeadPOM from "./AllLead_POM.Cy.js";
import UserPointPOM from "./UserPoint_POM.cy.js";
import DailyWorkPointPOM from "./DailyWorkPoint_POM.cy.js";
import PunchPointPOM  from "./PunchPoint_POM.cy.js";
import LoanAmmountPOM from "./LoanAmmount_POM.cy.js";
import ReportsPOM from "./Reports_POM.cy.js";
import PreOnboardingPOM from "./Pre-Onboarding.Cy.js";
import CreateLeadPOM from "./CreateLead.cy.js";
import 'cypress-file-upload';
import CreateLeadPom from "./CreateLead.cy.js";


import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(100);

describe("Finj Filter", () => {
    
  it('Dashboard_filter', () => {
        cy.clearAllCookies();
        cy.visit("https://t3finj.tractorfirst.com/");
        const dashboardPage = new DashboardPOM();
        dashboardPage.clickLogin();
        dashboardPage.setMobileNumber("8005566027");
        dashboardPage.getStarted();
        dashboardPage.setOTP("123456");
        dashboardPage.userLogin();
        dashboardPage.daterange();
        dashboardPage.selectThisYear();
        dashboardPage.stateHead();
        dashboardPage.ClusterHead();
        dashboardPage.FieldOfficer();
        dashboardPage.search();
        dashboardPage.URLAssertion();
        cy.screenshot('full-page', { capture: 'fullPage' });

       // cy.screenshot();
    }); 
        it('Partner_filter', () => {
        cy.clearAllCookies();
        cy.visit("https://t3finj.tractorfirst.com");
        const partnerPage = new PatnerDetailsPOM();
        partnerPage.PatnerclickLogin();
        partnerPage.PatnersetMobileNumber("8005566027");
        partnerPage.PatnergetStarted();
        partnerPage.PatnersetOTP("123456");
        partnerPage.PatneruserLogin();
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

     it('AllLead_filter', () => {
        cy.clearAllCookies();
        cy.visit("https://t3finj.tractorfirst.com");
        const AllLeadPage = new AllLeadPOM();
        AllLeadPage.AllLeadLogin();
        AllLeadPage.AllLeadsetMobileNumber("8005566027");
        AllLeadPage.AllLeadgetStarted();
        AllLeadPage.AllLeadSetOTP("123456");
        AllLeadPage.AllLeaduserLogin();
        AllLeadPage.AllLeadDateRange();
        AllLeadPage.AllLeadselectThisYear();
        AllLeadPage.AllLeadClusterHead();
        AllLeadPage.AllLeadFieldOfficer();
        AllLeadPage.AllLeadVehicleType();
        AllLeadPage.AllLeadName();
        AllLeadPage.AllLeadRegNo();
        AllLeadPage.AllLeadSource();
        AllLeadPage.AllLeadState();
        AllLeadPage.AllLeadDistrict();
        AllLeadPage.AllLeadRCLimit();
        AllLeadPage.AllLeadRCLimitPending();
        AllLeadPage.AllLeadsearch();
        AllLeadPage.AllLeadURLAssertion();
        AllLeadPage.AllLeadReset();
     }); 
     it('UserPoint_filter', () => {
        cy.clearAllCookies();
        cy.visit("https://t3finj.tractorfirst.com/");
        const UserPointPage = new UserPointPOM();
        UserPointPage.UserPointLogin();
        UserPointPage.UserPointMobileNumber("8005566027");
        UserPointPage.UserPointgetStarted();
        UserPointPage.UserPointSetOTP("123456");
        UserPointPage.UserPointuserLogin();
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
       it('DailyWorkPoint_filter', () => {
           cy.clearAllCookies();
           cy.visit("https://t3finj.tractorfirst.com/");
           const DailyWorkPointPage = new DailyWorkPointPOM();
           DailyWorkPointPage.DWPLogin();
           DailyWorkPointPage.DWPsetMobileNumber("8005566027");
           DailyWorkPointPage.DWPgetStarted();
           DailyWorkPointPage.DWPSetOTP("123456");
           DailyWorkPointPage.DWPuserLogin();
           DailyWorkPointPage.DWPDateRange();
           DailyWorkPointPage.DWPselectThisYear();
           DailyWorkPointPage.DWPState();
           DailyWorkPointPage.DWPClusterHead();
           DailyWorkPointPage.DWPApplyFilter();
           DailyWorkPointPage.DWPURLAssertion();
           DailyWorkPointPage.DWPReset();
        }); 

        it('PunchPoint_filter', () => {
            cy.clearAllCookies();
             cy.visit("https://t3finj.tractorfirst.com/");
             const PunchPointPage = new PunchPointPOM();
             PunchPointPage.PunchPointLogin();
             PunchPointPage.PunchPointsetMobileNumber("8005566027");
             PunchPointPage.PunchPointgetStarted();
             PunchPointPage.PunchPointSetOTP("123456");
             PunchPointPage.PunchPointuserLogin();
             PunchPointPage.PunchPointDateRange();
             PunchPointPage.PunchPointselectThisYear();
             PunchPointPage.PunchPointState();
             PunchPointPage.PunchPointDistrict();
             PunchPointPage.PunchPointApplyFilter();
             PunchPointPage.PunchPointURLAssertion();
             PunchPointPage.PunchPointReset();
            });
            
   it('LoanAmmount_filter', () => {
        cy.clearAllCookies();
        cy.visit("https://t3finj.tractorfirst.com/");
        const LoanAmmountPage = new LoanAmmountPOM();
        LoanAmmountPage.LoanAmmountLogin();
        LoanAmmountPage.LoanAmmountsetMobileNumber("8005566027");
        LoanAmmountPage.LoanAmmountgetStarted();
        LoanAmmountPage.LoanAmmountSetOTP("123456");
        LoanAmmountPage.LoanAmmountuserLogin();
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
    it('Reports_filter', () => {
        cy.clearAllCookies();
        cy.visit("https://t3finj.tractorfirst.com/");
        const ReportsPage = new ReportsPOM();
        ReportsPage.ReportsLogin();
        ReportsPage.ReportsMobileNumber("8005566027");
        ReportsPage.ReportsgetStarted();
        ReportsPage.ReportsSetOTP("123456");
        ReportsPage.ReportsuserLogin();
       

    }); 
    it ('Pre-Onboarding' , () => {
    cy.clearAllCookies();
    cy.visit("https://t3finj.tractorfirst.com/");
    const PreOnboardingPage = new PreOnboardingPOM();
    PreOnboardingPage.PreOnboardingLogin();
    PreOnboardingPage.PreOnboardingMobileNumber("8005566027");
    PreOnboardingPage.PreOnboardinggetStarted();
    PreOnboardingPage.PreOnboardingsetOTP("123456");
    PreOnboardingPage.PreOnboardinguserLogin();
    PreOnboardingPage.PreOnboardingName("Kamal");
    PreOnboardingPage.PreOnboardingMobilenumber();
    PreOnboardingPage.PreOnboardingpartnerType();
    PreOnboardingPage.PreOnboardingState();
    //PreOnboardingPage.PreOnboardingCluster_head();
    //PreOnboardingPage.PreOnboardingFieldOfficer();
    PreOnboardingPage.PreOnboardingStatus();


    }); 
     it ('CreateLead' , () => {
    cy.clearAllCookies();
    cy.visit("https://t3finj.tractorfirst.com/");
    const CreateLeadPage = new CreateLeadPom();
    CreateLeadPage.CreateLeadlogin();
    CreateLeadPage.CreateLeadsetMobileNumber("8005566027");
    CreateLeadPage.CreateLeadclickGetStarted();
    CreateLeadPage.CreateLeadenterOTP("123456");
    CreateLeadPage.CreateLeadclickUserLogin();
    cy.visit ("https://t3finj.tractorfirst.com/lead/create");
    CreateLeadPage.fillStep1Details();
    CreateLeadPage.fillStep2Details();
    cy.get('.step-2 > :nth-child(2) > .form-control').type("100000");

  cy.generateUniqueRegNo().then((uniqueRegNo) => {
  cy.get('.step-2 > .mt-1 > .form-control').type(uniqueRegNo);
  
  // you can use `uniqueRegNo` in assertions, filters, etc. later
});
    CreateLeadPage.fillStep3Details();
    CreateLeadPage.uploadFile();
    // CreateLeadPage.UserPointPOM();
})


});

