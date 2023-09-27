/// <reference types="cypress" />

describe('Letcode Drag and Drop Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('test_endpoint'))
      cy.get('a[href*="/dropable"]').click()
      cy.wait(1000)
    })
  
    it('Drag the element to dropable element', () => {
      cy.get('#draggable').drag('#droppable',{force: true})
    })
})