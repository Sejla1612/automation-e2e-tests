import onSidebarMenu from "../../page-objects/sidebarMenu"
import onUsersPage from "../../page-objects/usersPage"
const formData = {
    email: 'ajla@test.com',
    userName: `Ajla${Date.now()}`,
}
describe('Add "Korisnici" Profile in the Džemat Management', () => {
    it('Create "Korisnici" account on Džemat Managment with admin account', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnUsersPage()
        onUsersPage.clickOnAddBtn()
        cy.wait(2000)
        onUsersPage.fillForm(formData)
        onUsersPage.submitForm()
        onSidebarMenu.clickOnUsersPage()
        onUsersPage.searchUser(formData.userName)
        onUsersPage.verifyUserProfileIsCreated(formData.userName)
    })

})
