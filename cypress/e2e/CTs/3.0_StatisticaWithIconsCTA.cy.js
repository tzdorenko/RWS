describe('Statistics with Icons and CTA', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/statistics-with-icons-and-cta/statistics-icons-cta/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#294025').should('exist').and('be.visible');

        cy.get('section#294025').matchImage();
    });
});
``;
