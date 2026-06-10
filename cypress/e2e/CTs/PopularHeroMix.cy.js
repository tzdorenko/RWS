describe('Popular Hero Mix', () => {
    beforeEach(() => {
        cy.visit('/test/git/popular-hero-mix/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="211253"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="211253"]').matchImage();
    });
});
