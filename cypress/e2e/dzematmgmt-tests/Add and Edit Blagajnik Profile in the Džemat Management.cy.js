import onTreasuresPage from "../../page-objects/treasuresPage"
import onSidebarMenu from "../../page-objects/sidebarMenu"
const formData = {
    firstName: `Šejla${Date.now()}`,
    lastName: 'Hodžić',
    fatherName: 'Ali',
    jmbg: '102983767837',
    birthPlace: 'Sarajevo',
    birthDate: '20-02-2000',
};
describe('Add and Edit "Blagajnik" profile in Jammat Management', () => {
    it('Add "Blagajnik" profile in Jammat Management', () => {
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnTreasurerPage()
        onTreasuresPage.clickOnAddBtn()
        onTreasuresPage.fillForm(formData)
        onTreasuresPage.submitForm()
        onSidebarMenu.clickOnTreasurerPage()
        onTreasuresPage.searchUser(formData.firstName)
        onTreasuresPage.verifyTreasurerIsCreated(formData)
    })
    it('Edit "Blagajnik" profile in Jammat Management', () => { 
        const lastName = `Genjac${Date.now()}`
        cy.login('admin', 'admin')
        onSidebarMenu.clickOnTreasurerPage()
        onTreasuresPage.searchUser(formData.firstName)
        onTreasuresPage.clickOnEdit()
        onTreasuresPage.editLastNameInForm(lastName)
        onTreasuresPage.submitForm()
        onSidebarMenu.clickOnTreasurerPage()
        onTreasuresPage.searchUser(lastName)
        onTreasuresPage.verifyTreasurerIsEdited(lastName)
    })
})
