import onSidebarMenu from "../../page-objects/sidebarMenu"
import onImamsPage from "../../page-objects/imamsPage"
const formData = {
    firstName: `Šejla${Date.now()}`,
    lastName: 'Hodžić',
    fatherName: 'Ali',
    jmbg: '102983767837',
    birthPlace: 'Sarajevo',
    dateOfBirth: '20-02-2000',
    jammat: 'Sarajevo',
    education: 'VSS'
};
describe('Add "Imami" Profile in the Džemat Management', () => {
    it('Create "Imami" account on Džemat Managment', () => {
        cy.login("admin", "admin")
        onSidebarMenu.clickOnImamsPage()
        onImamsPage.clickOnAddBtn()
        onImamsPage.fillForm(formData)
        onImamsPage.submitForm()
        onSidebarMenu.clickOnImamsPage()
        onImamsPage.searchUser(formData.firstName)
        onImamsPage.verifyImamIsCreated(formData.firstName)
    })
    it('Edit "Imami" Profile in the Džemat Management', () => {
        const editedFirstName = `Šejla${Date.now()}`
        cy.login("admin", "admin")
        onSidebarMenu.clickOnImamsPage()
        onImamsPage.searchUser(formData.firstName)
        onImamsPage.clickOnEdit()
        onImamsPage.editImamNameInForm(editedFirstName)
        onImamsPage.submitForm()
        onSidebarMenu.clickOnImamsPage()
        onImamsPage.searchUser(editedFirstName)
        onImamsPage.verifyImamIsEdited(editedFirstName)
    })
})