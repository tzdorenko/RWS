describe('Popular Hero Blog', () => {
    beforeEach(() => {
        cy.visit('/test/git/popular-hero-blog/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="194318"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="194318"]').matchImage();
    });
});
