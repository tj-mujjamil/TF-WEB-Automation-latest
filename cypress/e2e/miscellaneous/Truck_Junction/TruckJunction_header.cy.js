describe("Header", () => {
   it("passes", () => {

  //cy.visit("https://t1tr.tractorfirst.com/")    
  cy.visit("https://trucks.tractorjunction.com/");
  cy.wait(2000);

  cy.get('#inpt-serch').type('tata 1412 lpt');
  cy.wait(3000);
  cy.get('.serch-header-list > :nth-child(2) > :nth-child(1) > a').click({force: true});
  cy.wait(5000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/tata-truck/1412-lpt');
  cy.go('back');
 
  cy.get('.new-btn').click();
  cy.get('#user_id').type("mujjamilsalim@tractorjunction.com");
  cy.wait(3000);
  cy.get('#password').type("8178072438");
  cy.wait(2000);
  cy.get('#LoginSubmit').click();
  cy.wait(2000);
  cy.get('.new-btn-wrp > .nav-links').trigger('mouseover');
  cy.wait(3000);
  cy.xpath("//li[@class='nav-item dropdown new-btn-wrp login-container']//ul//button").click({force: true});

  cy.wait(3000);
  cy.get('.new-btn').click();
  cy.get('#nav-register').click();
  cy.get('#name').type('testqa');
  cy.get('#mobile').type('9158593785');
  cy.get('#email').type('abc@gmail.com');
  cy.wait(2000);
  cy.get('#state_id').select(2);
  cy.wait(2000);
  cy.get('#dist_id').select(1);
  cy.wait(5000);
  cy.get('#tehsil_id').select(1);
  cy.wait(2000);
  cy.get('#RegisterSubmit').click();
  cy.wait(5000);
});

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("(//a[@id='navbarDropdown20'])[1]").trigger('mouseover');
  cy.xpath("(//a[@title='Tata'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/tata');
  cy.go('back');
});

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");  
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("(//a[@id='navbarDropdown20'])[1]").trigger('mouseover');
  cy.xpath("(//a[@title='Ashok Leyland'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/ashok-leyland');
  cy.go('back');
});

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");    
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("(//a[@id='navbarDropdown20'])[1]").trigger('mouseover');
  cy.xpath("(//a[@title='Eicher'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/eicher');
  cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("(//a[@id='navbarDropdown20'])[1]").trigger('mouseover');
  cy.xpath("(//a[@title='Mahindra'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/mahindra');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("(//a[@id='navbarDropdown20'])[1]").trigger('mouseover');
  cy.xpath("(//a[@title='All Brands'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/brands');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("//a[@title='Find New Trucks']").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/new-trucks');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("//a[@title='Popular Trucks']").click();
  cy.url().should('include','https://trucks.tractorjunction.com/en/popular-trucks');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("//a[@title='Upcoming Trucks']").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/upcoming-trucks');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("//a[@title='Latest Trucks']").click();
  cy.url().should('include','https://trucks.tractorjunction.com/en/latest-trucks');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("//a[@title='BS6 Trucks']").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/bs-vi');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown41').trigger('mouseover');
  cy.xpath("(//a[@title='Compare Trucks'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/compare');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown3').trigger('mouseover');
  cy.xpath("//a[@title='Buy Used Trucks']").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/buy-used-trucks');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown3').trigger('mouseover');
  cy.xpath("(//a[@title='Sell Used Trucks'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/sell-used-truck');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown40').click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/electric');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get(':nth-child(4) > #navbarDropdown2').trigger('mouseover');
  cy.xpath("//a[@title='New Buses']").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/buses');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get(':nth-child(4) > #navbarDropdown2').trigger('mouseover');
  cy.xpath("//a[@title='Popular Buses']").click();
  cy.url().should('include','https://trucks.tractorjunction.com/en/buses/popular');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get(':nth-child(4) > #navbarDropdown2').trigger('mouseover');
  cy.xpath("//a[@title='Upcoming Buses']").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/buses/upcoming');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get(':nth-child(4) > #navbarDropdown2').trigger('mouseover');
  cy.xpath("//a[@title='Latest Buses']").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/buses/latest');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown4').click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/select-your-truck');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get('#navbarDropdown14').click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/onroadprice');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get(':nth-child(7) > .nav-link').trigger('mouseover');
  cy.xpath("(//a[@title='Find Dealers'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/dealers');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get(':nth-child(7) > .nav-link').trigger('mouseover');
  cy.xpath("(//a[@title='Find Service Center'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/service-center');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get(':nth-child(7) > .nav-link').trigger('mouseover');
  cy.xpath("(//a[@title='Spare Parts'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/spare-parts');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
  cy.get(':nth-child(7) > .nav-link').trigger('mouseover');
  cy.xpath("(//a[@title='Body Makers'])[1]").click();
  cy.wait(3000);
  cy.url().should('include','https://trucks.tractorjunction.com/en/body-makers');
  cy.go('back');
  });

  it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown5').trigger('mouseover');
cy.xpath("//a[@title='New Truck Loan']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/new-truck-loan');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown5').trigger('mouseover');
cy.xpath("//a[@title='Used Truck Loan']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/used-truck-loan');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown5').trigger('mouseover');
cy.xpath("//a[@title='Loan Against Truck']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/loan-against-truck');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown5').trigger('mouseover');
cy.xpath("//a[@title='Personal Loan']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/personal-loan');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@title='EMI Calculator']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/emi-calculator');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown1']").trigger('mouseover');
cy.xpath("//a[@title='Tata ACE']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/tata/ace');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown1']").trigger('mouseover');
cy.xpath("//a[@title='Mahindra Blazo']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/mahindra/blazo');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown1']").trigger('mouseover');
cy.xpath("//a[@title='Mahindra Bolero']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/mahindra/bolero');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown1']").trigger('mouseover');
cy.xpath("//a[@title='Ashok Leyland BOSS']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/ashok-leyland/boss');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown1']").trigger('mouseover');
cy.xpath("//a[@title='Ashok Leyland Ecomet']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/ashok-leyland/ecomet');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown9']").trigger('mouseover');
cy.xpath("(//a[text()='Trucks'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/trucks');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown9']").trigger('mouseover');
cy.xpath("(//a[text()='Tippers'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/tippers');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown9']").trigger('mouseover');
cy.xpath("(//a[text()='Trailers'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/tractor');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown9']").trigger('mouseover');
cy.xpath("(//a[text()='Mini Trucks'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/mini-truck');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown9']").trigger('mouseover');
cy.xpath("(//a[text()='Pickups'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/pickup');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown9']").trigger('mouseover');
cy.xpath("(//a[text()='Transit Mixer'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/transit-mixer');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown9']").trigger('mouseover');
cy.xpath("(//a[text()='Auto Rickshaw'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/auto-rickshaw');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown9']").trigger('mouseover');
cy.xpath("(//a[text()='Tempo Traveller'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/tempo-traveller');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("//a[text()='3 Wheeler']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/3-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("(//a[text()='4 Wheeler'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/4-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("//a[text()='6 Wheeler']").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/6-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("(//a[text()='8 Wheeler'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/8-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("(//a[text()='10 Wheeler'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/10-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("(//a[text()='12 Wheeler'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/12-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("(//a[text()='14 Wheeler'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/14-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("(//a[text()='16 Wheeler'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/16-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("(//a[text()='18 Wheeler'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/18-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown10']").trigger('mouseover');
cy.xpath("(//a[text()='22 Wheeler'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/22-wheeler');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown11']").trigger('mouseover');
cy.xpath("(//a[@title='CNG'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/cng');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown11']").trigger('mouseover');
cy.xpath("(//a[@title='Diesel'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/diesel');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown11']").trigger('mouseover');
cy.xpath("(//a[@title='Electric'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/electric');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown11']").trigger('mouseover');
cy.xpath("(//a[@title='Hydrogen'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/hydrogen');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/");   
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown11']").trigger('mouseover');
cy.xpath("(//a[@title='LNG'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/lng');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown11']").trigger('mouseover');
cy.xpath("(//a[@title='LPG'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/lpg');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown11']").trigger('mouseover');
cy.xpath("(//a[@title='Petrol'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/petrol');
cy.go('back');
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown12']").trigger('mouseover');
cy.xpath("(//a[@title='LCV'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/lcv');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown12']").trigger('mouseover');
cy.xpath("(//a[@title='HCV'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/hcv');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown12']").trigger('mouseover');
cy.xpath("(//a[@title='SCV'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/scv');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("//a[@id='navbarDropdown12']").trigger('mouseover');
cy.xpath("(//a[@title='ICV'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/icv');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("(//a[@role='button'])[13]").trigger('mouseover');
cy.xpath("(//a[@title='News'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/news');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("(//a[@role='button'])[13]").trigger('mouseover');
cy.xpath("(//a[@title='Videos'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/en/videos');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("(//a[@role='button'])[13]").trigger('mouseover');
cy.xpath("(//a[@title='Blog'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/blog/');
cy.go('back');
});

it("passes", () => {
  cy.visit("https://trucks.tractorjunction.com/"); 
cy.get('#navbarDropdown7').trigger('mouseover');
cy.xpath("(//a[@role='button'])[13]").trigger('mouseover');
cy.xpath("(//a[@title='Web Story'])[1]").click();
cy.wait(3000);
cy.url().should('include','https://trucks.tractorjunction.com/web-stories');
cy.go('back');


    });

});
});

