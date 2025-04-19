class weddingPage {
    addBtn() {
        return cy.get('.mdc-button__ripple')
    }
    imamsDropdownField() {
        return cy.get('#imam')
    }
    imamstDropdownOption() {
        return cy.get('.MuiPaper-root')
    }
    pickWeddingDate() {
        return cy.get(':nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    wifeFirstNameInput() {
        return cy.get('#wifeFname')
    }
    wifeLastNameInput() {
        return cy.get('#wifeLname')
    }
    wifeJmbgInput() {
        return cy.get('#wifeJmbg')
    }
    wifeFatherNameInput() {
        return cy.get('#wifeFatherName')
    }
    wifeBirthPlaceInput() {
        return cy.get('#wifeBirthPlace')
    }
    wifeDateOfBirthDatePicker() {
        return cy.get(':nth-child(8) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    husbandFirstNameInput() {
        return cy.get('#husbandFname')
    }
    husbandLastNameInput() {
        return cy.get('#husbandLname')
    }
    husbandJmbgInput() {
        return cy.get('#husbandJmbg')
    }
    husbandFatherNameInput() {
        return cy.get('#husbandFatherName')
    }
    husbandBirthPlaceInput() {
        return cy.get('#husbandBirthPlace')
    }
    husbandDateOfBirthDatePicker() {
        return cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    addressInput() {
        return cy.get('#address')
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
    husbandFirstNameColumnInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="husbandFname"]')
    }
    editBtn() {
        return cy.get('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root')
    }
    husbandJmbgColumInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="husbandJmbg"]')
    }
    editedSaveBtn() {
        return cy.get(':nth-child(3) > .MuiFormControl-root > .MuiButtonBase-root')
    }


    //metode

    clickOnAddBtn() {
        return this.addBtn().click({ force: true })
    }

    fillForm(data) {
        this.imamsDropdownField().click()
        this.imamstDropdownOption().contains(data.imams).click()
        this.pickWeddingDate().type(data.weddingDate)
        this.wifeFirstNameInput().type(data.wifeName)
        this.wifeLastNameInput().type(data.wifeLastName)
        this.wifeJmbgInput().type(data.wifeJmbg)
        this.wifeFatherNameInput().type(data.wifeFatherName)
        this.wifeBirthPlaceInput().type(data.wifeBirthPlace)
        this.wifeDateOfBirthDatePicker().type(data.wifeDateOfBirthDate)
        this.husbandFirstNameInput().type(data.husbandFirstName)
        this.husbandLastNameInput().type(data.husbandLastName)
        this.husbandJmbgInput().type(data.husbandjmbg)
        this.husbandFatherNameInput().type(data.husbandFatherName)
        this.husbandBirthPlaceInput().type(data.husbandBirthPlace)
        this.husbandDateOfBirthDatePicker().type(data.husbandDateOfBirth)
        this.addressInput().type(data.address)
    }

    submitForm() {
        this.saveBtn().click()
        cy.wait(3000)
    }
    searchUser(name) {
        this.searchInput().type(name)
        this.searchBtn().click()
    }
    verifyWeddingProfileIsCreated(data) {
        return this.husbandFirstNameColumnInTable().should("contain.text", data)
    }
    clickOnEdit() {
        cy.wait(1000)
        return this.editBtn().click()
    }
    editHusbandJmbgInForm(husbandjmbg) {
        cy.wait(3000)
        return this.husbandJmbgInput().clear().type(husbandjmbg)
    }
    verifyWeddingProfileIsEdited(data) {
        return this.husbandJmbgColumInTable().should("contain.text", data)
    }
    submitEditedForm() {
        this.editedSaveBtn().click()
        cy.wait(3000)
    }
}
module.exports = new weddingPage()