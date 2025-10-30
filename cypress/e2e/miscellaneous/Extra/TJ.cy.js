import urls from './data/urls.json'
it("should succesfully load each url in the sitemap", () => {
  urls.forEach((url) => {
    cy.request({
      url: url,
      failOnStatusCode:false
    })
      .then((resp) => {
        if(resp.status===200){
          expect(resp.status).to.eq(200);
        }
       else{
       
        expect(resp.status).to.eq(404)
      
       }
      })
  });
});