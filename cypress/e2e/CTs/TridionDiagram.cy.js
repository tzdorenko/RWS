describe('Tridion Diagram', () => {
    beforeEach(() => {
        cy.visit('/test/git/trsidion-diagram/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="200350"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="200350"]').matchImageStable();
    });
    ``;
});
