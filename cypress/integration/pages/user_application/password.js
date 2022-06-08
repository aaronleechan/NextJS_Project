describe('/Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/user_application');
  });

  it('Display invalid Password', () => {
    cy.get('#password').type('A');
    cy.get('#password-errorMsg').should(
      'have.text',
      'New Password does not meet the requirements'
    );
    cy.get('#password').clear();

    cy.get('#password').type('ABCDEFGHIJKLMN');
    cy.get('#password-errorMsg').should(
      'have.text',
      'New Password does not meet the requirements'
    );
    cy.get('#password').clear();

    cy.get('#password').type('Abcdefghijklmn');
    cy.get('#password-errorMsg').should(
      'have.text',
      'New Password does not meet the requirements'
    );
    cy.get('#password').clear();

    cy.get('#password').type('A12345');
    cy.get('#password-errorMsg').should(
      'have.text',
      'New Password does not meet the requirements'
    );
    cy.get('#password').clear();

    cy.get('#password').type('aB1');
    cy.get('#password-errorMsg').should(
      'have.text',
      'New Password does not meet the requirements'
    );
    cy.get('#password').clear();

    cy.get('#password').type('APassw0rd').should('have.value', 'APassw0rd');
    cy.get('#password').clear();
  });
});
