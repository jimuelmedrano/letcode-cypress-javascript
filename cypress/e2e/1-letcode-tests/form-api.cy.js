/// <reference types="cypress" />

describe('Letcode Form with API Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('test_endpoint'))
      cy.get('a[href*="/forms"]').click()
      cy.wait(1000)
    })
  
    it('Input form using API Data', () => {
      cy.request('GET',Cypress.env('random_user_api')).then((response) =>{
        //Expecting the response status code to be 200
        cy.log(JSON.stringify(response))
        cy.log("Status Code: "+response.status)

        cy.get('#firstname').type(response.body.first_name)
        cy.get('#lasttname').type(response.body.last_name)
        cy.get('#email').clear()
        cy.get('#email').type(response.body.email)
        cy.xpath("//label[@id='countrycode']//following-sibling::div//select").select(1)
        cy.get('#Phno').type('9123456789')
        cy.get('#Addl1').type(response.body.address.street_address)
        cy.get('#Addl2').type(response.body.address.street_name)
        cy.get('#state').type(response.body.address.state)
        cy.get('#postalcode').type(response.body.address.zip_code)
        cy.xpath("//label[@id='country']//following-sibling::div//select").select('Philippines')
        cy.get('#Date').type('1999-01-02')
        cy.get('#male').click()
        cy.get('input[type="checkbox"]').click()
        cy.wait(1000)
        cy.get('input[type="submit"]').click()
      })
    })
})