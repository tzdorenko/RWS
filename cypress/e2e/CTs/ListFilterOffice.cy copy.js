describe('List Filter Partner', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/filter-partner/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180413"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180413"]').screenshot('section[id="180413"]');
    });
});
