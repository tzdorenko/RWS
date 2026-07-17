describe('Resource Centre', () => {
    beforeEach(() => {
        cy.visit('/test/git/resource-centre/new/rws-insights/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="Global-Resource-Center"]', { timeout: 5000 })
            .should('exist')
            .and('be.visible');

        // Шрифти завантажені
        cy.document().its('fonts.status').should('equal', 'loaded');

        // Чекаємо завантаження видимих картинок компонента
        // (приховані іконки фільтрів пропускаємо — вони lazy і на скріншот не потрапляють)
        cy.get('section[id="Global-Resource-Center"] img').should(($imgs) => {
            $imgs.each((_, img) => {
                if (img.offsetParent === null) return; // невидима — скіп
                expect(img.naturalWidth, `img ${img.src}`).to.be.greaterThan(0);
            });
        });

        // Скріншот і порівняння (без matchImageStable, щоб не висіти на прихованих іконках)
        cy.get('section[id="Global-Resource-Center"]').matchImage();
    });
});
