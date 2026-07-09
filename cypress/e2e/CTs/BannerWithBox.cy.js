describe('Banner With Box', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/git/banner-with-box/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#275515').should('exist').and('be.visible');

        cy.get('section#275515').matchImageStable();
    });
});
``;

