Cypress.on('uncaught:exception', () => false);

describe('Footer', () => {
    beforeEach(() => {
        cy.visit('/test/git/description/');
    });

    it('Footer is visible', () => {
        cy.get('header').invoke('css', 'display', 'none');

        cy.get('.footer.container', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.get('.footer.container').matchImage();
    });
});

