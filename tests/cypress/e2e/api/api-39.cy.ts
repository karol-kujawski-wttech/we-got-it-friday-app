describe('Friday App API', () => {

    it('returns 200 for isSaturday', () => {
      cy.request('GET', Cypress.env('apiUrl') + '/isSaturday/1700830144570').then((response) => {
        expect(response.status).eq(200);
      })
    });
  
    it('returns 200 for minutesToSaturday', () => {
      cy.request('GET', Cypress.env('apiUrl') + '/minutesToSaturday/1700830144570').then((response) => {
        expect(response.status).eq(200);
      })
    });
  
  });