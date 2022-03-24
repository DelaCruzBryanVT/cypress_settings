describe('TEST CRUD SETTINGS', function () {

    let filterText = 'nam3'

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    })

    //#region  Main Section
    // it('Test Filter Table', () => {
    //     cy.get('.ui-grid-coluiGrid-0008 > .sortable > [ui-grid-filter=""] > .ui-grid-filter-container > [ng-if="colFilter.type !== \'select\'"] > .ui-grid-filter-input').type(filterText)
    //     cy.get(".grid").then((x) => {
    //         cy.get(".ui-grid-canvas")
    //             .should("have.length", 2)
    //             .and(($tr) => {
    //                 expect($tr.get(1).textContent, "Filter").to.contains(filterText);
    //             });
    //     });
    //     cy.wait(5000)
    // })

    // it('Validate Select List', () => {
    //     cy.get('[ng-click="vm.addNewWrapped()"]').click();
    //     cy.validateSelectList('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup')
    // })

    // it('Test Save Care Folder Output Template Backup', () => {
    //     cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS', 'TEST CYPRESS SAVE', 'cypress@gmail.com', 'Always')
    //     cy.get('.marg-top-20 > .green').click()
    //     cy.wait(5000)
    // })

    // it('Test Save and Stay Care Folder Output Template Backup', () => {
    //     cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS SAVE & STAY', 'TEST CYPRESS SAVE & STAY', 'cypress@gmail.com', 'Always')
    //     cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click()
    //     cy.wait(5000)
    // })

    // it('Test Update Care Folder Output Template Backup', () => {
    //     cy.updateCareFolderOutputTemplateBackup('TEST CYPRESS', 'TEST D', 'TEST CYPRESS MODIFY', 'TEST CYPRESS SAVE MODIFY', 'cypress@gmail.com', 'Always')
    //     cy.get('.marg-top-20 > .green').click()
    //     cy.wait(5000)
    // })

    // it('Delete Simple', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).click();
    //     cy.wait(4000);
    //     cy.get('.red').click();
    //     cy.wait(4000);
    //     cy.get('.button-group > .marg-right-butt10').click();
    //     cy.wait(5000)
    // })

    // it('Delete Multiple', () => {
    //     cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", 32);
    //     cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(5).click();
    //     cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(6).click();
    //     cy.pause()
    //     cy.get('.red').click();
    //     cy.get('.button-group > .marg-right-butt10').click();
    //     cy.wait(5000)
    //     cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", 30);
    // })
    //#endregion

    //#region ACORDEON ASOCIATED CONTEXT
    // it('Save Asociated Context', () => {
    //     cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS SAVE', 'TEST CYPRESS SAVE', 'cypress@gmail.com', 'Always')
    //     cy.get('.expander-blue').eq(0).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
    //             cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
    //                 cy.get('.disabled').eq(0).click({ force: true }).then(reponse => {
    //                     cy.saveAsociatedContext("Sec", "aaa", "TEST CYPRESS")
    //                     cy.get('.green').eq(1).click({ force: true });
    //                 })

    //             })
    //         })
    //     })
    // })

    // it('Save and Stay Asociated Context', () => {
    //     cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS SAVE & STAY', 'TEST CYPRESS SAVE & STAY', 'cypress@gmail.com', 'Always')
    //     cy.get('.expander-blue').eq(0).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
    //             cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
    //                 cy.get('.disabled').eq(0).click({ force: true }).then(reponse => {
    //                     cy.saveAsociatedContext("Sec", "aaa", "TEST CYPRESS")
    //                     cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click({ force: true });
    //                     cy.wait(4000)
    //                     cy.get('.marg-top-20 > .white-border').click({ force: true })
    //                 })

    //             })
    //         })
    //     })
    // })

    // it('Test Filter Table Asociiated Context', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(0).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
    //             cy.get('.ui-grid-filter-input').eq(1).type('aaa')
    //             cy.get(".grid").eq(0).then((x) => {
    //                 cy.get(".ui-grid-canvas")
    //                     .and(($tr) => {
    //                         expect($tr.get(1).textContent, "Filter").to.contains("aaa");
    //                     });
    //             });
    //             cy.wait(5000)
    //         })
    //     })
    // })

    // it('Test Delete Simple from Table Asociiated Context', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(0).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
    //             cy.get(".ui-grid-col-align").contains('aaa').eq(0).click();
    //             cy.wait(4000);
    //             cy.get('.red').eq(0).click();
    //             cy.wait(4000);
    //             cy.get('.button-group > .marg-right-butt10').click();
    //             cy.wait(5000)
    //         })
    //     })
    // })

    // it('Test Delete Simple from Form Associiated Context', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(0).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
    //             cy.get(".ui-grid-col-align").contains('aaa').eq(0).dblclick();
    //             cy.get('.marg-top-20 > .red').click();
    //             cy.get('.button-group > .marg-right-butt10').click();
    //         })
    //     })
    // })

    // it('Test Delete Multiple Associiated Context', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(0).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
    //             cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", 32);
    //             cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(1).click();
    //             cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(2).click();
    //             cy.pause()
    //             cy.get('.red').eq(0).click();
    //             cy.wait(4000);
    //             cy.get('.button-group > .marg-right-butt10').click();
    //             cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", 30);
    //         })
    //     })
    // })

    // it('Test Update Associated Context', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(0).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
    //             cy.get(".ui-grid-col-align").contains('RS_VDA 8').eq(0).dblclick();
    //             cy.saveAsociatedContext("Sec", "aaa", "TEST CYPRESS")
    //             cy.get('.green').eq(1).click({ force: true });
    //         })
    //     })
    // })
    //#endregion

    //#region ACORDEON ASOCIATED REPORT LAUNCHER
    // it('Save Associated Report Launcher', () => {
    //     cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS REPORT LAUNCHER', 'TEST CYPRESS REPORT LAUNCHER', 'cypress@gmail.com', 'Always')
    //     cy.get('.expander-blue').eq(1).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
    //             cy.wait(3000)
    //             cy.get('.marg-right-butt1').eq(6).dblclick({ force: true }).then(res => {
    //                 cy.get('.disabled').eq(1).click({ force: true }).then(reponse => {
    //                     cy.validateSelectList('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher')
    //                     cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('Report-INR-Launcher');
    //                     cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').type('TEST LAUNCHER');
    //                     cy.get('.green').eq(1).click({ force: true });
    //                     cy.get('.dropdown-menu').invoke('css', 'display', 'none')
    //                 })
    //             })
    //         })
    //     })
    // })

    // it('Save and Stay Associated Report Launcher', () => {
    //     cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS REPORT LAUNCHER', 'TEST CYPRESS REPORT LAUNCHER', 'cypress@gmail.com', 'Always')
    //     cy.get('.expander-blue').eq(1).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
    //             cy.wait(3000)
    //             cy.get('.marg-right-butt1').eq(6).dblclick({ force: true }).then(res => {
    //                 cy.get('.disabled').eq(1).click({ force: true }).then(reponse => {
    //                     cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('CrossDomain_PrescriptionDefinitionPlanner_Medication_Launcher');
    //                     cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').type('TEST LAUNCHER');
    //                     cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click({ force: true });
    //                     cy.wait(4000)
    //                     cy.get('.marg-top-20 > .white-border').click({ force: true })
    //                     cy.get('.dropdown-menu').invoke('css', 'display', 'none')
    //                 })

    //             })
    //         })

    //     })
    // })

    // it('Test Filter Table Asociiated Context', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(1).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
    //             cy.get('.ui-grid-filter-input').eq(2).type('Report-INR-Launcher')
    //             cy.get(".grid").eq(1).then((x) => {
    //                 cy.get(".ui-grid-canvas").eq(3)
    //                     .and(($tr) => {
    //                         expect($tr.get(0).textContent, "Filter").to.contains("Report-INR-Launcher");
    //                     });
    //             });
    //             cy.wait(5000)
    //         })
    //     })
    // })

    // it('Test Delete Simple from Table Associated Report Launcher', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(1).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
    //             cy.get(".ui-grid-col-align").contains('Report-INR-Launcher').eq(0).click();
    //             cy.wait(4000);
    //             cy.get('.red').eq(1).click();
    //             cy.wait(4000);
    //             cy.get('.button-group > .marg-right-butt10').click();
    //             cy.wait(5000)
    //         })
    //     })
    // })

    // it('Test Delete Simple from Form Associated Report Launcher', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(1).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
    //             cy.get(".ui-grid-col-align").contains('Report-INR-Launcher').eq(0).dblclick();
    //             cy.get('.marg-top-20 > .red').click();
    //             cy.get('.button-group > .marg-right-butt10').click();
    //         })
    //     })
    // })

    // it('Test Delete Multiple Associated Report Launcher', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(1).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
    //             cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", 32);
    //             cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(5).click();
    //             cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(6).click();
    //             cy.pause()
    //             cy.get('.red').eq(1).click();
    //             cy.wait(4000);
    //             cy.get('.button-group > .marg-right-butt10').click();
    //             cy.wait(5000)
    //             cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", 30);
    //         })
    //     })
    // })

    // it('Test Update Asociiated Report Launcher', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(1).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
    //             cy.get(".ui-grid-col-align").contains('Report-INR-Launcher').eq(0).dblclick();
    //             cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('CrossDomain_PrescriptionDefinitionPlanner_Medication_Launcher');
    //             cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').type('TEST LAUNCHER');
    //             cy.get('.green').eq(1).click({ force: true });
    //             cy.get('.dropdown-menu').invoke('css', 'display', 'none')
    //         })
    //     })
    // })
    //#endregion

    //#region ACORDEON ASOCIATED SCHEDULES
    // it('Save Associated Schedules', () => {
    //     cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS ASOCIATED SCHEDULES', 'TEST CYPRESS ASOCIATED SCHEDULES', 'cypress@gmail.com', 'Always')
    //     cy.get('.expander-blue').eq(2).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
    //             cy.wait(3000)
    //             cy.get('.marg-right-butt1').eq(11).dblclick({ force: true }).then(res => {
    //                 cy.get('.disabled').eq(2).click({ force: true }).then(reponse => {
    //                     cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').type('4');
    //                     cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
    //                     cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').type('4');
    //                     cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').type('4');
    //                     cy.get('.green').eq(1).click({ force: true });
    //                     cy.wait(20000)
    //                     cy.get('.dropdown-menu').invoke('css', 'display', 'none')
    //                 })
    //             })
    //         })
    //     })
    // })

    // it('Save & Stay Associated Schedules', () => {
    //     cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS ASOCIATED SCHEDULES', 'TEST CYPRESS ASOCIATED SCHEDULES', 'cypress@gmail.com', 'Always')
    //     cy.get('.expander-blue').eq(2).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
    //             cy.wait(3000)
    //             cy.get('.marg-right-butt1').eq(11).dblclick({ force: true }).then(res => {
    //                 cy.get('.disabled').eq(2).click({ force: true }).then(reponse => {
    //                     cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').type('4');
    //                     cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
    //                     cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').type('4');
    //                     cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').type('4');
    //                     cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click({ force: true });
    //                     cy.wait(20000)
    //                     cy.get('.marg-top-20 > .white-border').click({ force: true })
    //                     cy.get('.dropdown-menu').invoke('css', 'display', 'none')
    //                 })
    //             })
    //         })
    //     })
    // })

    // it('Test Filter Table Associated Schedules', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(2).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
    //             cy.get('.ui-grid-filter-input').eq(4).type('4')
    //             cy.get(".grid").eq(2).then((x) => {
    //                 cy.get(".ui-grid-canvas").eq(5)
    //                     .and(($tr) => {
    //                         expect($tr.get(0).textContent, "Filter").to.contains("4");
    //                     });
    //             });
    //             cy.wait(5000)
    //         })
    //     })
    // })

    // it('Test Delete Simple from Table Associated Schedules', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(2).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
    //             cy.get(".ui-grid-col-align").contains('4').eq(0).click();
    //             cy.wait(4000);
    //             cy.get('.red').eq(2).click();
    //             cy.wait(4000);
    //             cy.get('.button-group > .marg-right-butt10').click();
    //             cy.wait(5000)
    //         })
    //     })
    // })

    // it('Test Delete Simple from Form Associated Schedules', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(2).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
    //             cy.get(".ui-grid-col-align").contains('5').eq(0).dblclick();
    //             cy.get('.marg-top-20 > .red').click();
    //             cy.get('.button-group > .marg-right-butt10').click();
    //         })
    //     })
    // })

    // it('Test Delete Multiple Associated Schedules', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(2).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
    //             cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", 32);
    //             cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(8).click();
    //             cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(9).click();
    //             cy.pause()
    //             cy.get('.red').eq(2).click();
    //             cy.wait(4000);
    //             cy.get('.button-group > .marg-right-butt10').click();
    //             cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", 30);
    //         })
    //     })
    // })

    // it('Test Update Asociiated Schedules', () => {
    //     cy.get(".ui-grid-col-align").contains('TEST CYPRESS').eq(0).dblclick();
    //     cy.wait(5000)
    //     cy.get('.expander-blue').eq(2).click().then(x => {
    //         cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
    //             cy.get(".ui-grid-col-align").contains('10').eq(0).dblclick();
    //             cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').clear();
    //             cy.wait(2000);
    //             cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').type('2');
    //             cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
    //             cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').clear();
    //             cy.wait(2000);
    //             cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').type('2');
    //             cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').clear();
    //             cy.wait(2000);
    //             cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').type('2');
    //             cy.get('.green').eq(1).click({ force: true });
    //             cy.wait(20000)
    //             cy.get('.dropdown-menu').invoke('css', 'display', 'none');
    //         })
    //     })
    // })
    //#endregion
})
