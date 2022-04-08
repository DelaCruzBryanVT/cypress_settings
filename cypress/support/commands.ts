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

function login(username: string, password: string) {
    cy.request({
        method: 'POST',
        url: 'https://debugsite.myequipe2/webapi/api/v1/Session/Login',
        body: {
            clientApplication: 10004,
            cultureInfo: "it",
            username: username,
            password: password,
            persistent: false,
            sessionTokens: []
        }
    })
        .its('body')
        .then(body => {
            cy.log("login result", body);
            window.localStorage.setItem('cnet-jwt-auth-token', JSON.stringify(body.jwtToken));
            window.localStorage.setItem('cnet-session-info', JSON.stringify(body.sessionInfo));
        })
}
Cypress.Commands.add('login', login);


function validateSelectList(idSelectList: string) {
    cy.get(idSelectList).find('option').its("length").should("be.gt", 1);
}

Cypress.Commands.add('validateSelectList', validateSelectList);

function validateInputNumber(idInput: string, typeTest: string, valueData) {
    cy.get(idInput)
        .type(valueData)
        .invoke('val')
        .should(value => {
            if(typeTest == 'success'){
                expect(Number.isInteger(+value), 'Input value is an integer ').to.eq(true)
            }else
            (
                expect(Number.isInteger(+value), 'Input value is not an integer ').to.eq(true)
            )
            
        })
}

Cypress.Commands.add('validateInputNumber', validateInputNumber);