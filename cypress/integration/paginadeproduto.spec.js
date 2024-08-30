/// <reference types="Cypress" />

describe('Pagina de produto do saucedemo', function() {
 
    beforeEach(function() {
      cy.visit('https://www.saucedemo.com/v1/inventory.html')
  })
  
    
       //Verifica adicao de produto ao carrinho
       it('Verifica adicao de produto ao carrinho', function() {
       cy.get(':nth-child(1) > .pricebar > .btn_primary').should('exist'); //Seleciona produto e adiciona ao carrinho
       cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

       cy.get('.shopping_cart_link').click(); //Abre carrinho e verifica se produto foi adicionado
       cy.get('.item_pricebar > .btn_secondary').should('exist');
       cy.wait(500); })

      //Verifica se  pode excluir um produto do carrinho
      it('Verifica se  pode excluir um produto do carrinho', function() {
      cy.get('.item_pricebar > .btn_secondary').click();
      cy.get('.item_pricebar > .btn_secondary').should('not.exist');
      cy.wait(500);
      })

      //Adiciona produto ao carrinho e segue para checkout
    it('Adiciona produto ao carrinho e seguir para checkout', function() {
    cy.get('.btn_secondary').click(); //Volta para loja e adicionar um produto ao carrinho
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
    cy.get('.shopping_cart_link').click();
    
    cy.get('.btn_action').click(); //Clica no botão de checkout
    cy.get('[data-test="firstName"]').type('Maryana'); //Preenche nome, sobrenome e codigo postal
    cy.wait(500);
    cy.get('[data-test="lastName"]').type('Feijo');
    cy.wait(500);
    cy.get('[data-test="postalCode"]').type('123');
    cy.wait(500);
    cy.get('.btn_primary').click();
    cy.get('.btn_action').should('exist');
    cy.get('.btn_action').click();
    cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get\n                there!\n            ');
    cy.wait(500);
    
    })

    //Verifica logout
    it('Verifica logout', function() {
    cy.get('.bm-burger-button > button').click();
    cy.get('#logout_sidebar_link').click();
    cy.get('#login-button').should('exist');
    cy.wait(500);
          })

        })

   
        describe('Carrinho', function() {
 
          beforeEach(function() {
            cy.visit('https://www.saucedemo.com/v1/cart.html')
        })
    //Verifica botao 'Voltar aos produtos'
    it('Verifica botao Voltar aos produtos', function() {
    cy.get('.btn_secondary').should('exist');
    cy.get('.btn_secondary').click({ force: true });
    cy.get('.product_label').should('exist');
    cy.wait(500);
    })
 
  }) 




