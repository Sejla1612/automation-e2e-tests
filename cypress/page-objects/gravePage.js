class gravePage {

// slektori 

addBtn() {
    return cy.get('.mdc-button__ripple')
}
graveNameInput() {
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
graveNameColumnInTable() {
    return cy.get('.MuiDataGrid-root').find('[data-field="name"]')
}
editBtn() {
    return cy.get('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root')
}
graveColumnInTable() {
    cy.wait(1000)
    return cy.get('.MuiDataGrid-root').find('[data-field="name"]')
}

//metode

clickOnAddBtn() {
    cy.wait (1000)
    return this.addBtn().click({ force: true })
}
fillForm(data) {
    return this.graveNameInput().type(data)
}
submitForm() {
    return this.saveBtn().click()
}
searchUser(name) {
    this.searchInput().type(name)
    this.searchBtn().click()

}
verifyGraveIsCreated(data) {
    return this.graveNameColumnInTable().should("contain.text", data)
}
clickOnEdit() {
    cy.wait(1000)
    return this.editBtn().click()
}

editGraveNameInForm(name) {
    return this.graveNameInput().clear().type(name)
}
verifyGraveIsEdited(data) {
    return this.graveColumnInTable().should("contain.text", data)
}

}
module.exports = new gravePage 







