describe('TEST SETTING ASSOCIATED SCHEDULES', () => {
    var numberFila = 0

    beforeEach(() => {
        cy.login('ca', 'Qwerty.1234').then(x => {
            cy.visit('#/settings/acff5f0f-b221-42be-b862-2ec5afb4a3a7/pluralform/config_care_folder_output_template_backup')
        });
    })

    it('Save Button. Section Associated Schedules', () => {
        cy.get('[ng-click="vm.addNewWrapped()"]').click();
        cy.get('#Id_CareFolderOutputTemplate_CareFolderOutputTemplateBackup').select('TEST D')
        cy.get('#Name_CareFolderOutputTemplateBackup').type('TEST CYPRESS ASOCIATED SCHEDULES').should('have.value', 'TEST CYPRESS ASOCIATED SCHEDULES')
        cy.get('#FromDate_CareFolderOutputTemplateBackup').clear().type('8').should('have.value', '8')
        cy.get('#ToDate_CareFolderOutputTemplateBackup').clear().type('18').should('have.value', '18')
        cy.get('.hasDatepicker').first().type('29/04/2022').should('have.value', '29/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('.hasDatepicker').eq(1).type('30/04/2022').should('have.value', '30/04/2022')
        cy.get('#ui-datepicker-div')
            .invoke('css', 'display', 'none')
        cy.get('#BasePath_CareFolderOutputTemplateBackup').type('TEST CYPRESS ASOCIATED SCHEDULES').should('have.value', 'TEST CYPRESS ASOCIATED SCHEDULES')
        cy.get('#RetentionCount_CareFolderOutputTemplateBackup').type('12').should('have.value', '12')
        cy.get('#NotifyToEmail_CareFolderOutputTemplateBackup').type('cypress@gmail.com').should('have.value', 'cypress@gmail.com')
        cy.get('#Id_CareFolderOutputTemplateBackupNotificationType_CareFolderOutputTemplateBackup').select('Always')
        cy.get('#MinimumFreeSpaceInBytes_CareFolderOutputTemplateBackup').type('99').should('have.value', '99')
        cy.get('input[id="checkIsEnabled_CareFolderOutputTemplateBackup').click({ force: true });
        cy.get('input[id="checkIncludeDischargedHospitalizations_CareFolderOutputTemplateBackup"').click({ force: true });
        cy.get('input[id="checkDeleteFolderOnFailure_CareFolderOutputTemplateBackup"').click({ force: true }).then(response =>{
            cy.get('.expander-blue').eq(2).click({ force: true }).then(x => {
                cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                    cy.wait(3000)
                    cy.get('.marg-right-butt1').eq(11).dblclick({ force: true }).then(res => {
                        cy.get('.disabled').eq(2).click({ force: true }).then(reponse => {
                            cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').type('4');
                            cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
                            cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').type('4');
                            cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').type('4');
                            cy.get('.green').eq(1).click({ force: true }).then(response => {
                                cy.get('.dropdown-menu').invoke('css', 'display', 'none')
                            })
                        })
                    })
                })
                cy.wait(20000)
            })
        })
    })

    it('Cancel Button Without Changes. Section Associated Schedules', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED SCHEDULES').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(2).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get(".ui-grid-col-align").contains('4').first().dblclick();
                cy.get('.marg-top-20 > .white-border').click()
                cy.wait(1000)
            })
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get(".grid").then((x) => {
                    cy.get(".ui-grid-col-align")
                });
            })
        })
    })

    it('Cancel Button With Changes. Section Associated Schedules', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED SCHEDULES').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(2).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get(".ui-grid-col-align").contains('4').first().dblclick();
                cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').clear();
                cy.wait(2000);
                cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').type('2');
                cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
                cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').clear();
                cy.wait(2000);
                cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').type('2');
                cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').clear();
                cy.wait(2000);
                cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').type('2');
                cy.get('.marg-top-20 > .white-border').click()
                cy.get('.button-group > .marg-right-butt10').click()
                cy.wait(1000)
            })
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get(".grid").then((x) => {
                    cy.get(".ui-grid-col-align")
                });
            })
        })

    })

    it('Save and Stay Button. Section Associated Schedules', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED SCHEDULES').first().dblclick()
        cy.wait(3000)
        cy.get('.expander-blue').eq(2).click({ force: true }).then(x => {
            cy.wait(3000)
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.wait(3000)
                cy.get('.marg-right-butt1').eq(11).dblclick({ force: true }).then(res => {
                    cy.get('.disabled').eq(2).click({ force: true }).then(reponse => {
                        cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').type('5');
                        cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
                        cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').type('5');
                        cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').type('5');
                        cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click({ force: true });
                        cy.wait(20000)
                        cy.get('.marg-top-20 > .white-border').click({ force: true })
                        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
                    })
                })
            })
        })
    })

    it('Filter Record. Section Table Associated Schedules', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED SCHEDULES').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(2).click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get('.ui-grid-filter-input').eq(4).type('4')
                cy.get(".grid").eq(2).then((x) => {
                    cy.get(".ui-grid-canvas").eq(5)
                        .and(($tr) => {
                            expect($tr.get(0).textContent, "Filter").to.contains("4");
                        });
                });
            })
        })
    })

    it('Update Button. Section Associated Schedules', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED SCHEDULES').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(2).click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get(".ui-grid-col-align").contains('4').first().dblclick().then(response =>{
                    cy.wait(1000)
                    cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
                    cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').clear().wait(2000).type('2');
                    cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
                    cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').clear().wait(2000).type('2');
                    cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').clear().wait(2000).type('2');
                    cy.get('.green').eq(1).click({ force: true });
                    cy.wait(20000)
                })
                cy.get('.dropdown-menu').invoke('css', 'display', 'none');
            })
        })
    })

    it('Delete Simple Record. Section Table Associated Schedules', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED SCHEDULES').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(2).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get(".ui-grid-col-align").contains('2').first().click();
                cy.wait(4000);
                cy.get('.red').eq(2).click();
                cy.wait(4000);
                cy.get('.button-group > .marg-right-butt10').click();
                cy.wait(5000)
            })
        })
    })

    it('Delete Simple Record. Section Form Associated Schedules', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED SCHEDULES').first().dblclick();
        cy.wait(5000)
        cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
            cy.wait(3000)
            cy.get('.marg-right-butt1').eq(11).dblclick({ force: true }).then(res => {
                cy.get('.disabled').eq(2).click({ force: true }).then(reponse => {
                    cy.wait(1000)
                    cy.get('#checkIsEnabled_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
                    cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').type('4');
                    cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
                    cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').type('4');
                    cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').type('4');
                    cy.get('.green').eq(1).click({ force: true });
                    cy.wait(20000)
                    cy.get('.dropdown-menu').invoke('css', 'display', 'none')
                })
            })
        })
        cy.get('.expander-blue').eq(2).click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get(".ui-grid-col-align").contains('4').first().dblclick();
                cy.get('.marg-top-20 > .red').click();
                cy.get('.button-group > .marg-right-butt10').click();
            })
        })
    })

    it('Delete Multiple Records. Section Associated Schedules', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS ASOCIATED SCHEDULES').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').eq(2).click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.wait(3000)
                cy.get('.marg-right-butt1').eq(11).dblclick({ force: true }).then(res => {
                    cy.get('.disabled').eq(2).click({ force: true }).then(reponse => {
                        cy.get('#MaxDegreeOfParallelism_CareFolderOutputTemplateBackupHasSchedule').type('6');
                        cy.get('#checkWaitForPreviousToComplete_CareFolderOutputTemplateBackupHasSchedule').click({ force: true });
                        cy.get('#RetryCount_CareFolderOutputTemplateBackupHasSchedule').type('6');
                        cy.get('#TimeoutInSeconds_CareFolderOutputTemplateBackupHasSchedule').type('6');
                        cy.get('.green').eq(1).click({ force: true });
                        cy.wait(20000)
                        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
                    })
                })
            })
        })
        cy.wait(7000)
        cy.get('.expander-blue').eq(2).click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Schedules').then(x => {
                cy.get(".ui-grid-col-align").its("length").then(element =>{
                    numberFila = element;
                    cy.get(".ui-grid-col-align").its("length").should("be.eq", numberFila);
                    cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(3).click({ force: true });
                    cy.get('.ui-grid-cell-contents > .ui-grid-selection-row-header-buttons').eq(4).click({ force: true });
                    //cy.pause()
                    cy.get('.red').eq(2).click({ force: true });
                    cy.wait(4000);
                    cy.get('.button-group > .marg-right-butt10').click({ force: true });
                    cy.get(".ui-grid-col-align").its("length").should("be.eq", numberFila);
                })
            })
        })
    })
})