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
// Close the OneTrust Cookie Notice
Cypress.Commands.add('acceptCookies', () => {
    cy.get('body', { timeout: 5000 }).then(($body) => {
        const button = $body.find('#onetrust-accept-btn-handler');

        if (button.length > 0) {
            cy.wrap(button).should('be.visible').click({ force: true });
        } else {
            cy.log('Cookie notice not found, skipping');
        }
    });
});
