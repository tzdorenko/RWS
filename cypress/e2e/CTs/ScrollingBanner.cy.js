describe('Scrolling Banner', () => {
    beforeEach(() => {
        cy.visit('/test/git/scrolling-banner/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="240039"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="240039"]').matchImage();
    });
});
