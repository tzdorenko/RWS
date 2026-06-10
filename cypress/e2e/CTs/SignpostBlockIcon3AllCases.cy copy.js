describe('Signpost Block Icon 3 All Cases', () => {
    beforeEach(() => {
        cy.visit('/test/git/icon-3-logos/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180174"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="260540"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="260545"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="260538"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="180174"]').matchImage();
        cy.get('section[id="260540"]').matchImage();
        cy.get('section[id="260545"]').matchImage();
        cy.get('section[id="260538"]').matchImage();
    });
});
