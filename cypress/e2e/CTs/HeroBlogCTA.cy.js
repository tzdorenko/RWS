Cypress.on('uncaught:exception', () => false);

describe('Hero Blog CTA', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/blogs/blog-ten/');
    });

    it('Checks Full Screen Banner on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('..blog_hero__text_block__description', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('..blog_hero__text_block__description').screenshot(
            '.blog_hero__text_block__description',
        );
    });
});
