describe('Blog Two Page', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/blogs/blog-two/');
    });

    it('Checks the blog hero section and takes a screenshot', () => {
        cy.get('section#296585').should('exist').and('be.visible');

        cy.get('section#296585').matchImage();
    });

    it('Checks the blog content section and takes a screenshot', () => {
        cy.get('section[data-theme="dots-enhanced"]').should('exist').and('be.visible');

        cy.get('section[data-theme="dots-enhanced"]').matchImage();
    });
});
