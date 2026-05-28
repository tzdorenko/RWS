describe('Form with Text', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/form-with-text/multestep-one/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#295330').should('exist').and('be.visible');

        cy.get('section#295330').matchImage();
    });
});
``;
