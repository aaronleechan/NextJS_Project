describe('/Navigation',()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/user_application')
    })

    it('Displays User Application by default', () => {

        //User Application Form Default has 5 fields
        cy.get('input').should('have.length', 5);

        cy.get('button').should('have.length',2);

        cy.get('#personal_name').should('have.length', 1);

        cy.get('#email').should('have.length', 1);

        cy.get('#password').should('have.length', 1);

        cy.get('#phoneNumber').should('have.length', 1);

        cy.get('#cancel_button').should('have.length', 1);

        cy.get('#submit_button').should('have.length', 1);
    })

    it('Submit Button Disable by Default',()=>{
        cy.get('#submit_button').should('be.disabled')
    })

    it('Cancel Button Enable by Default',()=>{
        cy.get('#cancel_button').should('not.be.disabled')
    })

    it('Display invalid personal name',()=>{
        cy.get('#personal_name').type('A')
        cy.get('#personal_name-errorMsg').should('have.text','Name must be between 2 and 30 character long')
        cy.get('#personal_name').clear()

        cy.get('#personal_name').type('@AC')
        cy.get('#personal_name-errorMsg').should('have.text','Invalid Name')
        cy.get('#personal_name').clear()
    })


})