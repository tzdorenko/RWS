describe('Alternative Media With Checkmarks', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit(
            '/test/3version/alternative-media/with-checkmarks/alternative-media-with-checkmarks/',
        );
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#293701').should('exist').and('be.visible');
        cy.get('section#293691').should('exist').and('be.visible');
        cy.get('section#293711').should('exist').and('be.visible');
        cy.get('section#293644').should('exist').and('be.visible');

        cy.get('section#293701').matchImage();
        cy.get('section#293691').matchImage();
        cy.get('section#293711').matchImage();
        cy.get('section#293644').matchImage();
    });
});
``;
