describe('List Announcement', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/list-filters-announcement/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="section-180474"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="section-180474"]').screenshot('section[id="section-180474"]');
    });
});
