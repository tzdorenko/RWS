describe('Banner component test on page', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false&datestamp=consented');
        cy.setCookie('OptanonAlertBoxClosed', 'true');
        cy.visit('https://www.rws.com/test/git/redesign-2025/banner-with-box-small/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="275224"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="275224"]').screenshot(
            'cp cp--white banner_with_box variant--banner-with-box-small first',
        );
    });
});
