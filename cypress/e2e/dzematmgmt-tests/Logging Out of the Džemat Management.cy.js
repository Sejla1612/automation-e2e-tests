describe('Logging Out of the Džemat Management.cy', () => {
    beforeEach(() => {
        cy.visit('https://dzematmgmt-dev.uradinesto.ba')
        cy.get('#usernameOrEmail').type("admin")
        cy.get('#password').type("admin")
        cy.get(':nth-child(3) > .MuiButtonBase-root').click()
        cy.get("#root").should("be.visible")

    
    })
    it('Logging Out of the Džemat Management', () => {
        cy.contains("Odjava").click()
        cy.get('.navbar-list > :nth-child(12)').click()
        cy.wait(1000)
       
    })







})