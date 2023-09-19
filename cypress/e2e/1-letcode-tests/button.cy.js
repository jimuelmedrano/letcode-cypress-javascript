/// <reference types="cypress" />

describe('Letcode Button Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('test_endpoint'))
      cy.get('a[href*="/buttons"]').click()
      cy.wait(1000)
    })
  
    it('Click and navigate back', () => {
      cy.clickElm('#home')
      cy.go('back')
    })

    it('Get element position', () => {
      cy.get('#position')
        .then($target => {
            let coordinates = $target[0].getBoundingClientRect();
            cy.log("Button X Coordinate: "+coordinates.x)
            cy.log("Button Y Coordinate: "+coordinates.y)
            cy.log("Button Bottom Coordinate: "+coordinates.bottom)
            cy.log("Button Left Coordinate: "+coordinates.left)
            cy.log("Button Right Coordinate: "+coordinates.right)
            cy.log("Button Top Coordinate: "+coordinates.top)
            cy.log("Button Width: "+coordinates.width)
            cy.log("Button Height: "+coordinates.height)
      })
    })

    it('Get element color', () => {
      cy.get('#color')
      .invoke('css', 'background-color')
      .then((bgcolor) => {
        cy.log("Button Color: "+bgcolor)
      })
    })
    

    it('Get element width and height', () => {
      cy.get('#property')
        .then($target => {
            let coordinates = $target[0].getBoundingClientRect();
            cy.log("Button Width: "+coordinates.width)
            cy.log("Button Height: "+coordinates.height)
      })
    })

    it('Confirm disabled element', () => {
      cy.get('#isDisabled').should('be.disabled')
    })

    it('Hold button', () => {
      let buttonXpath = "//label[normalize-space()='Click and Hold Button']//following-sibling::div//button"
      cy.xpath(buttonXpath).trigger('mousedown')
      cy.wait(1000)
      cy.xpath(buttonXpath).trigger('mouseup')  
    })
    
})