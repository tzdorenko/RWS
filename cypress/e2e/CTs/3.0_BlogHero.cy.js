describe('Blog Two Page', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/blogs/blog-two/');
    });

    it('Checks the blog hero section and takes a screenshot', () => {
        cy.get('main section').first().should('exist').and('be.visible');

        cy.get('main section').first().matchImageStable();
    });
});
