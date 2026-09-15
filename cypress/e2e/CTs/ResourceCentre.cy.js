describe('Resource Centre', () => {
    beforeEach(() => {
        cy.visit('/test/git/resource-centre/new/rws-insights/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="Global-Resource-Center"]', { timeout: 5000 })
            .should('exist')
            .and('be.visible');

        cy.get('section[id="Global-Resource-Center"] .resource_item', { timeout: 10000 })
            .should('have.length.greaterThan', 0);

        cy.get('section[id="Global-Resource-Center"]').matchImageStable({ maxDiffThreshold: 0.35 });
    });
});