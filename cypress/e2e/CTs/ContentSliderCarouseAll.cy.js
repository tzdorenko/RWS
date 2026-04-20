Cypress.on('uncaught:exception', () => false);

describe('Content Slider Carousel – component screenshot', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false&datestamp=consented');
        cy.setCookie('OptanonAlertBoxClosed', 'true');

        cy.visit('https://www.rws.com/test/git/content-slider-carousel/');
    });

    it('Checks the component and takes a component-only screenshot', () => {
        // ✅ Ховаємо header + footer, щоб не потрапляли в скрін
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#251116', { timeout: 15000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#251116').screenshot('section-251116');
    });
});
