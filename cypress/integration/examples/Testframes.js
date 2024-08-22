/// <reference  types = "Cypress"/>
/// <reference types ="cypress-iframe"/>

import 'cypress-iframe'

describe('Frames test',function(){
   
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
    it('demo examples',function(){
      
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        this.data.products.forEach(function(element) {
            cy.addproduct(element)
        })
           
            cy.contains('Checkout').click()
            var sum= 0
            cy.get('tr td:nth-child(4) strong').each((el,index,list)=>{
                //cy.log(el.text())
                const actualtext = el.text()
                var res = actualtext.split(" ");
                res = res[1].trim()
               sum= Number(sum)+Number(res)
            }).then(function(){
            cy.log(sum)
            })
            cy.get('.btn-success').click()
            
            cy.get('#country').type('India')
            cy.get('.suggestions > ul > li > a').click()
            cy.get('#checkbox2').click({force: true})
            cy.get('.ng-untouched > .btn').click()
            //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
            cy.get('.alert').then(function(element){
                const ac = element.text()
                if(ac.includes("Success")){
                    console.log('Test cases passsed')
                }
            })

    })
})