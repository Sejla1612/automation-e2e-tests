class usersPage {
//slektori

    addBtn() {
        return cy.get('.mdc-button__ripple')
    }
    emailInput() {
        return  cy.get('#email')
    }
    userNameInput() {
        return cy.get('#username')
    }
    activityToggleSwitch() {
        return cy.get('#isActive')
    }
    saveBtn() {
        return cy.get('.MuiFormControl-root > .MuiButtonBase-root')
    }
    searchInput() {
        return cy.get('#searchField')
    }
    searchBtn() {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }
    userNameColumnInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="username"]')
    }

    //metode

    clickOnAddBtn() {
        return this.addBtn().click({ force: true })
    }
    fillForm(data) {
        this.emailInput().type(data.email)
        this.userNameInput().type(data.userName)
        this.activityToggleSwitch().click()
    }
    submitForm() {
        this.saveBtn().click()
        cy.wait(3000)
    }
    searchUser(name) {
        this.searchInput().type(name)
        this.searchBtn().click()
    }
    verifyUserProfileIsCreated(data) {
        return this.userNameColumnInTable().should("contain.text", data)
    }
}
module.exports = new usersPage ()