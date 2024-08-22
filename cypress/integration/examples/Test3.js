/// <reference types = "Cypress"/>
/// <reference types = "cypress-iframe"/>

describe('Test practise',function(){
    it('Test ex1',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__calendar-button').click();
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__year-view__months > :nth-child(8)').should('contain','August')
    })
})