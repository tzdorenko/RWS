describe('Related Content', () => {
    beforeEach(() => {
        cy.visit('/test/git/related-content/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="180231"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="180231"]').matchImageStable({ maxDiffThreshold: 0.02 });
    });
});
