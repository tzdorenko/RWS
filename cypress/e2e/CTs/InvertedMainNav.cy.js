describe('Inverted Main Navigation', () => {
    beforeEach(() => {
        cy.visit('/test/git/inverted-main-nav/');
        cy.acceptCookies();
    });

    it('Checks the inverted main navigation and takes a screenshot', () => {
        cy.get('.inverted-overlay').should('exist');

        // Шрифти завантажені
        cy.document().its('fonts.status').should('equal', 'loaded');

        // Чекаємо завантаження видимих картинок навігації
        // (lazy-іконки в закритих мега-меню пропускаємо — на скріншот не потрапляють)
        cy.get('.mega_navigation__outer img').should(($imgs) => {
            $imgs.each((_, img) => {
                if (img.offsetParent === null) return; // невидима — скіп
                expect(img.naturalWidth, `img ${img.src}`).to.be.greaterThan(0);
            });
        });

        // Скріншот інвертованої навігації
        cy.get('.mega_navigation__outer').matchImage();
    });
});
