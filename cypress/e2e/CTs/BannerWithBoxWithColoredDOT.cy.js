describe('Banner With Box With Colored DOT', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/redesign-2025/colored-dot/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('section[id="275265"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="275265"]').matchImage();
    });
});

