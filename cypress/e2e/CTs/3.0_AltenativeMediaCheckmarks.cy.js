describe('Alternative Media With Checkmarks', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit(
            '/test/3version/alternative-media/with-checkmarks/alternative-media-with-checkmarks/',
        );
    });

    it('Checks the banner component and takes a screenshot', () => {
        // 1. Спочатку чекаємо самі секції
        cy.get('section#293701', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('section#293691').should('exist').and('be.visible');
        cy.get('section#293711').should('exist').and('be.visible');
        cy.get('section#293644').should('exist').and('be.visible');

        // 2. Шрифти завантажені
        cy.document().its('fonts.status').should('equal', 'loaded');

        // 3. Картинки в секціях реально завантажені
        cy.get('section#293701, section#293691, section#293711, section#293644')
            .find('img')
            .should(($imgs) => {
                $imgs.each((_, img) => {
                    expect(img.naturalWidth, `img ${img.src}`).to.be.greaterThan(0);
                });
            });

        // 4. Скріншоти
        cy.get('section#293701').matchImageStable();
        cy.get('section#293691').matchImageStable();
        cy.get('section#293711').matchImageStable();
        cy.get('section#293644').matchImageStable();
    });
});
