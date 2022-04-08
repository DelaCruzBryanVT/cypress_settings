describe('TEST ELEMENT FORM', () => {

    let testType = 'success';
    let valueData = '12';
    
    beforeEach(() => {
        cy.login('ca', 'Qwerty.1234').then(x => {
            cy.visit('#/settings/acff5f0f-b221-42be-b862-2ec5afb4a3a7/pluralform/config_care_folder_output_template_backup')
        });
    })

    it('Test Components Form Care Folder Output Template Backup', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        let arrayLabel = [
            "\n            Care Folder Output Template *\n        ",
            "\n            Name *\n        ",
            "\n            Is Enabled \n        ",
            "\n            Include Discharged Hospitalizations \n        ",
            "\n            Delete Folder On Failiure \n        ",
            "\n            From Date *\n        ",
            "\n            To Date *\n        ",
            "\n            Start Date *\n        ",
            "\n            End Date \n        ",
            "\n            Base Path *\n        ",
            "\n            Retention Count \n        ",
            "\n            Notify Email \n        ",
            "\n            Notification Type *\n        ",
            "\n            Minimum Free Space In Bytes \n        ",
            "\n            All \n        ",
            "\n            Entity *\n        ",
            "\n            Entity Instance *\n        ",
            "\n            Is Enabled \n        ",
            "\n            Base Path \n        ",
            "\n            Report Launcher *\n        ",
            "\n        Report Launcher \n    ",
            "\n            Filename *\n        ",
            "\n            Is Enabled \n        ",
            "\n            Compute Hash On Success \n        ",
            "\n            Max Degree Of Parallelism *\n        ",
            "\n            Wait For Previous To Complete \n        ",
            "\n            Retry Count *\n        ",
            "\n            Timeout In Seconds *\n        ",
            "\n            Minute \n        ",
            "\n            Hour \n        ",
            "\n            Day Of Week \n        ",
            "\n            Day Of Month \n        ",
            "\n            Month \n        ",
        ];
        let count = 0;
        cy.get('form[name="form"]')
            .find("label")
            .each((x: any) => {
                cy.get(x[0]).should("have.css", 'color', 'rgb(51, 51, 51)')
                expect(x[0].textContent).equal(arrayLabel[count]);
                count++;
            });
        cy.get('.title-wrapper > .ng-binding').contains("Care Folder Output Template Backup")
        cy.get('.toolbar-flex-start-right > .red').should("have.length", 1).and(($delete) => {
            expect($delete).to.be.disabled
        });
        cy.get('.toolbar-flex-start-right > .white-border').should("have.length", 1).contains('Cancel').and(($cancel) => {
            expect($cancel).not.to.be.disabled
        });
        cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').contains('Save and Stay').should("have.length", 1).and(($saveAndStay) => {
            expect($saveAndStay).not.to.be.disabled
        });
        cy.get('.toolbar-flex-start-right > .green').should("have.length", 1).contains('Save').and(($save) => {
            expect($save).not.to.be.disabled
        });
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        console.log(id);
        //cy.pause()
    });

    it('Test Messages Error, Empty Form Care Folder Output Template Backup', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.get('.toolbar-flex-start-right > .green').first().click()
        cy.get(".fl-grid-description-error").should("have.length", 87).and("have.css", 'color', 'rgb(244, 67, 54)')
        cy.get('.toolbar-flex-start-right > .green').and(($save) => {
            expect($save).to.be.disabled;
        });
        // cy.pause()
    })

    it('Input Form Care Folder Output Template Bckup', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.get('form[name="form"]').then((x) => {
            cy.get('.fl-grid-field > input[required="required"]').should("have.length", 4)
            cy.get('.fl-grid-field > div[required="required"]').should("have.length", 1)

        });
        // cy.pause()
    })

    it('Type only number', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
            cy.validateInputNumber('#RetentionCount_CareFolderOutputTemplateBackup', testType, valueData)
        cy.pause()
    })

    it('Read Value JSON', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.fixture('data.json').then((data) => {
            cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select(data.careFolderOutputTemplateId).should('have.value', 'd01d5ce4-71d2-e7fc-b2a5-8de6c0055309')
            cy.get('#Name_CareFolderOutputTemplateBackup').type(data.name).should('have.value', data.name)
            cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().type(data.fromDate).should('have.value', data.fromDate)
            cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().type(data.toDate).should('have.value', data.toDate)
            cy.get('.hasDatepicker').first().type(data.startDate).should('have.value', data.startDate)
            cy.get('#ui-datepicker-div')
                .invoke('css', 'display', 'none')
            cy.get('.hasDatepicker').eq(1).type(data.endDate).should('have.value', data.endDate)
            cy.get('#ui-datepicker-div')
                .invoke('css', 'display', 'none')
            cy.get('#BasePath_CareFolderOutputTemplateBackup').type(data.basePath).should('have.value', data.basePath)
            cy.get('#RetentionCount_CareFolderOutputTemplateBackup').type(data.retentionCount).should('have.value', data.retentionCount)
            cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type(data.notifyToEmail).should('have.value', data.notifyToEmail)
            cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select(data.careFolderOutputTemplateBackupNotificationTypeId).should('have.value', '2')
            cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').type(data.minimumFreeSpaceInBytes).should('have.value', data.minimumFreeSpaceInBytes)
        })
    })
})