describe('Tabs Buttons', () => {
    beforeEach(() => {
        cy.visit('/test/git/tabs-buttons/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="section-203558"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="section-203558"]').matchImageStable();
    });
});
