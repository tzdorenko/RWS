describe('Investor Report', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/investor-report/');
    });

    it('Checks the CT on the page and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="section-212398"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="section-212398"]').screenshot('section-212398');
    });
});
