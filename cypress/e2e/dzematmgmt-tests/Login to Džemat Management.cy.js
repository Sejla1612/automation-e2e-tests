const { usernameInp } = require("../../page-objects/loginPage")

describe('Login to Džemat Managment', () => {
    it('Login to Džemat Managment with admin account', () => {
      cy.visit('https://dzematmgmt-dev.uradinesto.ba')
      usernameInp().type("admin")
      cy.get('#password').type("admin")
      cy.get(':nth-child(3) > .MuiButtonBase-root').click()
      cy.get("#root").should("be.visible")
    })
})