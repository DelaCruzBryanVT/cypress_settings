describe('TEST SETTING ASSOCIATED REPORT LAUNCHER', () => {
    var numberFila = 0

    beforeEach(() => {
        cy.login();
        cy.wait(6000);
    })

    //#region ACORDEON ASOCIATED REPORT LAUNCHER
    it('Save Button. Section Associated Report Launcher', () => {
        cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS REPORT LAUNCHER', 'TEST CYPRESS REPORT LAUNCHER', 'cypress@gmail.com', 'Always')
        cy.get('.expander-blue').eq(1).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.wait(3000)
                cy.get('.marg-right-butt1').eq(6).dblclick({ force: true }).then(res => {
                    cy.get('.disabled').eq(1).click({ force: true }).then(reponse => {
                        cy.validateSelectList('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher')
                        cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('Report-INR-Launcher');
                        cy.get('#text_CustomParameters_CareFolderOutputTemplateBackupHasReportLauncher').type('TEST REPORT LAUNCHER LAUNCHER');
                        cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').type('TEST LAUNCHER');
                        cy.get('.green').eq(1).click({ force: true });
                        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
                    })
                })
            })
        })
        cy.pause()
    })

    it('Cancel Button Without Changes. Section Associated Report Launcher', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS REPORT LAUNCHER').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(1).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get(".ui-grid-col-align").contains('Report-INR-Launcher').first().dblclick();
                cy.wait(3000)
                cy.get('.marg-top-20 > .white-border').click()
                cy.wait(1000)
            })
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get(".grid").then((x) => {
                    cy.get(".ui-grid-col-align")
                });
            })
        })
        cy.pause()
    })

    it('Cancel Button With Changes. Section Associated Report Launcher', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS REPORT LAUNCHER').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(1).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get(".ui-grid-col-align").contains('Report-INR-Launcher').first().dblclick();
                cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('CrossDomain_PrescriptionDefinitionPlanner_Medication_Launcher');
                cy.get('#text_CustomParameters_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST REPORT LAUNCHER LAUNCHER');
                cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST LAUNCHER');
                cy.get('.marg-top-20 > .white-border').click()
                cy.get('.button-group > .marg-right-butt10').click()
                cy.wait(1000)
            })
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get(".grid").then((x) => {
                    cy.get(".ui-grid-col-align")
                });
            })
        })
        cy.pause()
    })

    it('Save and Stay Button. Section Associated Report Launcher', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS REPORT LAUNCHER').first().dblclick();
        cy.wait(3000)
        cy.get('.expander-blue').eq(1).click({ force: true }).then(x => {
            cy.wait(3000)
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.wait(3000)
                cy.get('.marg-right-butt1').eq(6).dblclick({ force: true }).then(res => {
                    cy.get('.disabled').eq(1).click({ force: true }).then(reponse => {
                        cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('CrossDomain_PrescriptionDefinitionPlanner_Medication_Launcher');
                        cy.get('#text_CustomParameters_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST REPORT LAUNCHER LAUNCHER');
                        cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST LAUNCHER');
                        cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click({ force: true });
                        cy.wait(4000)
                        cy.get('.marg-top-20 > .white-border').click({ force: true })
                        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
                    })
                })
            })
        })
        cy.pause()
    })

    it('Filter Record. Table Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS REPORT LAUNCHER').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(1).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get('.ui-grid-filter-input').eq(2).clear().wait(500).type('Report-INR-Launcher')
                cy.get(".grid").eq(1).then((x) => {
                    cy.get(".ui-grid-canvas").eq(3)
                        .and(($tr) => {
                            expect($tr.get(0).textContent, "Filter").to.contains("Report-INR-Launcher");
                        });
                });
            })
        })
        cy.pause()
    })

    it('Update Record. Section Associated Report Launcher', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS REPORT LAUNCHER').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(1).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get(".ui-grid-col-align").contains('Report-INR-Launcher').first().dblclick();
                cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('CrossDomain-CareFolderCoverV2-Launcher');
                cy.get('#text_CustomParameters_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST REPORT LAUNCHER LAUNCHER MODIFY');
                cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST LAUNCHER MODIFY');
                cy.get('.green').eq(1).click({ force: true });
                cy.get('.dropdown-menu').invoke('css', 'display', 'none')
            })
        })
        cy.pause()
    })

    it('Delete Simple Record. Table Associated Report Launcher', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS REPORT LAUNCHER').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(1).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get(".ui-grid-col-align").contains('CrossDomain-CareFolderCoverV2-Launcher').first().click();
                cy.wait(4000);
                cy.get('.red').eq(1).click();
                cy.wait(4000);
                cy.get('.button-group > .marg-right-butt10').click();
                cy.wait(5000)
            })
        })
        cy.pause()
    })

    it('Delete Simple Record. Section Associated Report Launcher', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS REPORT LAUNCHER').first().dblclick();
        cy.wait(4000)
        cy.get('.expander-blue').eq(1).click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.wait(3000)
                cy.get('.marg-right-butt1').eq(6).dblclick({ force: true }).then(res => {
                    cy.get('.disabled').eq(1).click({ force: true }).then(reponse => {
                        cy.validateSelectList('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher')
                        cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('Report-INR-Launcher');
                        cy.get('#text_CustomParameters_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST REPORT LAUNCHER LAUNCHER');
                        cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST LAUNCHER');
                        cy.get('.green').eq(1).click({ force: true });
                        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
                    })
                })
            })
        })
        cy.wait(4000)
        cy.get('.expander-blue').eq(1).click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get(".ui-grid-col-align").contains('Report-INR-Launcher').first().dblclick({ force: true });
                cy.get('.marg-top-20 > .red').click();
                cy.get('.button-group > .marg-right-butt10').click();
            })
        })
        cy.pause()
    })

    it('Delete Multiple Records. Section Associated Report Launcher', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS REPORT LAUNCHER').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(1).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.wait(3000)
                cy.get('.marg-right-butt1').eq(6).dblclick({ force: true }).then(res => {
                    cy.get('.disabled').eq(1).click({ force: true }).then(reponse => {
                        cy.validateSelectList('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher')
                        cy.get('#Id_ReportLauncher_CareFolderOutputTemplateBackupHasReportLauncher').select('Report-INR-Launcher');
                        cy.get('#text_CustomParameters_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST REPORT LAUNCHER LAUNCHER');
                        cy.get('#Filename_CareFolderOutputTemplateBackupHasReportLauncher').clear().wait(500).type('TEST LAUNCHER');
                        cy.get('.green').eq(1).click({ force: true });
                        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
                    })
                })
            })
        })
        cy.wait(5000)
        cy.get('.expander-blue').eq(1).click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Report Launcher').then(x => {
                cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").then(element => {
                    numberFila = element;
                    cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila);
                    cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(2).click({ force: true });
                    cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(3).click({ force: true });
                    cy.pause()
                    cy.get('.red').eq(1).click({ force: true });
                    cy.wait(4000);
                    cy.get('.button-group > .marg-right-butt10').click({ force: true });
                    cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila);
                })
            })
        })
        cy.pause()
    })
    //#endregion
})