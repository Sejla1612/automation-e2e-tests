import onMektebTeacherPage from "../../page-objects/mektebTeacherPage"
import onSidebarMenu from "../../page-objects/sidebarMenu"
const formData = {
    firstName: `Ema${Date.now()}`,
    lastName: 'Mulić',
    jmbg: '102983767837',
    fatherName: 'Selim',
    motherName: 'Emina',
    dateOfBirth: '16-05-1995',
    birthPlace: 'Doboj',
    phoneNumber: '062345678',
    email: 'ema@test.com',
    enrollmentDate: '21-08-2005',
}

describe('Add "Mektebski mualim" Profile in the Džemat Management', () => {
    it('Create "Mektebski mualim" Profile on Džemat Managment with admin account', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnMektebTeacherPage()
        onMektebTeacherPage.clickOnAddBtn()
        onMektebTeacherPage.fillForm(formData)
        cy.wait(2000)
        onMektebTeacherPage.submitForm()
        cy.contains("Mekteb").click({ force: true })
        //onSidebarMenu.clickOnMektebTeacherPage()
    })
})
