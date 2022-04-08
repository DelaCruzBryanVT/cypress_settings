describe('CRUD SETTING SECTION ASSOCIATED CONTEXT', () => {
    var numberFila = 0

    beforeEach(() => {
        cy.login('ca', 'Qwerty.1234').then(x => {
            cy.visit('#/settings/acff5f0f-b221-42be-b862-2ec5afb4a3a7/pluralform/config_care_folder_output_template_backup')
        });
    })

    //#region ACORDEON ASOCIATED CONTEXT
    it('Save Button. Section Associated Context', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select('TEST D')
        cy.get('#Name_CareFolderOutputTemplateBackup').type('TEST CYPRESS ASOCIATED CONTEXT').should('have.value', 'TEST CYPRESS ASOCIATED CONTEXT')
        cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().type('8').should('have.value', '8')
        cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().type('18').should('have.value', '18')
        cy.get('.hasDatepicker').first().type('29/04/2022').should('have.value', '29/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('.hasDatepicker').eq(1).type('30/04/2022').should('have.value', '30/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('#BasePath_CareFolderOutputTemplateBackup').type('TEST CYPRESS ASOCIATED CONTEXT').should('have.value', 'TEST CYPRESS ASOCIATED CONTEXT')
        cy.get('#RetentionCount_CareFolderOutputTemplateBackup').type('12').should('have.value', '12')
        cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type('cypress@gmail.com').should('have.value', 'cypress@gmail.com')
        cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select('Always')
        cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').type('99').should('have.value', '99')
        cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({ force: true });
        cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({ force: true }).then(response => {
            cy.get('.expander-blue').first().click().then(x => {
                cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                    cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
                        cy.get('.disabled').first().click({ force: true }).then(reponse => {
                            cy.validateSelectList('#Id_Entity_CareFolderOutputTemplateBackupHasContext');
                            cy.get('#Id_Entity_CareFolderOutputTemplateBackupHasContext').select('Sec')
                            cy.wait(4000);
                            cy.validateSelectList('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext');
                            cy.get('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext').select('aaa');
                            cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasContext').click({ force: true });
                            cy.get('#BasePath_CareFolderOutputTemplateBackupHasContext').clear().wait(500).type('TEST CYPRESS').should('have.value', 'TEST CYPRESS')
                                .then(reponse => {
                                    cy.get('.green').eq(1).click({ force: true });
                                })
                        })
                    })
                })
            })
            cy.get('.dropdown-menu').invoke('css', 'display', 'none')
            //cy.pause()
        })
    })

    it('Cancel Button Without Changes. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED CONTEXT').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get(".ui-grid-col-align").contains('aaa').first().dblclick();
                cy.get('.marg-top-20 > .white-border').click()
                cy.wait(1000)
            })
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get(".grid").then((x) => {
                    cy.get(".ui-grid-col-align")
                });
            })
        })
        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
        //cy.pause()
    })

    it('Cancel Button With Changes. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED CONTEXT').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get(".ui-grid-col-align").contains('aaa').first().dblclick();
                cy.validateSelectList('#Id_Entity_CareFolderOutputTemplateBackupHasContext');
                cy.get('#Id_Entity_CareFolderOutputTemplateBackupHasContext').select("Sec");
                cy.wait(4000);
                cy.validateSelectList('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext');
                cy.get('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext').select("ACU/DH 1");
                cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasContext').click({ force: true });
                cy.get('#BasePath_CareFolderOutputTemplateBackupHasContext').type("TEST CYPRESS");
                cy.get('.marg-top-20 > .white-border').click()
                cy.get('.button-group > .marg-right-butt10').click()
                cy.wait(1000)
            })
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get(".grid").then((x) => {
                    cy.get(".ui-grid-col-align")
                });
            })
        })
        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
        //cy.pause()
    })

    it('Save and Stay Button. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED CONTEXT').first().dblclick().then(resp => {
            cy.get('.expander-blue').first().click({ force: true }).then(x => {
                cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                    cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
                        cy.get('.disabled').first().click({ force: true }).then(reponse => {
                            cy.validateSelectList('#Id_Entity_CareFolderOutputTemplateBackupHasContext');
                            cy.get('#Id_Entity_CareFolderOutputTemplateBackupHasContext').select('Sec')
                            cy.wait(4000);
                            cy.validateSelectList('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext');
                            cy.get('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext').select('ACU/DH 1');
                            cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasContext').click({ force: true });
                            cy.get('#BasePath_CareFolderOutputTemplateBackupHasContext').clear().wait(500).type('TEST CYPRESS').should('have.value', 'TEST CYPRESS')
                            cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click({ force: true });
                            cy.wait(4000)
                            cy.get('.marg-top-20 > .white-border').click({ force: true })
                        })
                    })
                })
            })
        })
        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
        //cy.pause()
    })

    it('Filter Record. Table Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED CONTEXT').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get('.ui-grid-filter-input').eq(1).type('aaa')
                cy.get(".grid").first().then((x) => {
                    cy.get(".ui-grid-canvas")
                        .and(($tr) => {
                            expect($tr.get(1).textContent, "Filter").to.contains("aaa");
                        });
                });
            })
        })
        //cy.pause();
    })

    it('Select Record And Update Record. Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED CONTEXT').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get(".ui-grid-col-align").contains('aaa').first().dblclick();
                cy.validateSelectList('#Id_Entity_CareFolderOutputTemplateBackupHasContext');
                cy.get('#Id_Entity_CareFolderOutputTemplateBackupHasContext').select('Sec')
                cy.wait(4000);
                cy.validateSelectList('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext');
                cy.get('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext').select('ACU/DH PIE');
                cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasContext').click({ force: true });
                cy.get('#BasePath_CareFolderOutputTemplateBackupHasContext').clear().wait(500).type('TEST CYPRESS').should('have.value', 'TEST CYPRESS')
                cy.get('.green').eq(1).click({ force: true });
            })
        })
        //cy.pause();
    })

    it('Delete Simple Record. Table Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED CONTEXT').first().dblclick().then(x => {
            cy.wait(5000)
            cy.get('.expander-blue').first().click({ force: true }).then(x => {
                cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                    cy.get(".ui-grid-col-align").contains('ACU/DH PIE').first().click();
                    cy.wait(4000);
                    cy.get('.red').first().click();
                    cy.wait(4000);
                    cy.get('.button-group > .marg-right-butt10').click();
                })
            })
        })
        //cy.pause();
    })

    it('Delete Simple Record. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED CONTEXT').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
                    cy.get('.disabled').first().click({ force: true }).then(reponse => {
                        cy.validateSelectList('#Id_Entity_CareFolderOutputTemplateBackupHasContext');
                        cy.get('#Id_Entity_CareFolderOutputTemplateBackupHasContext').select('Sec')
                        cy.wait(4000);
                        cy.validateSelectList('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext');
                        cy.get('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext').select('aaa');
                        cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasContext').click({ force: true });
                        cy.get('#BasePath_CareFolderOutputTemplateBackupHasContext').clear().wait(500).type('TEST CYPRESS').should('have.value', 'TEST CYPRESS')
                        .then(reponse => {
                            cy.get('.green').eq(1).click({ force: true });
                        })
                    })
                })
            })
        })
        cy.get('.expander-blue').first().click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get(".ui-grid-col-align").contains('aaa').first().dblclick({ force: true });
                cy.get('.marg-top-20 > .red').click();
                cy.get('.button-group > .marg-right-butt10').click();
            })
        })
        //cy.pause();
    })

    it('Delete Multiple Records. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED CONTEXT').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
                    cy.get('.disabled').first().click({ force: true }).then(reponse => {
                        cy.validateSelectList('#Id_Entity_CareFolderOutputTemplateBackupHasContext');
                        cy.get('#Id_Entity_CareFolderOutputTemplateBackupHasContext').select('Healthcare Facility')
                        cy.wait(4000);
                        cy.validateSelectList('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext');
                        cy.get('#EntityInstanceId_CareFolderOutputTemplateBackupHasContext').select('RS_VDA 8');
                        cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasContext').click({ force: true });
                        cy.get('#BasePath_CareFolderOutputTemplateBackupHasContext').clear().wait(500).type('TEST CYPRESS').should('have.value', 'TEST CYPRESS')
                        .then(reponse => {
                            cy.get('.green').eq(1).click({ force: true });
                        })
                    })
                })
            })
        })
        cy.wait(5000)
        cy.get('.expander-blue').first().click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").then(element => {
                    numberFila = element;
                    cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila);
                    cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(1).click({ force: true });
                    cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(2).click({ force: true });
                    //cy.pause()
                    cy.get('.red').first().click({ force: true });
                    cy.wait(4000);
                    cy.get('.button-group > .marg-right-butt10').click({ force: true });
                    cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila);

                })
            })
        })
        //cy.pause();
    })
    //#endregion
})