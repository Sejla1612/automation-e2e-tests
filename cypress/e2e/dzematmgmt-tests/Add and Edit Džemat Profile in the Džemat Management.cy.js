import onSidebarMenu from "../../page-objects/sidebarMenu"
import onJammatPage from "../../page-objects/jammatsPage"
const nameOfJammat = `Sarajevo${Date.now()}`
describe('Add and Edit "Jammat" profile in Džemat Management', () => {
    it('Create "Jammat" profile in Džemat Management', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnJammatsPage()
        onJammatPage.clickOnAddBtn()
        onJammatPage.fillForm(nameOfJammat)
        onJammatPage.submitForm()
        onSidebarMenu.clickOnJammatsPage()
        onJammatPage.searchUser(nameOfJammat)
        onJammatPage.verifyJammatIsCreated(nameOfJammat)

    })
    it('Edit "Jammat" profile in Džemat Management', () => {
        const editedNameOfJammat = `Visoko${Date.now()}`
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnJammatsPage()
        onJammatPage.searchUser(nameOfJammat)
        onJammatPage.clickOnEdit()
        onJammatPage.editJammatNameInForm(editedNameOfJammat)
        onJammatPage.submitForm()
        onSidebarMenu.clickOnJammatsPage()
        onJammatPage.searchUser(editedNameOfJammat)
        onJammatPage.verifyJammatIsEdited(editedNameOfJammat)
    })


})
