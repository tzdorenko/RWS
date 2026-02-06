describe('Banner component test on page', () => {
    beforeEach(() => {
        // Відкриваємо сторінку
        cy.visit('https://www.rws.com/test/git/redesign-2025/banner-with-box-small/');

        // Закриваємо кукі банер, якщо він є
        cy.acceptCookies();
    });

    it('Checks the banner component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="275224"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="275224"]').screenshot('banner-with-box');
    });
});
