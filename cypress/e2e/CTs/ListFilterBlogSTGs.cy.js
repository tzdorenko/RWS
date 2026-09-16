describe('List Filter Blog', () => {
    beforeEach(() => {
        cy.visit('/test/git/filter-blog/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('.col__12.list__results.list__results__blog', { timeout: 10000 })
            .should('exist')
            .and('be.visible');

        // Чекаємо, поки картки статей реально відрендеряться (динамічний список з API)
        cy.get('.blog_item', { timeout: 10000 }).should('have.length.greaterThan', 0);

        cy.get('.col__12.list__results.list__results__blog').matchImageStable();
    });
});