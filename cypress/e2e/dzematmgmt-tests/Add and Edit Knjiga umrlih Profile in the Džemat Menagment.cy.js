import onSidebarMenu from "../../page-objects/sidebarMenu"
import onBookOfTheDeadPage from "../../page-objects/bookOfTheDeadPage"
const formData = {
    firstName: `Lina${Date.now()}`,
    lastName: 'Armenić',
    gender: 'Žensko',
    dateOfBirth: '16-02-2000',
    birthPlace: 'Ulcinj',
    fatherName: 'Alem',
    motherName: 'Ajla',
    deathDate: '14-02-2025',
    deathCause: '16-02-2025',
    placeOfBurial: 'Visoko',
    imamDzenaze: 'Test Hamza ()',
};
describe('Add and Edit "Knjiga umrli" Profile in the Džemat Management', () => {
    it('Create "Knjiga umrli" account on Džemat Managment with admin account', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnBookOfTheDeadPage()
        onBookOfTheDeadPage.clickOnAddBtn()
        onBookOfTheDeadPage.fillForm(formData)
        onBookOfTheDeadPage.submitForm()
        onSidebarMenu.clickOnBookOfTheDeadPage()
        onBookOfTheDeadPage.searchUser(formData.firstName)
        onBookOfTheDeadPage.verifssProfileIsCreateds(formData.firstName)
    })
    it('Edit "Knjiga umrli" Profile in the Džemat Management', () => {
        const editedFatherName = `Ahmed${Date.now()}`
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnBookOfTheDeadPage()
        onBookOfTheDeadPage.searchUser(formData.firstName)
        onBookOfTheDeadPage.clickOnEdit()
        onBookOfTheDeadPage.editFatherNameInForm(editedFatherName)
        onBookOfTheDeadPage.submitForm()
        onSidebarMenu.clickOnBookOfTheDeadPage()
        onBookOfTheDeadPage.searchUser(editedFatherName)
        onBookOfTheDeadPage.verifyProfileIsEdited(editedFatherName)
    })
})



