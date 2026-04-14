describe('Banner component test on page', () => {
    beforeEach(() => {
        // Відкриваємо сторінку
        cy.visit('https://www.rws.com/test/git/ai-ask/');

        // Закриваємо кукі банер, якщо він є
        cy.acceptCookies();
    });

    it('Checks the banner component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="284059"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="284059"]').screenshot(
            'cp cp--original cp--white content_block_with_ai_search variant--banner-ai default',
        );
    });
});
