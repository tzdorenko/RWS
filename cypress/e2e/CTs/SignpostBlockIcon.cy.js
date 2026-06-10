describe('Signpost Block Icon', () => {
    beforeEach(() => {
        cy.visit('/test/git/icon/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180173"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="180173"]').matchImage();
    });
});
