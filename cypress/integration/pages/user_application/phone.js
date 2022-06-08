describe('/Navigation',()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/user_application')
    })

    it('Display invalid phoneNumber',()=>{
        cy.get('#phoneNumber').type('321232')
        cy.get('#phoneNumber-errorMsg').should('have.text','Phone number is invalid.')
        cy.get('#phoneNumber').clear()

        cy.get('#phoneNumber').type('1234')
        cy.get('#phoneNumber-errorMsg').should('have.text','Phone number is invalid.')
        cy.get('#phoneNumber').clear()

        cy.get('#phoneNumber').type('@12323423')
        cy.get('#phoneNumber-errorMsg').should('have.text','Phone number is invalid.')
        cy.get('#phoneNumber').clear()

        cy.get('#phoneNumber').type('A123iu')
        cy.get('#phoneNumber-errorMsg').should('have.text','Phone number is invalid.')
        cy.get('#phoneNumber').clear()

        cy.get('#phoneNumber').type('HelloWorld')
        cy.get('#phoneNumber-errorMsg').should('have.text','Phone number is invalid.')
        cy.get('#phoneNumber').clear()

        cy.get('#phoneNumber').type('123671212312341')
        cy.get('#phoneNumber-errorMsg').should('have.text','Phone number is invalid.')
        cy.get('#phoneNumber').clear()
    })

})