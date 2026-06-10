describe('Signpost Block Icon Video', () => {
    beforeEach(() => {
        cy.visit('/test/git/icon-video/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="205349"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="205349"]').matchImage();
    });
});
