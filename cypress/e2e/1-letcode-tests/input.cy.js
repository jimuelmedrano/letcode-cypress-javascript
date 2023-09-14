/// <reference types="cypress" />

describe('Letcode Input Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('test_endpoint'))
      cy.get('a[href*="/edit"]').click()
      cy.wait(1000)
    })
  
    it('Input full name', () => {
      cy.inputText('#fullName','Jimuel Renzo Medrano')
    })

    it('Append Text', () => {
      cy.inputText('#join',' at automation testing')
    })

    it('Get Text', () => {
      cy.logText('#getMe')
    })

    it('Clear Text', () => {
      cy.get('#clearMe').clear()
    })

    it('Verify if input is disabled', () => {
      cy.get('#noEdit').should('be.disabled')
    })

    it('Verify if input is readonly', () => {
      cy.get('#dontwrite').should('have.attr', 'readonly')
    })
})