describe('Banner component test on page', () => {
    beforeEach(() => {
        // Відкриваємо сторінку
        cy.visit('https://www.rws.com/test/git/comparison-table/');

        // Закриваємо кукі банер, якщо він є
        cy.acceptCookies();
    });

    it('Checks the banner component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="180449"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="180449"]').screenshot(
            'cp cp--white banner_with_box variant--banner-with-box first',
        );
    });
});
