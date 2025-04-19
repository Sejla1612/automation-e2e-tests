import onSidebarMenu from "../../page-objects/sidebarMenu"
import onWeddingPage from "../../page-objects/weddingPage"
const formData = {
    imams: 'Test Hamza ()',
    weddingDate: '27-08-2025',
    wifeName: 'Šejla',
    wifeLastName: 'Hodžić',
    wifeJmbg: '10928927302092',
    wifeFatherName: 'Alija',
    wifeBirthPlace: 'Bar',
    wifeDateOfBirthDate: '16-12-2000',
    husbandFirstName: `Haris${Date.now()}`,
    husbandLastName: 'Genjac',
    husbandjmbg: '378393739980938',
    husbandFatherName: 'Kerim',
    husbandBirthPlace: 'Slovenija',
    husbandDateOfBirth: '06-12-1996',
    address: 'Porijecani bb',
};
describe('Add and Edit "Vjenčanja" Profile in the Džemat Management', () => {
    it('Create "Vjenčanja" account on Džemat Management', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnWeddingPage()
        onWeddingPage.clickOnAddBtn()
        cy.wait(1000)
        onWeddingPage.fillForm(formData)
        onWeddingPage.submitForm()
        onSidebarMenu.clickOnWeddingPage()
        onWeddingPage.searchUser(formData.husbandFirstName)
        onWeddingPage.verifyWeddingProfileIsCreated(formData.husbandFirstName)
    })
    it('Edit "Imami" Profile in the Džemat Management', () => {
        const editedhusbandJmbg = `464${Date.now()}`
        cy.login("admin", "admin")
        onSidebarMenu.clickOnWeddingPage()
        onWeddingPage.searchUser(formData.husbandFirstName)
        onWeddingPage.clickOnEdit()
        onWeddingPage.editHusbandJmbgInForm(editedhusbandJmbg)
        onWeddingPage.submitEditedForm()
        onSidebarMenu.clickOnWeddingPage()
        onWeddingPage.searchUser(editedhusbandJmbg)
        onWeddingPage.verifyWeddingProfileIsEdited(editedhusbandJmbg)




    })
})





