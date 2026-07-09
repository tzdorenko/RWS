Cypress.on('uncaught:exception', () => false);

describe('Hidden Image', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false');
        cy.setCookie('OptanonAlertBoxClosed', 'true');

        cy.visit('/test/git/hidden-image/');
    });

    it('Hidden image is not rendered and page screenshot is taken', () => {
        // clean layout for screenshot
        cy.get('header, footer').invoke('css', 'display', 'none');

        // ✅ section exists but is non-rendering
        cy.get('section#255703').should('exist').and('have.class', 'non-rendering');

        // ✅ no image rendered inside
        cy.get('section#255703 img').should('not.exist');

        // ✅ correct screenshot approach
        cy.matchImageStable();
    });
});

