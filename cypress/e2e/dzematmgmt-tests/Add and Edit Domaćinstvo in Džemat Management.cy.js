import onSidebarMenu from "../../page-objects/sidebarMenu"
import onHouseholdPage from "../../page-objects/householdPage"
const formData = {
    address: 'Brčanska 4',
    email: `sejlahodzic${Date.now()}@gmail.com`,
    homeNumber: '0332345678',
    mobileNumber: '062673890',
    note: 'Želim da se profil napravi brzo',
    jammat: 'Sarajevo',
    birthDate: '20-02-2000'
};
describe('Add "Domaćinstvo" in Jammat Management', () => {
    it('Add "Domaćinstvo" in Jammat Management', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnHouseholdPage()
        onHouseholdPage.clickOnAddBtn()
        onHouseholdPage.fillForm(formData)
        onHouseholdPage.submitForm()
        onSidebarMenu.clickOnHouseholdPage()
        onHouseholdPage.searchUser(formData.email)
        onHouseholdPage.verifyHouseholdIsCreated(formData)
    })
    it('Edit "Domaćinstvo" profile in Jammat Management', () => {
        const email = `sejlahodzic${Date.now()}@gmail.com`
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnHouseholdPage()
        onHouseholdPage.searchUser(formData.email)
        onHouseholdPage.clickOnEdit()
        onHouseholdPage.editEmailInForm(email)
        onHouseholdPage.submitForm()
        onSidebarMenu.clickOnHouseholdPage()
        onHouseholdPage.searchUser(email)
        onHouseholdPage.verifyHouseholdIsEdited(email)

    })
})










