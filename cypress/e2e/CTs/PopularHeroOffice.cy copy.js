describe('Popular Hero Partner', () => {
    beforeEach(() => {
        cy.visit('/test/git/popular-hero-partner/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="194321"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="194321"]').matchImage();
    });
});
