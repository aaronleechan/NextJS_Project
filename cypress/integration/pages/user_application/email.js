describe('/Navigation',()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/user_application')
    })

    it('Display invalid Email',()=>{
        cy.get('#email').type('@abc.com')
        cy.get('#email-errorMsg').should('have.text','Email address is invalid')
        cy.get('#email').clear()

        cy.get('#email').type('abc@123/com')
        cy.get('#email-errorMsg').should('have.text','Email address is invalid')
        cy.get('#email').clear()

        cy.get('#email').type('@123@.com')
        cy.get('#email-errorMsg').should('have.text','Email address is invalid')
        cy.get('#email').clear()

        cy.get('#email').type('A12345')
        cy.get('#email-errorMsg').should('have.text','Email address is invalid')
        cy.get('#email').clear()

        cy.get('#email').type('aB1')
        cy.get('#email-errorMsg').should('have.text','Email address is invalid')
        cy.get('#email').clear()

        cy.get('#email').type('APassw0rd')
        cy.get('#email-errorMsg').should('have.text','Email address is invalid')
        cy.get('#email').clear()
    })

})