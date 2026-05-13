describe('List Cards B', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/list-cards-b/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180385"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180385"]').screenshot('section[id="180385"]');
    });
});
