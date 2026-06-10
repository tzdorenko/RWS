describe('Tabs', () => {
    beforeEach(() => {
        cy.visit('/test/git/tabs/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="192148"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="192148"]').matchImage();
    });
});
