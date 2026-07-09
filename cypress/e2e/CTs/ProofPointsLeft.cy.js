describe('Proof Points Left', () => {
    beforeEach(() => {
        cy.visit('/test/git/proof-points-left/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="197310"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="197310"]').matchImageStable();
    });
});
