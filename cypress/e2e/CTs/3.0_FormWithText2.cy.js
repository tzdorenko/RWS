describe('Form with Text 2', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/form-with-text/form-with-text/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#293657').should('exist').and('be.visible');

        cy.get('section#293657').matchImage();
    });
});
``;
