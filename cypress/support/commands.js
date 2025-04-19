Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://dzematmgmt-dev.uradinesto.ba');
        cy.get('#usernameOrEmail').type(email);
        cy.get('#password').type(password);
        cy.get(':nth-child(3) > .MuiButtonBase-root').click();
        cy.get("#root").should("be.visible");
})