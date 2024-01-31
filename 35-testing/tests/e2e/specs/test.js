// https://docs.cypress.io/api/table-of-contents

// describe('My First Test', () => {
//   it('Visits the app root url', () => {
//     cy.visit('/');
//     cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
//   });
// });

// describe('Test Name', () => {
//   // Test execution
// });

// it('Example name', () => {
//   // Step execution
// });

// // comandos
// cy.visit('/'); // visita una url
// cy.url(); // obtiene la url n la que nos encontramos
// cy.contains('label', 'Content'); // Comprueba si la pagina contiene el elementodescripto
// cy.should('containes', 'hello cypress'); // deveria contener este texto
// cy.should('have.css', 'color', '#ff0000'); // comprueba en general que tenga un css y el color rojo
// cy.request('POST', 'uri', {}); // para realizar peticiones
// cy.get('.class'); // obtener un elemento en funcion a su clase
// cy.get('#id'); // obtener un elemento en funcion a su id
// cy.get('[data-test-id="myId"]'); // obtener un elemento en funcion a su argumento
// cy.click(); // accion: click
// cy.type('username'); // accion: escribir

describe('Counter Feature', () => {
  it('user access to page', () => {
    cy.visit('/');
    cy.contains('h1', 'Counter App');
  });
  it('user can increment counter', () => {
    cy.visit('/');
    cy.get('#counterInfo').contains('0');
    cy.contains('button', 'Increment').click().click();
    cy.get('#counterInfo').contains('2');
  });
});
