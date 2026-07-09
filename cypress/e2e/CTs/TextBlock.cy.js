describe('Text Block', () => {
    beforeEach(() => {
        cy.visit('/test/git/textbox/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="180292"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="180292"]').matchImageStable();
    });
});
