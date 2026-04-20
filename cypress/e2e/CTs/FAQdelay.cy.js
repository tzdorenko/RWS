Cypress.on('uncaught:exception', () => false);

describe('CT – Description component test', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false&datestamp=consented');
        cy.setCookie('OptanonAlertBoxClosed', 'true');

        cy.visit('https://www.rws.com/test/git/faq/faq-for-live/');
    });

    it('Checks CT - Description on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#250882', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#250882').screenshot('section-250882');
    });
});
