Cypress.Commands.add('authVisitsWebview', () => {
    cy.visit(Cypress.env('visitasWebView') + '/?token=' + Cypress.env('authToken'));
   
  });
  