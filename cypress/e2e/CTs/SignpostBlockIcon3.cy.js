describe('Signpost Block Icon 3', () => {
    beforeEach(() => {
        cy.visit('/test/git/icon-3/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180174"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="180174"]').matchImageStable();
    });
});
