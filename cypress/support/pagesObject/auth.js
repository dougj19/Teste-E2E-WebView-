Cypress.Commands.add('auth', (url, username, password) => {
    cy.log('Page auth');
    cy.visit(url);
    cy.log('Auth');
    cy.get('#ndamatrcula-1').type(username);
    cy.get('#senha-1').type(password);
    cy.get('#button-35').click({ force: true });
  });
  