// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands.ts'

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            login(username: string, password: string): Cypress.Chainable<null>;
            validateSelectList(idSelectList:string): Cypress.Chainable<null>;
            validateInputNumber(idInput: string, typeTest: string, valueData): Cypress.Chainable<null>;
        }
    }
}