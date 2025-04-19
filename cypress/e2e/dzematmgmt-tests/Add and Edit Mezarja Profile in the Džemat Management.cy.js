import onSidebarMenu from "../../page-objects/sidebarMenu"
import onGravePage from "../../page-objects/gravePage"
const nameOfGrave = `Bare${Date.now()}`
describe('Add and Edit Mezarja Profile in the Džemat Management', () => {
    it('Create "Mezarja" account on Džemat Managment with admin account', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnGravePage()
        onGravePage.clickOnAddBtn()
        cy.wait(1000)
        onGravePage.fillForm(nameOfGrave)
        onGravePage.submitForm()
        onSidebarMenu.clickOnGravePage()
        onGravePage.searchUser(nameOfGrave)
        onGravePage.verifyGraveIsCreated(nameOfGrave)

    })
    it('Edit "Mezarja" profile in Džemat Management', () => {
        const editedNameOfGrave = `Travnik${Date.now()}`
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnGravePage()
        onGravePage.searchUser(nameOfGrave)
        onGravePage.clickOnEdit()
        onGravePage.editGraveNameInForm(editedNameOfGrave)
        onGravePage.submitForm()
        onSidebarMenu.clickOnGravePage()
        onGravePage.searchUser(editedNameOfGrave)
        onGravePage.verifyGraveIsEdited(editedNameOfGrave)
    })

})