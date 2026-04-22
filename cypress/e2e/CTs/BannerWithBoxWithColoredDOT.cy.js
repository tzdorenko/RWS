describe('Banner With Box With Colored DOT', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/redesign-2025/colored-dot/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="275265"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="275265"]').screenshot(
            'cp cp--white banner_with_box variant--banner-with-box first',
        );
    });
});
