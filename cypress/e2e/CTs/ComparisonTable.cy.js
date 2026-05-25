describe('Comparison table', () => {
    beforeEach(() => {
        cy.visit('/test/git/comparison-table/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180449"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180449"]').matchImage();
    });
});

