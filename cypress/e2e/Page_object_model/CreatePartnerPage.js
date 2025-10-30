import 'cypress-file-upload';
class CreatePartnerPage {

    Step1() {
        cy.wait(3000);
        cy.visit("https://t3finj.tractorfirst.com/");
        cy.wait(3000);
        cy.visit("https://t3finj.tractorfirst.com/partner/create");
        cy.wait(3000);
        cy.get('#partnerName').type("testqa "); cy.get('.step-1 > .plateformLoan.pt-3 > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("agro wheels{enter}");
        cy.get('.gap-1 > :nth-child(1) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("gujarat{enter}");
        cy.wait(2000);
        cy.get('.gap-1 > :nth-child(2) > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("ahmedabad{enter}");
        cy.wait(2000);
        cy.get('.my-2 > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-search__field').type("dholka{enter}");
        cy.wait(2000);
        cy.get('#mobileNum').type("8787878787");
        cy.get('.partnerLoc-box-radio > :nth-child(2) > .checkmark').click();
        cy.get('#bankAccountNo').type("1234567890123456");
        cy.get('#bankAccountIFSC').type("HDFC0001234");
        cy.get('#bankFileInput').attachFile('Truck_1.png');
        cy.get('.mt-2 > .global-btn').click();


    }
    Step2() {
        cy.wait(3000);
        cy.get('.step-2 > .gap-2 > .btn-plateform').click();
    }

}
export default new CreatePartnerPage;