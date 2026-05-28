describe('Default Feature List', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/default-feature-image/default-feature-list/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#294028').should('exist').and('be.visible');

        cy.get('section#294028').matchImage();
    });
});
``;
