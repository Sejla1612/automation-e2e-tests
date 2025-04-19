class treasuresPage {

    addBtn() {
        return cy.get('.mdc-button__ripple')
    }
    firstNameInput() {
        return cy.get('#fname')
    }
    lastNameInput() {
        return cy.get('#lname')
    }
    fatherNameInput() {
        return cy.get('#fatherName')
    }
    jmbgInput() {
        return cy.get('#jmbg')
    }
    birthPlaceInput() {
        return cy.get('#birthPlace')
    }
    birthDateInput() {
        return cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    saveBtn() {
        return cy.get(':nth-child(7) > .MuiButtonBase-root')
    }
    searchInput() {
        return cy.get('#searchField')
    }
    searchBtn() {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }
    firstNameColumnInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="fname"]')
    }
    editBtn() {
        return cy.get('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root')
    }
    lastNameColumnInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="lname"]')
    }

    //metode

    clickOnAddBtn() {
        return this.addBtn().click({ force: true })
    }

    fillForm(data) {
        this.firstNameInput().type(data.firstName);
        this.lastNameInput().type(data.lastName);
        this.fatherNameInput().type(data.fatherName);
        this.jmbgInput().type(data.jmbg);
        this.birthPlaceInput().type(data.birthPlace);
        this.birthDateInput().clear().type(data.birthDate);
    }
    submitForm() {
        return this.saveBtn().click()
    }
    searchUser(name) {
        this.searchInput().type(name)
        this.searchBtn().click()
    }
    verifyTreasurerIsCreated(data) {
        return this.firstNameColumnInTable().should("contain.text", data.firstName)
    }
    clickOnEdit() {
        cy.wait(1000)
        return this.editBtn().click()
    }
    editLastNameInForm(lastName) {
        return this.lastNameInput().clear().type(lastName)
    }
    verifyTreasurerIsEdited(data) {
        return this.lastNameColumnInTable().should("contain.text", data)
    }
}
module.exports = new treasuresPage()