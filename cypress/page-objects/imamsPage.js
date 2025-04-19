class imamsPage {

    //selektori 

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
    datePickerForm() {
        return cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    jammatDropdownField() {
        return cy.get('#jamaat')
    }
    jammatDropdownOption() {
        return cy.get('.MuiList-root')
    }
    educationLevelDropdown() {
        return cy.get('#education')
    }
    educationLevelOption() {
        return cy.get('.MuiList-root')
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


    //metode


    clickOnAddBtn() {
        return this.addBtn().click({ force: true })
    }
    fillForm(data) {
        this.firstNameInput().type(data.firstName)
        this.lastNameInput().type(data.lastName)
        this.fatherNameInput().type(data.fatherName)
        this.jmbgInput().type(data.jmbg)
        this.datePickerForm().type(data.dateOfBirth)
        this.birthPlaceInput().type(data.birthPlace)
        this.jammatDropdownField().click()
        this.jammatDropdownOption().contains(data.jammat).click()
        this.educationLevelDropdown().click()
        this.educationLevelOption().contains(data.education).click()
    }
    submitForm() {
        return this.saveBtn().click()
    }
    searchUser(name) {
        this.searchInput().type(name)
        this.searchBtn().click()
    }
    verifyImamIsCreated(data) {
        return this.firstNameColumnInTable().should("contain.text", data)
    }
    clickOnEdit() {
        cy.wait(1000)
        return this.editBtn().click()
    }
    editImamNameInForm(name) {
        return this.firstNameInput().clear().type(name)
    }
    verifyImamIsEdited(data) {
        return this.firstNameColumnInTable().should("contain.text", data)
    }
    }
module.exports = new imamsPage()