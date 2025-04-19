class jammatsPage {

    // slektori 

    addBtn() {
        return cy.get('.mdc-button__ripple')
    }
    jammatNameInput() {
        return cy.get('#name')
    }
    saveBtn() {
        return cy.get('.MuiButtonBase-root')
    }
    searchInput() {
        return cy.get('#searchField')
    }
    searchBtn() {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }
    jammatNameColumnInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="name"]')
    }
    editBtn() {
        return cy.get('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root')
    }
    jammatColumnInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="name"]')
    }

    //metode

    clickOnAddBtn() {
        cy.wait (1000)
        return this.addBtn().click({ force: true })
    }
    fillForm(data) {
        return this.jammatNameInput().type(data)
    }
    submitForm() {
        return this.saveBtn().click()
    }
    searchUser(name) {
        this.searchInput().type(name)
        this.searchBtn().click()

    }
    verifyJammatIsCreated(data) {
        return this.jammatNameColumnInTable().should("contain.text", data)
    }
    clickOnEdit() {
        cy.wait(1000)
        return this.editBtn().click()
    }

    editJammatNameInForm(name) {
        return this.jammatNameInput().clear().type(name)
    }
    verifyJammatIsEdited(data) {
        return this.jammatColumnInTable().should("contain.text", data)
    }

}
module.exports = new jammatsPage
