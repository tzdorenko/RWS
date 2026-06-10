describe('Popular Hero Resources', () => {
    beforeEach(() => {
        cy.visit('/test/git/popular-hero-resources/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="194322"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="194322"]').matchImage();
    });
});
