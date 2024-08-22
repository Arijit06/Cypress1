describe('My second test suite',function(){
    it('My first test',function(){
    cy.visit('https://login5.intg.voya.com/voyassoui/index.html?domain=upssavings.intg.voya.com#/login-pweb')
    cy.wait(5000)
    cy.get('.register-now').click();
    cy.wait(5000)
    cy.get('#selectPref_chosen').children().eq(1).click();
    cy.wait(5000)
    })
})