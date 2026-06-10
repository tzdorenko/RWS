describe('Popular Hero Office', () => {
    beforeEach(() => {
        cy.visit('/test/git/popular-hero-office/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="194320"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="194320"]').matchImage();
    });
});
