describe('Friday App', () => {
  
  it('displays an info that today is not Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: false
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'piątek? To nie dzisiaj :(')
      .percySnapshot('Screenshot - spec-32.cy.ts')
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

  it('displays how long should I wait for Friday', () => {
    cy.intercept('GET', '/minutesToFriday/*', {
      statusCode: 200,
      body: 4321
    })
    cy.visit('/')
      .get('#button')
      .click()
      .get('#minutes')
      .should('have.text', 'Zostało 4321 minut do piątku.')
  });
});
