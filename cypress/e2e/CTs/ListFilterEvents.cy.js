describe('List Filter Events', () => {
    beforeEach(() => {
        cy.visit('/test/git/filter-event-and-webinar/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180342"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180342"]').matchImageStable();
    });
});

