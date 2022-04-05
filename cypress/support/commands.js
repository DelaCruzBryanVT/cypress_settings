// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('https://debugsite.myequipe2/app/#/login/action/').then(x=>{
        cy.get('input[name="username"]').type('')
        cy.get('#passwordInput').type('')
        cy.get('input[type=submit]').click()
        cy.visit('https://debugsite.myequipe2/app/#/settings/acff5f0f-b221-42be-b862-2ec5afb4a3a7/pluralform/config_care_folder_output_template_backup')
    })
})

Cypress.Commands.add('validateSelectList', (idSelectList) => {
    cy.get(idSelectList).find('option').its("length").should("be.gt", 1);

})

Cypress.Commands.add('saveCareFolderOutputTemplateBackup', (idCareFolder,name,basePath,notifyToEmail,idNotification) => {
    cy.get('[ng-click="vm.addNewWrapped()"]').click();
    cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select(idCareFolder)
    cy.get('#Name_CareFolderOutputTemplateBackup').type(name).should('have.value', name)
    cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().type('8').should('have.value', '8')
    cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().type('18').should('have.value', '18')
    cy.get('.hasDatepicker').first().type('29/04/2022').should('have.value', '29/04/2022')
    cy.get('#ui-datepicker-div')
       .invoke('css','display', 'none')
    cy.get('.hasDatepicker').eq(1).type('30/04/2022').should('have.value', '30/04/2022')
    cy.get('#ui-datepicker-div')
          .invoke('css','display', 'none')
    cy.get('#BasePath_CareFolderOutputTemplateBackup').type(basePath).should('have.value', basePath)
    cy.get ('#RetentionCount_CareFolderOutputTemplateBackup').type('12').should('have.value', '12')
    cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type(notifyToEmail).should('have.value', notifyToEmail)
    cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select(idNotification)
    cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').type('99').should('have.value', '99')
    cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({force: true});
    cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({force: true});
    cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({force:true});
})

Cypress.Commands.add('updateCareFolderOutputTemplateBackup', (paramUpdate,idCareFolder,name,basePath,notifyToEmail,idNotification) => {
    cy.get(".ui-grid-col-align").contains(paramUpdate).first().dblclick();
    cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select(idCareFolder)
    cy.get('#Name_CareFolderOutputTemplateBackup').clear().wait(500)
    cy.get('#Name_CareFolderOutputTemplateBackup').type(name).should('have.value', name)
    cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().wait(500).type('10').should('have.value', '10')
    cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().wait(500).type('20').should('have.value', '20')
    cy.get('.hasDatepicker').first().clear().wait(500).type('29/04/2022').should('have.value', '29/04/2022')
    cy.get('#ui-datepicker-div')
       .invoke('css','display', 'none')
    cy.get('.hasDatepicker').eq(1).clear().wait(500).type('30/04/2022').should('have.value', '30/04/2022')
    cy.get('#ui-datepicker-div')
          .invoke('css','display', 'none')
    cy.get('#BasePath_CareFolderOutputTemplateBackup').clear().wait(500).type(basePath).should('have.value',basePath)
    cy.get ('#RetentionCount_CareFolderOutputTemplateBackup').clear().wait(500).type('12').should('have.value', '12')
    cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').clear().wait(500).type(notifyToEmail).should('have.value', notifyToEmail)
    cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select(idNotification)
    cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').clear().wait(500).type('100').should('have.value', '100')
    cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({force: true});
    cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({force: true});
    cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({force:true});

})

Cypress.Commands.add('saveAsociatedContext', (idEntity,idInstance,basePath) => {
    cy.validateSelectList('#Id_Entity_CareFolderOutputTemplateBackupHasContext');
    cy.get('#Id_Entity_CareFolderOutputTemplateBackupHasContext').select(idEntity)
    cy.wait(4000);
    cy.validateSelectList('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext');
    cy.get('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext').select(idInstance);
    cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasContext').click({force: true});
    cy.get('#BasePath_CareFolderOutputTemplateBackupHasContext').clear().wait(500).type(basePath).should('have.value',basePath);
})