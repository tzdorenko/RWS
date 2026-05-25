describe('List Cards C', () => {
    beforeEach(() => {
        cy.visit('/test/git/list-cards-c/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180385"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180385"]').matchImage();
    });
});

