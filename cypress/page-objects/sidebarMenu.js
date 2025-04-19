class SideBarMenu {

  //selektori
  pocetnaPage() {
    return cy.contains("Početna")
  }
  imamsPage() {
    return cy.contains("Imami")
  }
  treasuresPage() {
    return cy.contains("Blagajnici")
  }
  householdPage() {
    return cy.contains("Domaćinstva");
  }
  jammatsPage() {
    return cy.contains("Džemati");
  }
  birthRegistryPage() {
    return cy.contains("Knjiga rođeni");
  }
  bookOfTheDeadPage() {
    return cy.contains("Knjiga umrli");
  }
  mektebTeacherPage() {
    return cy.contains("Mekteb");
  }
  gravePage() {
    return cy.contains("Mezarja");
  }
  weddingPage() {
    return cy.contains("Vjenčanja");
  }
  usersPage() {
    return cy.contains("Korisnici");
  }


  //metode
  clickOnPocetnaPage() {
    return this.pocetnaPage().click()
  }
  clickOnHouseholdPage() {
    return this.householdPage().click();
  }
  clickOnImamsPage() {
    return this.imamsPage().click()
  }
  clickOnTreasurerPage() {
    return this.treasuresPage().click()
  }
  clickOnJammatsPage() {
    return this.jammatsPage().click()
  }
  clickOnBirthRegistryPage() {
    return this.birthRegistryPage().click()
  }
  clickOnBookOfTheDeadPage() {
    return this.bookOfTheDeadPage().click()
  }
  clickOnMektebTeacherPage() {
    return this.mektebTeacherPage().click()
  }
  clickOnGravePage() {
    return this.gravePage().click({ force: true });
  }
  clickOnWeddingPage() {
    return this.weddingPage().click()
  }
  clickOnUsersPage() {
    return this.usersPage().click()
  }
}

module.exports = new SideBarMenu();
