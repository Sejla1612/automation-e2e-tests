class birthRegistryPage {

    // selektori 
    addBtn() {
        return cy.get('.mdc-button__ripple')
    }
    firstNameInput() {
        return cy.get('#fname')
    }
    lastNameInput() {
        return cy.get('#lname')
    }
    birthPlaceInput() {
        return cy.get('#birthPlace')
    }
    fatherNameInput() {
        return cy.get('#fatherName')
    }
    motherNameInput() {
        return cy.get('#motherName')
    }
    genderDropdown() {
        return cy.get('#education')
    }
    genderOption() {
        return cy.get('[data-value="Žensko"]')
    }
    aqiqahDatePicker() {
        return cy.get('#\\:r1u\\:')
    }
    datePickerForm() {
        return cy.get('#\\:r1p\\:')
    }
    imamsDropdownField(){
        return cy.get('#imam')
    }
    imamstDropdownOption() {
        return cy.get('.MuiPaper-root')
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
    firstNameColumnInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="fname"]')
    }
    editBtn() {
        return cy.get('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root')
    }
    fatherNameColumInTable(){
        return cy.get('.MuiDataGrid-root').find('[data-field="fatherName"]')
    }

    //metode

    clickOnAddBtn() {
        return this.addBtn().click({ force: true })
    }
    fillForm(data) {
        this.firstNameInput().type(data.firstName)
        this.lastNameInput().type(data.lastName)
        this.birthPlaceInput().type(data.birthPlace)
        this.fatherNameInput().type(data.fatherName)
        this.motherNameInput().type(data.motherName)
        this.genderDropdown().click()
        this.genderOption().click()
        this.aqiqahDatePicker().type(data.aqiqahDate)
        this.imamsDropdownField().click()
        this.imamstDropdownOption().contains(data.imams).click()
        this.datePickerForm().type(data.dateOfBirth)

    }
    submitForm() {
        this.saveBtn().click()
        cy.wait(3000)
    }
    searchUser(name) {
        this.searchInput().type(name)
        this.searchBtn().click()
    }
    verifyBirthRegistryProfileIsCreated(data) {
        return this.firstNameColumnInTable().should("contain.text", data)
    }
    clickOnEdit() {
        cy.wait(1000)
        return this.editBtn().click()
    }
    editFatherNameInForm(Fathername) {
        cy.wait(3000)
        return this.fatherNameInput().clear().type(Fathername)
    }
    verifyBirthRegistryIsEdited(data) {
        return this.fatherNameColumInTable().should("contain.text", data)
    }
}
module.exports = new birthRegistryPage()