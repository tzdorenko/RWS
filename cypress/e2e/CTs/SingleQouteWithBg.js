describe('Signpost Block Icon Video', () => {
    beforeEach(() => {
        cy.visit('/test/git/single-quote-with-bg/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="274171"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="274171"]').matchImage();
    });
});
