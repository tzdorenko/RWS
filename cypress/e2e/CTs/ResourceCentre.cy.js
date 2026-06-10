describe('Resource Centre', () => {
    beforeEach(() => {
        cy.visit('/test/git/resource-centre/new/rws-insights-ac/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="Global-Resource-Center"]', { timeout: 5000 })
            .should('exist')
            .and('be.visible');

        cy.get('section[id="Global-Resource-Center"]').matchImage();
    });
});
