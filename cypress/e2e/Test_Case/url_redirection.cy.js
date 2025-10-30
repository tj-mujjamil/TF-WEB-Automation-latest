import '../../support/commands';

describe('URL Redirection and Status Code Capture', () => {
  beforeEach(() => {
    cy.fixture('urls').as('urlData');
  });

  it('Should visit each endpoint, combine with baseUrl, and capture status code', function () {
    const { baseUrl, endpoints } = this.urlData;

    endpoints.forEach(endpoint => {
      const fullUrl = baseUrl + endpoint;
      cy.request({
        url: fullUrl,
        failOnStatusCode: false,
        followRedirect: true,
        timeout: 10000
      }).then((response) => {
        cy.log(`Visited: ${fullUrl}`);
        cy.log(`Final Status: ${response.status}`);
      });
    });
  });
});







