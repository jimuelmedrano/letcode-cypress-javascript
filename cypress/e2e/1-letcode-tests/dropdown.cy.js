/// <reference types="cypress" />

describe('Letcode Dropdown Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('test_endpoint'))
      cy.get('a[href*="/dropdowns"]').click()
      cy.wait(1000)
    })
  
    it('Select with visible text', () => {
      cy.get('#fruits').select('Apple').should('contain.text','Apple')
    })

    it('Select multiple options', () => {
      cy.get('#superheros').select(['Spider-Man', 'Iron Man','Thor'])
    })

    it('Select last option and print all options', () => {
      cy.xpath(`//select[@id='lang']//option`).each((item, index, list) => {
        cy.log(Cypress.$(item).text())
        if(index == list.length-1){
          cy.get('#lang').select(index)
        }
      });
    })

    it('Select with value', () => {
      cy.get('#country').select('India')
    })

})