describe('Banner component test on page', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false&datestamp=consented');
        cy.setCookie('OptanonAlertBoxClosed', 'true');
        cy.visit('https://www.rws.com/test/git/content-slider/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#246600').should('exist').and('be.visible');

        cy.get('section#246600').screenshot('section-246600');
    });
});
``;
