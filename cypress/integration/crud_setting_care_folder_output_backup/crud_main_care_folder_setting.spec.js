describe('CRUD SETTING CARE FOLDER OUTPUT TEMPLATE BACKUP', function () {

    let filterText = '3'
    var numberFila = 0

    before(() => {
        cy.request({
            method: "GET",
            url: "https://debugsite.myequipe2/App/#/login",
        }).then(function (response) {
            console.log(response)
            expect(response.status).eq(200);
        });
        cy.visit("https://debugsite.myequipe2:8080/app")
        cy.location().should(loc => {
            expect(loc.pathname).to.equal('/app/')
        })
    });

    beforeEach(() => {
        cy.login();
        cy.wait(6000);
    })

    it('Filter Record. Section Care Folder Output Template Backup', () => {
        cy.get('.ui-grid-coluiGrid-0008 > .sortable > [ui-grid-filter=""] > .ui-grid-filter-container > [ng-if="colFilter.type !== \'select\'"] > .ui-grid-filter-input').type(filterText)
        cy.get(".grid").then((x) => {
            cy.get(".ui-grid-canvas")
                .should("have.length", 2)
                .and(($tr) => {
                    expect($tr.get(1).textContent, "Filter").to.contains(filterText);
                });
        });
        cy.pause()
    })

    it('Validate Select List', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.validateSelectList('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup')
        cy.pause()
    })

    it('Save Button. Section Care Folder Output Template Backup', () => {
        cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS SAVE BUTTON', 'TEST CYPRESS SAVE BUTTON', 'cypress@gmail.com', 'Always').then(($respose => {
            cy.get('.marg-top-20 > .green').click()
        }))
        cy.pause()
    })

    it('Cancel Button Without Changes.  Section Care Folder Output Template Backup', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS SAVE BUTTON').first().dblclick();
        cy.get('.marg-top-20 > .white-border').click()
        cy.get(".grid").then((x) => {
            cy.get(".ui-grid-canvas")
                .should("have.length", 2)
        });
        cy.pause()
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
        cy.pause()
    })

    it('Save and Stay Button. Section Care Folder Output Template Backup', () => {
        cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS SAVE & STAY', 'TEST CYPRESS SAVE & STAY', 'cypress@gmail.com', 'Always').then(($response => {
            cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click()
        }))
        cy.pause()
    })

    it('Save Button When Record Exists. Section Care Folder Output Template Backup', () => {
        cy.updateCareFolderOutputTemplateBackup('TEST CYPRESS SAVE BUTTON', 'TEST D', 'TEST CYPRESS MODIFY', 'TEST CYPRESS SAVE MODIFY', 'cypressmodify@gmail.com', 'Always')
        cy.get('.marg-top-20 > .green').click()
        cy.pause()
    })

    it('Delete Simple Record. Section Care Folder Output Template Backup', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MODIFY').first().click().then(x => {
            cy.get('.red').click().then(res => {
                cy.get('.button-group > .marg-right-butt10').click();
            })
        })
        cy.pause()
    })

    it('Delete Multiple Records. Section Care Folder Output Template Backup', () => {
        cy.saveCareFolderOutputTemplateBackup('TEST D', '1 TEST CYPRESS SAVE BUTTON', 'TEST CYPRESS SAVE BUTTON', 'cypress@gmail.com', 'Always').then(($response => {
            cy.get('.marg-top-20 > .green').click().then(x => {
                cy.saveCareFolderOutputTemplateBackup('TEST D', '2 TEST CYPRESS SAVE BUTTON', 'TEST CYPRESS SAVE BUTTON', 'cypress@gmail.com', 'Always')
                cy.get('.marg-top-20 > .green').click().then(x => {
                    cy.get(".ui-grid-col-left-nowrap-tooltip").its("length")
                        .then(element => {
                            numberFila = element;
                            cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila)
                            cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(1).click();
                            cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(2).click();
                            cy.get('.red').click().then(x=>{
                                cy.get('.button-group > .marg-right-butt10').click();
                                cy.reload().then(response=>{
                                    cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila - 4);
                                })
                            })
                        })
                })
            })
        }))
        cy.pause()
    })
})
