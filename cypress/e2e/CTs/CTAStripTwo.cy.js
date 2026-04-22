describe('CTA Strip Two', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/two-st-strip/');
    });

    it('Checks CTA Strip Two and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="197377"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="197377"]').screenshot(
            'cp cp--white banner_with_box variant--banner-with-box first',
        );
    });
});
