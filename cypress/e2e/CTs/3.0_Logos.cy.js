describe('Logos', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/img-collection/image-collection-logos/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#294017').should('exist').and('be.visible');

        cy.get('section#294017').matchImage();
    });
});
``;
