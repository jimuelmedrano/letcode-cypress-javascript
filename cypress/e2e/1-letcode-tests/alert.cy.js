/// <reference types="cypress" />

describe('Letcode Alert Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('test_endpoint'))
      cy.get('a[href*="/alert"]').click()
      cy.wait(1000)
    })
  
    it('Accept alert', () => {
      cy.get('#accept').click()
      cy.wait(500)
      cy.on('window:alert', (t) => {
        cy.log(t)
      });
      cy.on('window:confirm', (t) => {
        return true;
      });
    })

    it('Dismiss alert', () => {
      cy.get('#confirm').click()
      cy.wait(500)
      cy.on('window:alert', (t) => {
        cy.log(t)
      });
      cy.on('window', (t) => {
        return false;
      });
    })

    it('Prompt alert', () => {
      cy.window().then(($win) => {
        //input text
        cy.stub($win, 'prompt').returns('Renzo')
        //button that will trigger the prompt
        cy.get('#prompt').click()
      })
    })

    it('Modern alert', () => {
      cy.get('#modern').click()
      cy.xpath(`//button[@aria-label='close']`).click()
    })

})