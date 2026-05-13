describe('List Cards Large', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/list-cards-large/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180385"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="266780"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180385"]').screenshot('section[id="180385"]');
        cy.get('section[id="266780"]').screenshot('section[id="266780"]');
    });
});
