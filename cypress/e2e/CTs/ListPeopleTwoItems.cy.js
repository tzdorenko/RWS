describe('List People Two Items', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/list-people-two-items/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="267915"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="267915"]').matchImage();
    });
});

