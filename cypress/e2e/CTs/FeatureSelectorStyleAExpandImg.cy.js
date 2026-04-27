Cypress.on('uncaught:exception', () => false);

describe('Feature Selector - Style A - Expand Image', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/future-selector-style-a/');
    });

    it('Checks Expand Image on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#187918', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#187918').screenshot('section-187918');
    });
});
