/// <reference types="Cypress" />

describe('My First test suite',  function(){

    it('My first test case', function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        Cy.get('#mousehover').invoke('show');
        cy.contains('Top').click()
        cy.url.should('include','top')
    })
})