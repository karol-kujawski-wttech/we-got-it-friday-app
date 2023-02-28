describe('Friday App', () => {
  
  it('displays an info that today is not Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: false
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Piątek? To nie dzisiaj :( !!')
      .percySnapshot();
  });

  it('displays an info that today is Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: true
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Dzisiaj jest piątek! :D');
  });

  it('displays how long should I wait for Friday', () => {
    cy.intercept('GET', '/minutesToFriday/*', {
      statusCode: 200,
      body: 1234
    })
    cy.visit('/')
      .get('#button')
      .click()
      .get('#minutes')
      .should('have.text', 'Zostało 1234 minut do piątku.')
  });
});

describe('Friday App API', () => {

  it('returns 200 for isFriday', () => {
    cy.request('GET', `${Cypress.env('apiUrl')}/isFriday/1674754910507`).then((response) => {
      expect(response.status).eq(200);
    })
  })

  it('returns 200 for minutesToFriday', () => {
    cy.request('GET', `${Cypress.env('apiUrl')}/minutesToFriday/1674754910507`).then((response) => {
      expect(response.status).eq(200);
    })
  })

});
