describe('List Filter Office', () => {
    beforeEach(() => {
        cy.visit('/test/git/filter-office/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180438"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180438"]').matchImage();
    });
});

