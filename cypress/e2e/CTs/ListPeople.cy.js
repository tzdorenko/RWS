describe('List People', () => {
    beforeEach(() => {
        cy.visit('/test/git/list-people/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="202296"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="202296"]').matchImage();
    });
});

