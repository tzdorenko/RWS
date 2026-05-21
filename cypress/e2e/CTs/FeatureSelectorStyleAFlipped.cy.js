Cypress.on('uncaught:exception', () => false);

describe('Feature Selector - Style A - Flipped CTA', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/feature-selector-style-a-cta-flipped/');
    });

    it('Checks Flipped CTA on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#187918', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#187918').matchImage();
    });
});

