describe('CRUD SETTING SECTION ASSOCIATED CONTEXT', () => {
    var numberFila = 0

    beforeEach(() => {
        cy.login();
        cy.wait(6000);
    })

    //#region ACORDEON ASOCIATED CONTEXT
    it('Save Button. Section Associated Context', () => {
        cy.saveCareFolderOutputTemplateBackup('TEST D', 'TEST CYPRESS MAIN', 'TEST CYPRESS MAIN', 'cypressmain@gmail.com', 'Always')
        cy.get('.expander-blue').first().click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
                    cy.get('.disabled').first().click({ force: true }).then(reponse => {
                        cy.saveAsociatedContext("Sec", "aaa", "TEST CYPRESS").then(reponse => {
                            cy.get('.green').eq(1).click({ force: true });
                        })
                    })
                })
            })
        })
        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
        cy.pause()
    })

    it('Cancel Button Without Changes. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MAIN').first().dblclick();
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
        cy.pause()
    })

    it('Cancel Button With Changes. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MAIN').first().dblclick();
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
        cy.pause()
    })

    it('Save and Stay Button. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MAIN').first().dblclick().then(resp => {
            cy.get('.expander-blue').first().click({ force: true }).then(x => {
                cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                    cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
                        cy.get('.disabled').first().click({ force: true }).then(reponse => {
                            cy.saveAsociatedContext("Sec", "ACU/DH 1", "TEST CYPRESS")
                            cy.get('[ng-click="vm.objParams.functions._save(vm.objParams.current, form, true)"]').click({ force: true });
                            cy.wait(4000)
                            cy.get('.marg-top-20 > .white-border').click({ force: true })
                        })
                    })
                })
            })
        })
        cy.get('.dropdown-menu').invoke('css', 'display', 'none')
        cy.pause()
    })

    it('Filter Record. Table Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MAIN').first().dblclick();
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
        cy.pause();
    })

    it('Select Record And Update Record. Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MAIN').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get(".ui-grid-col-align").contains('aaa').first().dblclick();
                cy.saveAsociatedContext("Sec", "ACU/DH PIE", "TEST CYPRESS")
                cy.get('.green').eq(1).click({ force: true });
            })
        })
        cy.pause();
    })

    it('Delete Simple Record. Table Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MAIN').first().dblclick().then(x => {
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
        cy.pause();
    })

    it('Delete Simple Record. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MAIN').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click().then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
                    cy.get('.disabled').first().click({ force: true }).then(reponse => {
                        cy.saveAsociatedContext("Sec", "aaa", "TEST CYPRESS").then(reponse => {
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
        cy.pause();
    })

    it('Delete Multiple Records. Section Associated Context', () => {
        cy.get(".ui-grid-col-align").contains('TEST CYPRESS MAIN').first().dblclick();
        cy.wait(5000)
        cy.get('.expander-blue').first().click({ force: true }).then(x => {
            cy.get('.radio-accordion-header-left').contains('Associated Contexts').then(x => {
                cy.get('.marg-right-butt1').eq(1).click({ force: true }).then(res => {
                    cy.get('.disabled').first().click({ force: true }).then(reponse => {
                        cy.saveAsociatedContext("Healthcare Facility", "STAB_W", "TEST CYPRESS").then(reponse => {
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
                    cy.pause()
                    cy.get('.red').first().click({ force: true });
                    cy.wait(4000);
                    cy.get('.button-group > .marg-right-butt10').click({ force: true });
                    cy.get(".ui-grid-col-left-nowrap-tooltip").its("length").should("be.eq", numberFila);
                   
                })
            })
        })
        cy.pause();
    })
    //#endregion
})