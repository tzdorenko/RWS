describe('Popular Hero Event', () => {
    beforeEach(() => {
        cy.visit('/test/git/popular-hero-event/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="194319"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="194319"]').matchImage();
    });
});
