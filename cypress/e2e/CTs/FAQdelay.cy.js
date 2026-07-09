Cypress.on('uncaught:exception', () => false);

describe('FAQ with Delay', () => {
    beforeEach(() => {
        cy.visit('/test/git/faq/faq-for-live/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#250882', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#250882').matchImageStable();
    });
});

