import leadEndToEndPage from "../Page_object_model/leadEndToEndPage";
import '../../support/commands';

it('leadEndToEndPage', () => {
  cy.clearAllCookies();
  const mobile = '8005566027';
  const otp = ['1', '2', '3', '4', '5', '6'];

  cy.loginWithOTP(mobile, otp);
  cy.visit("https://t3finj.tractorfirst.com/");

  // leadEndToEndPage.StepA();
  // leadEndToEndPage.StepB();

  // let regNo; // closure variable to store registration number

  // cy.generateUniqueRegNo().then((uniqueRegNo) => {
  //   regNo = uniqueRegNo;
  //   cy.get('.step-2 > .plateformLoan.mt-1 > .form-control').type(regNo);
    
  // });
  
// cy.get('.step-2 > .plateformLoan.mt-1 > .form-control').type("UP80DE1000");
// cy.wait(2000);
// cy.get('.step-2 > .flex-column > .d-flex > .btn-plateform').click();
  
// const generateUniqueRegistrationNumber = () => {
//   const timestamp = Date.now();
//   const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
//   const lastFourDigits = randomNumber.toString().padStart(4, '0'); // Ensure the last 4 digits have leading zeros
//   const newRegistrationNumber = `RJ02RF${lastFourDigits}`; // Create the new registration number
//   cy.wait(5000);
//   cy.get('.step-2 > .plateformLoan.mt-1 > .form-control').type(newRegistrationNumber); 
//   return newRegistrationNumber;// Update the input field with the new registration number
// };
// cy.then(() => {
//   generateUniqueRegistrationNumber();
// });
// const regNo = cy.get('.step-2 > .plateformLoan.mt-1 > .form-control').invoke('val');

  // leadEndToEndPage.StepC();
  // leadEndToEndPage.StepD();

  // cy.wait(5000);
  // cy.then(() => {
  //   cy.get('.bg-transparent').click();
  //   cy.wait(3000);
  //   cy.scrollTo('top');
  //   const regNo = generateUniqueRegistrationNumber();
  //   cy.get('.adv-filter-height > :nth-child(6) > .form-control').type(regNo);
  //   cy.get('.adv-filter-height > .applicationFormdbtn > .global-btn').click();
  // });
  /////////////////////////////////////////////////////////////////////////////////
  //remove below code once the above code is working fine
  cy.wait(3000);
  cy.visit("https://t3finj.tractorfirst.com/lead/all");
   cy.get('.bg-transparent').click();
    cy.wait(3000);
    cy.scrollTo('top');
    cy.get('.adv-filter-height > :nth-child(6) > .form-control').type("RJ02RF1526");
    cy.get('.adv-filter-height > .applicationFormdbtn > .global-btn').click();
    cy.wait(3000);
  // cy.visit("https://t3finj.tractorfirst.com/payments/all");
  // cy.get('.applicationForm-inner > :nth-child(11) > .form-control').type("RJ02RF1526");
  // cy.get('.applicationFormdbtn > .global-btn').click();
  // cy.wait(3000);


  // leadEndToEndPage.StepE_leadStatus();
  // leadEndToEndPage.StepFiToLogin();
  // leadEndToEndPage.StepLoginToOps();
  // leadEndToEndPage.stepsOpsToApproved();
  // leadEndToEndPage.stepsApprovedToVP();
  // leadEndToEndPage.stepsVPToDisbursal();
  // leadEndToEndPage.InflowProcess1();
  leadEndToEndPage.InflowProcess2();
  leadEndToEndPage.InflowVerification();
  leadEndToEndPage.OutflowProcess1();
  leadEndToEndPage.OutFlowOPS();
  leadEndToEndPage.OutFlowRetail();
  leadEndToEndPage.OutFlowSH();
  leadEndToEndPage.OutFlowPayment();

});