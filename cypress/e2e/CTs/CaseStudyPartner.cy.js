describe('List Cards GG', () => {
    beforeEach(() => {
        cy.visit('/test/git/list-cards-gg/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="275408"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="275408"]').matchImageStable({ maxDiffThreshold: 0.25 });
    });
});