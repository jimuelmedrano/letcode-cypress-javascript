/// <reference types="cypress" />

describe('Letcode Window Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('test_endpoint'))
      cy.get('a[href*="/windows"]').click()
      cy.wait(1000)
    })
  
    it('Click home and go back', () => {
      cy.log('Current Page:' + cy.title())
      cy.get('#home').click()
      cy.log('Home Page:' + cy.title())
    })

    
})