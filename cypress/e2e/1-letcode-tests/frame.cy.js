/// <reference types="cypress" />

describe('Letcode Frame Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('test_endpoint'))
      cy.get('a[href*="/frame"]').click()
      cy.wait(1000)
    })
  
    it('Input full name inside first frame', () => {
      // frame loading
      cy.frameLoaded('#firstFr');
      //shifting focus
      cy.iframe('#firstFr').find('input[name="fname"]').then((elm)=>{
        cy.inputText(elm,'Jimuel Renzo')
      })
      cy.iframe('#firstFr').find('input[name="lname"]').then((elm)=>{
        cy.inputText(elm,'Medrano')
      })
    })

    it('Input email inside second frame', () => {
      // frame loading
      cy.frameLoaded('#firstFr');
      //enter the first frame and find the inner frame
      cy.enter('#firstFr').then(getBody => {
        getBody().find('iframe[src="innerFrame"]')
          .its('0.contentDocument')
          .its('body').within(() => {
            cy.inputText('input[name="email"]','test@email.com')
          })
        })
    })
    
})