describe('/Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/user_application');
  });

  it('Display invalid Password ', () => {
    cy.get('#personal_name').type('A');
    cy.get('#personal_name-errorMsg').should(
      'have.text',
      'Name must be between 2 and 30 character long'
    );
    cy.get('#personal_name').clear();

    cy.get('#personal_name').type('@AC');
    cy.get('#personal_name-errorMsg').should('have.text', 'Invalid Name');
    cy.get('#personal_name').clear();

    cy.get('#personal_name').type('Achan @wer');
    cy.get('#personal_name-errorMsg').should('have.text', 'Invalid Name');
    cy.get('#personal_name').clear();

    cy.get('#personal_name').type('Aaron !Test');
    cy.get('#personal_name-errorMsg').should('have.text', 'Invalid Name');
    cy.get('#personal_name').clear();

    cy.get('#personal_name').type('#');
    cy.get('#personal_name-errorMsg').should('have.text', 'Invalid Name');
    cy.get('#personal_name').clear();

    cy.get('#personal_name').type('*&');
    cy.get('#personal_name-errorMsg').should('have.text', 'Invalid Name');
    cy.get('#personal_name').clear();
  });

  it('Display valid personal name', () => {
    cy.get('#personal_name').type('Aa').should('have.value', 'Aa');
    cy.get('#personal_name').clear();

    cy.get('#personal_name')
      .type('Aaron Test')
      .should('have.value', 'Aaron Test');
    cy.get('#personal_name').clear();
  });
});
