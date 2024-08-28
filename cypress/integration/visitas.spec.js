const { should } = require("chai");

describe('TEST: Visitas', () => {
    before( ()=> {
      cy.auth(Cypress.env('baseUrl'), Cypress.env('username'), Cypress.env('password'));
  })
    
  
  it('acesso modulos visitas ', ()=>{
  
    cy.get('.box-bg--water-green > .mt-1').contains('Visitas 2.0').should('be.visible')
    cy.get('.box-bg--water-green').click()
    cy.get('.page-title').contains('Módulo de Visitas').should('be.visible')

     })

  it('Checklist e filtros', ()=> {
  
    cy.get('.box-bg--water-green').click()
    cy.wait(2000);
    cy.get(':nth-child(1) > .left-area > svg').click()
    cy.get(':nth-child(1) > .left-area > svg').click()

     })
  
  });
  