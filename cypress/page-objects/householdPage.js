class householdPage {

    //selektor
    addBtn() {
        return cy.get('.mdc-button__ripple')
    }
    addressInput() {
        return cy.get('#address')
    }
    emailInput() {
        return cy.get('#email')
    }
    homeNumberInput() {
       return cy.get('#phoneHome')
    }
    mobileNumberInput() {
        return cy.get('#phoneMobile')
    }
    noteInput() {
       return cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root')
    }
    jammatInput() {
        return cy.get('#jamaat')
    }
    jammatSelect() {
       return cy.get('.MuiList-root')
    }
    datePickerForm() {
        return cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    saveBtn() {
        return cy.get('.css-lqt4hu > :nth-child(3)')
    }
    searchInput() {
        return cy.get('#searchField')
    }
    searchBtn() {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }
    emailColumnInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="email"]')
    }
    editBtn() {
        return cy.get('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root')
    }
    emailFieldInTable() {
        return cy.get('.MuiDataGrid-root').find('[data-field="email"]')
    }

    //metode
    clickOnAddBtn() {
        return this.addBtn().click({ force: true })
    }
    fillForm(data) {
        this.addressInput().type(data.address);
        this.emailInput().type(data.email);
        this.homeNumberInput().type(data.homeNumber);
        this.mobileNumberInput().type(data.mobileNumber);
        this.noteInput().type(data.note);
        this.jammatInput().click()
        this.jammatSelect().contains(data.jammat).click()
        this.datePickerForm().clear().type(data.birthDate);
    }
    submitForm() {
       this.saveBtn().click()
        cy.wait(1000)
    }

    searchUser(email) {
        this.searchInput().type(email)
        this.searchBtn().click()
    }
    verifyHouseholdIsCreated(data) {
        return this.emailColumnInTable().should("contain.text",data.email)
    }
    clickOnEdit() {
        cy.wait(1000)
        return this.editBtn().click()
    }
    editEmailInForm(email) {
        cy.wait(1000)
        return this.emailInput().clear().type(email)
    }
    verifyHouseholdIsEdited(data) {
        return this.emailFieldInTable().should("contain.text", data)
    }


}
module.exports = new householdPage()