describe('Banner component test on page', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false&datestamp=consented');
        cy.setCookie('OptanonAlertBoxClosed', 'true');
        cy.visit('https://www.rws.com/test/git/content-slider-carousel/');
    });

    it('Checks the CT on the page and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="251116"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="251116"]').screenshot('section-251116');
    });
});
