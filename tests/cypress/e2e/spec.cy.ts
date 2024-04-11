describe('Friday App', () => {
  
  it('displays an info that today is not Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: false
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Piątek? To nie dzisiaj :(')
  });

  it('displays an info that today is Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: true
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Dzisiaj jest piątek! :D')
  });

  it('displays an info with minutes', () => {
    cy.intercept('GET', '/minutesToFriday/*', {
      statusCode: 200,
      body: 1234
    })
      .visit('/')
      .get('#button')
      .click()
      .get('#minutes')
      .should('have.text', 'Zostało 1234 minut do piątku.')
  });
});

describe('Friday App API', () => {

  it('is alive', () => {
    cy.request(`${Cypress.env('apiUrl')}/isFriday/1712819067852`).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

});