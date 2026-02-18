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
        // 1) OneTrust банер (якщо з’явиться на інших RWS сторінках)
        const oneTrustBtn = $body.find('#onetrust-accept-btn-handler');
        if (oneTrustBtn.length > 0) {
            cy.wrap(oneTrustBtn).click({ force: true });
            return;
        }

        // 2) RWS internal cookie banner (цей саме на твоїй сторінці!)
        const rwsCookieClose = $body.find(
            '.cookie-banner__close, .cookie-close-btn, .cookies-close',
        );
        if (rwsCookieClose.length > 0) {
            cy.wrap(rwsCookieClose).click({ force: true });
            return;
        }

        // 3) Якщо банера нема
        cy.log('Cookie banner not found — skipping');
    });
});
