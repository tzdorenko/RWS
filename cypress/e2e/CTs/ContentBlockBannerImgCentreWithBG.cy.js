describe('Content Block Banner Image Centered with Background', () => {
    beforeEach(() => {
        // Відкриваємо сторінку
        cy.visit('https://www.rws.com/test/git/content-block-banner-autoplay/');

        // Закриваємо кукі банер, якщо він є
        cy.acceptCookies();
    });

    it('Checks the CT on the page and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="233164"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="233164"]').screenshot('content_block_with_image container');
    });
});
