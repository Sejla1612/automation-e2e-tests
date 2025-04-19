class mektebTeacherPage {

    addBtn() {
        return cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiButtonBase-root')
    }
    firstNameInput() {
        return cy.get('#fname')
    }
    lastNameInput() {
        return cy.get('#lname')
    }
    jmbgInput() {
        return cy.get('#jmbg')
    }
    fatherNameInput() {
        return cy.get('#fatherName')
    }
    motherNameInput() {
        return cy.get('#motherName')
    }
    dateOfBirthPickerForm() {
        return cy.get(':nth-child(6) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    phoneNumberInput() {
        return cy.get('#phone')
    }
    emailInput() {
        return cy.get('#email')
    }
    enrollmentDatePicker() {
        return cy.get('#\\:r2u\\:')
    }
    saveBtn() {
        return cy.get('.modal-footer > .MuiFormControl-root > .MuiButtonBase-root')
    }


    //metode

    clickOnAddBtn() {
        return this.addBtn().click({ force: true })
    }
    fillForm(data) {
        this.firstNameInput().type(data.firstName);
        this.lastNameInput().type(data.lastName);
        this.jmbgInput().type(data.jmbg)
        this.fatherNameInput().type(data.fatherName);
        this.motherNameInput().type(data.motherName);
        this.dateOfBirthPickerForm().clear().type(data.dateOfBirth);
        this.phoneNumberInput().type(data.phoneNumber);
        this.emailInput().type(data.email)
        this.enrollmentDatePicker().clear().type(data.enrollmentDate)
    }
    submitForm() {
        return this.saveBtn().should('not.be.disabled').click()

    }
}
module.exports = new mektebTeacherPage()