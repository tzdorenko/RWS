describe('Text Block Multiple', () => {
    beforeEach(() => {
        cy.visit('/test/git/textbox-multiple/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="242731"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="242732"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="242733"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="242731"]').matchImageStable();
        cy.get('section[id="242732"]').matchImageStable();
        cy.get('section[id="242733"]').matchImageStable();
    });
});
