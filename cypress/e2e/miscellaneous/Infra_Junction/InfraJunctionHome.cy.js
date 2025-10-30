describe("template spec", () => {
    it("passes", () => {

  cy.wait(3000);    
  cy.visit('https://infra.tractorjunction.com/');

  cy.get('#tp-navbackhoe-loader').click();
  cy.get('#tpbackhoe-loader > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/backhoe-loader');
  cy.go('back');

  cy.get('#tp-navexcavator').click();
  cy.get('#tpexcavator > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/excavator');
  cy.go('back');

  cy.get('#tp-navtelehandler').click();
  cy.get('#tptelehandler > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/telehandler');
  cy.go('back');

  cy.get('#tp-navcrane').click();
  cy.get('#tpcrane > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/crane');
  cy.go('back');

  cy.get('#tp-navmotor-grader').click();
  cy.get('#tpmotor-grader > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/motor-grader');
  cy.go('back');

  cy.get('#tp-navdozer').click();
  cy.get('#tpdozer > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dozer');
  cy.go('back');

  cy.get('#tp-navforklift-truck').click();
  cy.get('#tpforklift-truck > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/forklift-truck');
  cy.go('back');

  cy.xpath("//a[@id='tp-navwheeled-loader']").click();
  cy.get('#tpwheeled-loader > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/wheeled-loader');
  cy.go('back');

  cy.get('#nav-tabContent > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/all-brands');
  cy.go('back');

  cy.get('#nav-cate-0').click();
  cy.get('#cate-0 > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers/');
  cy.go('back');

  cy.get('#nav-cate-1').click();
  cy.get('#cate-1 > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers/');
  cy.go('back');

  cy.get('#nav-cate-2').click();
  cy.get('#cate-2 > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers/');
  cy.go('back');

  cy.get('#nav-cate-3').click();
  cy.get('#cate-3 > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers/');
  cy.go('back');

  cy.get('#nav-cate-4').click();
  cy.get('#cate-4 > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers/');
  cy.go('back');

  cy.get('#nav-cate-5').click();
  cy.get('#cate-5 > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers/');
  cy.go('back');

  cy.get('#nav-cate-6').click();
  cy.get('#cate-6 > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers/');
  cy.go('back');

  cy.get('#nav-cate-7').click();
  cy.get('#cate-7 > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers/');
  cy.go('back');

  cy.get('#nav-tab > [href="https://infra.tractorjunction.com/en/dealers"]').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers');
  cy.go('back');

  cy.get('#appl-construction').click();
  cy.get('#app-construction > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/construction-heavy-equipments');
  cy.go('back');

  cy.get('#appl-agriculture').click();
  cy.get('#app-agriculture > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/agriculture-heavy-equipments');
  cy.go('back');

  cy.get('#appl-lifting').click();
  cy.get('#app-lifting > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/lifting-heavy-equipments');
  cy.go('back');

  cy.get('#appl-transportation').click();
  cy.get('#app-transportation > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/transportation-heavy-equipments');
  cy.go('back');

  cy.get('#appl-excavation').click();
  cy.get('#app-excavation > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/excavation-heavy-equipments');
  cy.go('back');

  cy.get('#pre-nav-backhoe-loader').click();
  cy.get('.container-mid > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get('#comp-nav-excavator').click();
  cy.get('.container-mid > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get('#comp-nav-telehandler').click();
  cy.get('.container-mid > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get('#comp-nav-crane').click();
  cy.get('.container-mid > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get('#pre-nav-motor-grader').click();
  cy.get('#premotor-grader > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/motor-grader');
  cy.go('back');

  cy.get('#pre-nav-dozer').click();
  cy.get('#predozer > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dozer');
  cy.go('back');

  cy.get('#pre-nav-forklift-truck').click();
  cy.get('#preforklift-truck > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/');
  cy.go('back');

  cy.get('#pre-nav-forklift-truck').click();
  cy.get('#preforklift-truck > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/');
  cy.go('back');

  cy.xpath("//a[@id='pre-nav-wheeled-loader']").click();
  cy.get('#prewheeled-loader > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/wheeled-loader');
  cy.go('back');

  cy.get('#comp-nav-backhoe-loader').click();
  cy.get('.container-mid > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get('#comp-nav-excavator').click();
  cy.get('.container-mid > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get('#comp-nav-telehandler').click();
  cy.get('.container-mid > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get('#comp-nav-crane').click();
  cy.get('.container-mid > .viewall > a').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get(':nth-child(1) > a > .bikecityBlock-inner').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/about-us');
  cy.go('back');

  cy.get(':nth-child(2) > a > .bikecityBlock-inner').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/contact-us');
  cy.go('back');

  cy.get(':nth-child(3) > a > .bikecityBlock-inner').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/compare');
  cy.go('back');

  cy.get(':nth-child(4) > a > .bikecityBlock-inner').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/construction-equipment-loan');
  cy.go('back');

  cy.get(':nth-child(5) > a > .bikecityBlock-inner').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/dealers');
  cy.go('back');

  cy.get(':nth-child(6) > a > .bikecityBlock-inner').click();
  cy.wait(2000);
  cy.url().should('include','https://infra.tractorjunction.com/en/loan-emi-calculator');
  cy.go('back');






























    });

});