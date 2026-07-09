describe('Vertical Block', () => {
    beforeEach(() => {
        cy.visit('/test/git/vertical-blocks/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="197323"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="197323"]').matchImageStable();
    });
});
