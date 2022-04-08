describe('First test', () => {

    let filterText = 'nam3'
    var numberFila = 0

    beforeEach(() => {
        cy.login('ca', 'Qwerty.1234').then(x => {
            cy.visit('#/settings/acff5f0f-b221-42be-b862-2ec5afb4a3a7/pluralform/config_care_folder_output_template_backup')
        });
    })

    it('Filter Record. Section Care Folder Output Template Backup', () => {
        cy.get('.ui-grid-coluiGrid-0008 > .sortable > [ui-grid-filter=""] > .ui-grid-filter-container > [ng-if="colFilter.type !== \'select\'"] > .ui-grid-filter-input').type(filterText)
        cy.get(".grid").then((x) => {
            cy.get(".ui-grid-canvas")
                .should("have.length", 2)
                .and(($tr) => {
                    expect($tr.get(1).textContent).to.contains(filterText);
                });
        });
        //cy.pause()
    });

    it('Validate Select List', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.validateSelectList('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup')
        //cy.pause()
    })

    it('Save Button. Section Care Folder Output Template Backup', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select('TEST D')
        cy.get('#Name_CareFolderOutputTemplateBackup').type('TEST CYPRESS SAVE BUTTON').should('have.value', 'TEST CYPRESS SAVE BUTTON')
        cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().type('8').should('have.value', '8')
        cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().type('18').should('have.value', '18')
        cy.get('.hasDatepicker').first().type('29/04/2022').should('have.value', '29/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('.hasDatepicker').eq(1).type('30/04/2022').should('have.value', '30/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('#BasePath_CareFolderOutputTemplateBackup').type('TEST CYPRESS SAVE BUTTON').should('have.value', 'TEST CYPRESS SAVE BUTTON')
        cy.get('#RetentionCount_CareFolderOutputTemplateBackup').type('12').should('have.value', '12')
        cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type('cypress@gmail.com').should('have.value', 'cypress@gmail.com')
        cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select('Always')
        cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').type('99').should('have.value', '99')
        cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({ force: true });
        cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('.marg-top-20 > .green').click()
        //cy.pause()
    })

    it('Cancel Button Without Changes.  Section Care Folder Output Template Backup', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS SAVE BUTTON').first().dblclick();
        cy.get('.marg-top-20 > .white-border').click()
        cy.get(".grid").then((x) => {
            cy.get(".ui-grid-canvas")
                .should("have.length", 2)
        });
        //cy.pause()
    })

    it('Cancel Button With Changes.  Section Care Folder Output Template Backup', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS').first().dblclick();
        cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select('TEST D')
        cy.get('#Name_CareFolderOutputTemplateBackup').clear().wait(500)
        cy.get('#Name_CareFolderOutputTemplateBackup').type('TEST CYPRESS MODIFY')
        cy.get(".timepicker-button").first().click();
        cy.get(".timepicker-button").eq(1).click();
        cy.get('#BasePath_CareFolderOutputTemplateBackup').clear().wait(500)
        cy.get('#BasePath_CareFolderOutputTemplateBackup').type('TEST CYPRESS SAVE MODIFY')
        cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').clear().wait(500)
        cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type('cypress@gmail.com')
        cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select('Always')
        cy.get('.marg-top-20 > .white-border').click()
        cy.get('.button-group > .marg-right-butt10').click()
        cy.get(".grid").then((x) => {
            cy.get(".ui-grid-canvas")
                .should("have.length", 2)
        });
        //cy.pause()
    })

    it('Save and Stay Button. Section Care Folder Output Template Backup', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select('TEST D')
        cy.get('#Name_CareFolderOutputTemplateBackup').type('TEST CYPRESS SAVE AND STAY BUTTON').should('have.value', 'TEST CYPRESS SAVE AND STAY BUTTON')
        cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().type('8').should('have.value', '8')
        cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().type('18').should('have.value', '18')
        cy.get('.hasDatepicker').first().type('29/04/2022').should('have.value', '29/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('.hasDatepicker').eq(1).type('30/04/2022').should('have.value', '30/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('#BasePath_CareFolderOutputTemplateBackup').type('TEST CYPRESS SAVE AND STAY BUTTON').should('have.value', 'TEST CYPRESS SAVE AND STAY BUTTON')
        cy.get('#RetentionCount_CareFolderOutputTemplateBackup').type('12').should('have.value', '12')
        cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type('cypress@gmail.com').should('have.value', 'cypress@gmail.com')
        cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select('Always')
        cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').type('99').should('have.value', '99')
        cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({ force: true });
        cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click()

        //cy.pause()
    })

    it('Save Button When Record Exists. Section Care Folder Output Template Backup', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS SAVE BUTTON').first().dblclick();
        cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select('TEST D')
        cy.get('#Name_CareFolderOutputTemplateBackup').clear().wait(500).type('TEST CYPRESS MODIFY').should('have.value', 'TEST CYPRESS MODIFY')
        cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().wait(500).type('10').should('have.value', '10')
        cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().wait(500).type('20').should('have.value', '20')
        cy.get('.hasDatepicker').first().clear().wait(500).type('29/04/2022').should('have.value', '29/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('.hasDatepicker').eq(1).clear().wait(500).type('30/04/2022').should('have.value', '30/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('#BasePath_CareFolderOutputTemplateBackup').clear().wait(500).type('TEST CYPRESS MODIFY').should('have.value', 'TEST CYPRESS MODIFY')
        cy.get('#RetentionCount_CareFolderOutputTemplateBackup').clear().wait(500).type('12').should('have.value', '12')
        cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').clear().wait(500).type('cypressmodify@gmail.com').should('have.value', 'cypressmodify@gmail.com')
        cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select('Always')
        cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').clear().wait(500).type('100').should('have.value', '100')
        cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({ force: true });
        cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('.marg-top-20 > .green').click()
        //cy.pause()
    })

    it('Delete Simple Record. Section Care Folder Output Template Backup', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MODIFY').first().click().then(x => {
            cy.get('.red').click().then(res => {
                cy.get('.button-group > .marg-right-butt10').click();
            })
        })
        //cy.pause()
    })

    it('Delete Multiple Records. Section Care Folder Output Template Backup', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select('TEST D')
        cy.get('#Name_CareFolderOutputTemplateBackup').type('1 TEST CYPRESS DELETE').should('have.value', '1 TEST CYPRESS DELETE')
        cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().type('8').should('have.value', '8')
        cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().type('18').should('have.value', '18')
        cy.get('.hasDatepicker').first().type('29/04/2022').should('have.value', '29/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('.hasDatepicker').eq(1).type('30/04/2022').should('have.value', '30/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('#BasePath_CareFolderOutputTemplateBackup').type('1 TEST CYPRESS DELETE').should('have.value', '1 TEST CYPRESS DELETE')
        cy.get('#RetentionCount_CareFolderOutputTemplateBackup').type('12').should('have.value', '12')
        cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type('cypress@gmail.com').should('have.value', 'cypress@gmail.com')
        cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select('Always')
        cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').type('99').should('have.value', '99')
        cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({ force: true });
        cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('.marg-top-20 > .green').click().then(x => {

            cy.get('[ng-click="vm.addNewWrapped()"]').click();
            cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select('TEST D')
            cy.get('#Name_CareFolderOutputTemplateBackup').type('2 TEST CYPRESS DELETE').should('have.value', '2 TEST CYPRESS DELETE')
            cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().type('8').should('have.value', '8')
            cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().type('18').should('have.value', '18')
            cy.get('.hasDatepicker').first().type('29/04/2022').should('have.value', '29/04/2022')
            cy.get('#ui-datepicker-div')
                .invoke('css', 'display', 'none')
            cy.get('.hasDatepicker').eq(1).type('30/04/2022').should('have.value', '30/04/2022')
            cy.get('#ui-datepicker-div')
                .invoke('css', 'display', 'none')
            cy.get('#BasePath_CareFolderOutputTemplateBackup').type('2 TEST CYPRESS DELETE').should('have.value', '2 TEST CYPRESS DELETE')
            cy.get('#RetentionCount_CareFolderOutputTemplateBackup').type('12').should('have.value', '12')
            cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type('cypress@gmail.com').should('have.value', 'cypress@gmail.com')
            cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select('Always')
            cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').type('99').should('have.value', '99')
            cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({ force: true });
            cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({ force: true });
            cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({ force: true });
            cy.get('.marg-top-20 > .green').click().then(y => {
                cy.get(".ui-grid-col-left-nowrap-tooltip").its("length")
                    .then(element => {
                        numberFila = element;
                        cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila)
                        cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(1).click();
                        cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(2).click();
                        cy.get('.red').click().then(x => {
                            cy.get('.button-group > .marg-right-butt10').click();
                            cy.reload().then(response => {
                                cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila - 4);
                            })
                        })
                    })
            })
        })
        //cy.pause()
    })
});