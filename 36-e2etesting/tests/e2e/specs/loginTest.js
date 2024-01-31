// https://docs.cypress.io/api/table-of-contents

describe('Login Test Feature', () => {
  it('user cant not access to protected routes when is not logged in', () => {
    cy.visit('/');
    cy.url().should('eq', 'http://localhost:8080/login');
  });
  it('user with wrong credentials can not pass', () => {
    cy.visit('/login');
    cy.get('#email').type('user@email.com');
    cy.get('#password').type('0569734');
    cy.get('button').click();
    cy.contains('p', 'Wrong email or password');
    cy.visit('/');
    cy.url().should('eq', 'http://localhost:8080/login');
  });

  it('user can successfully login', () => {
    cy.visit('/login');
    cy.get('#email').type('admin@admin.com');
    cy.get('#password').type('12345678');
    cy.get('button').click();
    cy.url().should('eq', 'http://localhost:8080/');
  });
});
