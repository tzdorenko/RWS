describe('Blog Hero', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/blogs/blog-one');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#296580').should('exist').and('be.visible');

        cy.get('section#296580').matchImage();
    });
});
``;
