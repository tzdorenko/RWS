describe('Related Content with Button', () => {
    beforeEach(() => {
        cy.visit('/test/git/related-content-button/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180231"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="180231"]').matchImage();
    });
});
