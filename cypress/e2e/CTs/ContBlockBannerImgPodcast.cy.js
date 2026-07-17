Cypress.on('uncaught:exception', () => {
    return false;
});

describe('Banner Block Banner Image Podcast', () => {
    beforeEach(() => {
        cy.visit('/test/git/content-block-banner-autoplay-one-case/');
    });

    it('Checks section 233168 and takes screenshot', () => {
        cy.get('section[id="233168"]', { timeout: 20000 }).should('exist').and('be.visible');

        // Перевіряємо, що відео присутнє у компоненті
        cy.get('section[id="233168"] video').should('exist').and('be.visible');

        cy.get('section[id="233168"]')
            .scrollIntoView()
            .matchImageStable({
                screenshotConfig: { blackout: ['section[id="233168"] video'] },
            });
    });
});
