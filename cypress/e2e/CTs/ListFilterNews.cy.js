describe('List Filter News', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/filter-news/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180334"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180334"]').matchImage();
    });
});

