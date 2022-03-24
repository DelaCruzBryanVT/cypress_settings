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
    cy.visit('https://debugsite.myequipe2/app/#/login/action/')
    cy.get('input[name="username"]').type('ca')
    cy.get('#passwordInput').type('Qwerty.1234')
    cy.get('input[type=submit]').click()
    cy.visit('https://debugsite.myequipe2/app/#/settings/acff5f0f-b221-42be-b862-2ec5afb4a3a7/pluralform/config_care_folder_output_template_backup')
})
Cypress.Commands.add('validateSelectList', (idSelectList) => {
    cy.get(idSelectList).find('option').its("length").should("be.gt", 1);

})

Cypress.Commands.add('saveCareFolderOutputTemplateBackup', (idCareFolder,name,basePath,notifyToEmail,idNotification) => {
    cy.get('[ng-click="vm.addNewWrapped()"]').click();
    cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select(idCareFolder)
    cy.get('#Name_CareFolderOutputTemplateBackup').type(name)
    cy.get(".timepicker-button").eq(0).click();
    // cy.get(".hasDatepicker").eq(0).type('22/03/2022')
    // cy.get(".hasDatepicker").eq(0).click().then(x=>{
    //     cy.get('.ui-state-default').contains('22').click()
    // });
    cy.get(".timepicker-button").eq(1).click();
    // cy.get(".hasDatepicker").eq(1).type('29/03/2022')
    //cy.get(".hasDatepicker").eq(1).click().then(x=>{
    //     cy.get('.ui-state-default').contains('29').click()
    // });
    cy.get('#BasePath_CareFolderOutputTemplateBackup').type(basePath)
    cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type(notifyToEmail)
    cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select(idNotification)
})

Cypress.Commands.add('updateCareFolderOutputTemplateBackup', (paramUpdate,idCareFolder,name,basePath,notifyToEmail,idNotification) => {
    cy.get(".ui-grid-col-align").contains(paramUpdate).eq(0).dblclick();
    cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select(idCareFolder)
    cy.get('#Name_CareFolderOutputTemplateBackup').clear().wait(4000)
    cy.get('#Name_CareFolderOutputTemplateBackup').type(name)
    cy.get(".timepicker-button").eq(0).click();
    cy.get(".timepicker-button").eq(1).click();
    cy.get('#BasePath_CareFolderOutputTemplateBackup').clear().wait(4000)
    cy.get('#BasePath_CareFolderOutputTemplateBackup').type(basePath)
    cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').clear().wait(4000)
    cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type(notifyToEmail)
    cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select(idNotification)
})

Cypress.Commands.add('saveAsociatedContext', (idEntity,idInstance,basePath) => {
    cy.validateSelectList('#Id_Entity_CareFolderOutputTemplateBackupHasContext');
    cy.get('#Id_Entity_CareFolderOutputTemplateBackupHasContext').select(idEntity);
    cy.wait(4000);
    cy.validateSelectList('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext');
    cy.get('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext').select(idInstance);
    cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasContext').click({force: true});
    cy.get('#BasePath_CareFolderOutputTemplateBackupHasContext').type(basePath);
})
