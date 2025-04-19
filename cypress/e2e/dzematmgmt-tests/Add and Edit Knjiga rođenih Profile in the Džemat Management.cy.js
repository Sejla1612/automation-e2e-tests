import onSidebarMenu from "../../page-objects/sidebarMenu"
import onBirthRegistryPage from "../../page-objects/birthRegistryPage"
const formData = {
    firstName: `Šejla${Date.now()}`,
    lastName: 'Hodžić',
    birthPlace: 'Sarajevo',
    fatherName: 'Ali',
    motherName: 'Lamija',
    gender: 'Žensko',
    aqiqahDate: '14-02-2000',
    dateOfBirth: '16-02-2000',
    imams: 'Test Hamza ()'
};
describe('Add and Edit "Knjiga rođenih" Profile in the Džemat Management', () => {
    it('Create "Knjiga rođenih" account on Džemat Managment', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnBirthRegistryPage()
        onBirthRegistryPage.clickOnAddBtn()
        onBirthRegistryPage.fillForm(formData)
        onBirthRegistryPage.submitForm()
        onSidebarMenu.clickOnBirthRegistryPage()
        onBirthRegistryPage.searchUser(formData.firstName)
        onBirthRegistryPage.verifyBirthRegistryProfileIsCreated(formData.firstName)
    })
    it('Edit "Knjiga rođenih" Profile in the Džemat Management', () => {
        const editedFatherName = `Muhamed${Date.now()}`
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnBirthRegistryPage()
        onBirthRegistryPage.searchUser(formData.firstName)
        onBirthRegistryPage.clickOnEdit()
        onBirthRegistryPage.editFatherNameInForm(editedFatherName)
        onBirthRegistryPage.submitForm()
        onSidebarMenu.clickOnBirthRegistryPage()
        onBirthRegistryPage.searchUser(editedFatherName)
        onBirthRegistryPage.verifyBirthRegistryIsEdited(editedFatherName)
    })
})
