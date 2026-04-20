Cypress.on('uncaught:exception', () => false);

describe('Banner component test – section 246600', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false&datestamp=consented');
        cy.setCookie('OptanonAlertBoxClosed', 'true');
        cy.visit('https://www.rws.com/test/git/content-slider/');
    });

    it('Checks the CT on the page and takes a screenshot', () => {
        cy.get('section#246600')
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(200); // стабілізація layout

        cy.get('section#246600').screenshot('section-246600');
    });
});
