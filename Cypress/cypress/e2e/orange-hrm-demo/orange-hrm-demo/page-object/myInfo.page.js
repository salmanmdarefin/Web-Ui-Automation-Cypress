class myInfoPage {
    element = {
        //Property
        //locator
        driversLiscenceNo: () => cy.xpath(`(//input[@class='oxd-input oxd-input--active'])[5]`),
        licenseExpiryDate: () => cy.xpath(`(//input[@placeholder='yyyy-mm-dd'])[1]`),//2023-12-31
        femaleGender: () => cy.xpath(`//input[@value='2']`),
        gender: () => cy.get(`[type="radio"]`),
        smokecheck: () => cy.xpath(`//label[normalize-space()='Yes']`),
        addBtn: () => cy.xpath(`//button[normalize-space()='Add']`),
        browseFile: () => cy.get(`input[type='file']`),
        uploadFile: () => cy.get(`.oxd-icon.bi-upload.oxd-file-input-icon`),
        saveBtn: () => cy.get(`div[class='orangehrm-attachment'] button[type='submit']`),
        downloadBtn: () => cy.get(`.oxd-icon.bi-download`),
    }
    // Functions "Salman"
    addMyInfo() {
      this.element.driversLiscenceNo().should('be.visible').clear().type("01601555458");
      this.element.licenseExpiryDate().should('be.empty').clear().type("2031-11-15");
      //force true
      this.element.femaleGender().click({ force: true });
      //first and last
      this.element.gender().first().check({force: true});
      //value
      this.element.gender().check('2', {force: true});
      this.element.smokecheck().should('be.visible').click({force: true});
      this.element.addBtn().should('be.visible').click();
      //this.addFile();
      this.save();
    }

    addFile() {
      let p = 'sample.png'
      this.element.browseFile().click({force: true}).selectFile(p);
      cy.wait(8000);
      this.element.uploadFile().should('be.visible').click();  
    }

    save() {
      this.element.saveBtn().should('be.visible').click();  
    }

    downloadFile() {
      this.element.downloadBtn().should('be.visible').click();
    }

    fileRemove() {
      cy.exec('rm -rf cypress/downloads/*', { failOnNonZeroExit: false });
    }

    fileRead() {
      cy.readFile('/Cypress/cypress/fixtures/credentials.json').its('name').should('eq', 'Md.Salman Arefin')
    }
}
module.exports = new myInfoPage();


































//Md.Salman Arefin.