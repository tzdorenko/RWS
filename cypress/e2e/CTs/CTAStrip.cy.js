describe('CTA Strip', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/strip/');
    });

    it('Checks CTA Strip and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="274135"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="274135"]').screenshot(
            'cp cp--white banner_with_box variant--banner-with-box first',
        );
    });
});
