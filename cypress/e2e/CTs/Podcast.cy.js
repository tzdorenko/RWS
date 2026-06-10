describe('Podcast', () => {
    beforeEach(() => {
        cy.visit('/test/git/podcast/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="233858"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="248037"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="248036"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="248035"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="233858"]').matchImage();
        cy.get('section[id="248037"]').matchImage();
        cy.get('section[id="248036"]').matchImage();
        cy.get('section[id="248035"]').matchImage();
    });
});
