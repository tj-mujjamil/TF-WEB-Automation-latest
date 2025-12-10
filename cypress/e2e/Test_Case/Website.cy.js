import website from '../Page_object_model/Website';
it('Contact_US', () => {

cy.visit("https://dev.finj.in/");
cy.viewport(1920, 1080); 
cy.wait(3000);
// cy.visit("https://dev.finj.in/contact");
// website.Contact_US();
website.EMI_Calculator();

});