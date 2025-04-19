

class BookOfTheDeadPage {

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
    genderDropdown() {
        return cy.get('#education')
    }
    genderOption() {
        return cy.get('[data-value="Žensko"]')
    }
    datePickerForm() {
        return cy.get('#\\:r1p\\:')
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
    pickDeathDate() {
        return cy.get('#\\:r1u\\:')
    }
    deathCauseInput() {
        return cy.get('#deathCause')
    }
    placeOfBurialDropDownField() {
        return cy.get('#funeralPlace')
    }
    placeOfBurialOption() {
        return cy.get('.MuiPaper-root')
    }
    imamDzenazeDropDownField() {
        return cy.get('#imam')
    }
    imamDzenazeOption() {
        return cy.get('#\\:r24\\:')
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
        this.genderDropdown().click()
        this.genderOption().click()
        this.birthPlaceInput().type(data.birthPlace)
        this.fatherNameInput().type(data.fatherName)
        this.motherNameInput().type(data.motherName)
        this.pickDeathDate().type(data.deathDate)
        this.deathCauseInput().type(data.deathCause)
        this.placeOfBurialDropDownField().click()
        this.placeOfBurialOption().contains(data.placeOfBurial).click()
        this.imamDzenazeDropDownField().click()
        this.imamDzenazeOption().contains(data.imamDzenaze).click()
    }
    submitForm() {
        this.saveBtn().click()
        cy.wait(3000)
    }
    searchUser(name) {
        this.searchInput().type(name)
        this.searchBtn().click()
    }
    verifssProfileIsCreated(data) {
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
    verifyProfileIsEdited(data) {
        return this.fatherNameColumInTable().should("contain.text", data)
    }
}
module.exports = new BookOfTheDeadPage()