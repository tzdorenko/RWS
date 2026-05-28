describe('Alternative Media Double Image', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/alternative-media/alternative-media-double-image/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#293679').should('exist').and('be.visible');

        cy.get('section#293679').matchImage();
    });
});
``;
