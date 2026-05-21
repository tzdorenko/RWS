Cypress.on('uncaught:exception', () => false);

describe('Hero Blog CTA', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/blogs/blog-ten/');
    });

    it('Hero Blog CTA is visible', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#228685', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#228685').matchImage();
    });
});

