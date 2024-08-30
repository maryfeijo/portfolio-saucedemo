/// <reference types="Cypress" />

describe('Pagina inicial do saucedemo', function() {
 
  beforeEach(function() {
    cy.visit('https://www.saucedemo.com/v1/index.html')
})

  // Verifica o titulo da pagina inicial 
    it('verifica o título da aplicação', function() {
  cy.title() .should('be.equal', 'Swag Labs')
    })
  

  // Preenche usuario e senha corretos
  it('Preenche usuario e senha corretos', function(){
    cy.get('[data-test="username"]') .type('standard_user')
    cy.get('[data-test="password"]') .type('secret_sauce')
    cy.get('input[type="submit"]') .click()
  })

// Preenche usuario incorreto e senha correta
it('Preenche usuario incorreto e senha correta', function(){
  cy.get('[data-test="username"]') .type('123')
  cy.get('[data-test="password"]') .type('secret_sauce')
  cy.get('input[type="submit"]') .click()
})

//Preenche usuario correto e senha incorreta
it('Preenche usuario correto e senha incorreta', function(){
  cy.get('[data-test="username"]') .type('standard_user')
  cy.get('[data-test="password"]') .type('123')
  cy.get('input[type="submit"]') .click()
})


})