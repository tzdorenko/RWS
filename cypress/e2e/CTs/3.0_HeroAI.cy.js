describe('Hero AI', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/hero3/hero-3-ai/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#294018').should('exist').and('be.visible');

        cy.get('section#294018').matchImageStable();
    });
});
``;
