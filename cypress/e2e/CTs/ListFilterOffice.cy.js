describe('List Filter Office', () => {
    beforeEach(() => {
        cy.visit('/test/git/filter-office/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="180438"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="180438"]').matchImageStable({ maxDiffThreshold: 0.25 });
    });
});

