describe('Saturday App', () => {
  
  it('displays an info that today is not Saturday', () => {
    cy.intercept('GET', '/isSaturday/*', {
      statusCode: 200,
      body: false
    })
      .visit('/')
      .get('#isSaturday')
      .should('have.text', 'Sobota? To nie dzisiaj :(')
  });

  it('displays an info that today is Saturday', () => {
    cy.intercept('GET', '/isSaturday/*', {
      statusCode: 200,
      body: true
    })
      .visit('/')
      .get('#isSaturday')
      .should('have.text', 'Dzisiaj jest sobota! :D')
  });

  it('displays how long should I wait for Saturday', () => {
    cy.intercept('GET', '/minutesToSaturday/*', {
      statusCode: 200,
      body: 4321
    })
    cy.visit('/')
      .get('#button')
      .click()
      .get('#minutes')
      .should('have.text', 'Zostało 4321 minut do soboty.')
  });
});

describe('Friday App API', () => {

  it('returns 200 for isSaturday', () => {
    cy.request('GET', 'https://cidayq1sbj.execute-api.eu-central-1.amazonaws.com/isSaturday/1700830144570').then((response) => {
      expect(response.status).eq(200);
    })
  });

  it('returns 200 for minutesToSaturday', () => {
    cy.request('GET', 'https://cidayq1sbj.execute-api.eu-central-1.amazonaws.com/minutesToSaturday/1700830144570').then((response) => {
      expect(response.status).eq(200);
    })
  });

});
