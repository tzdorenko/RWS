Cypress.on('uncaught:exception', () => {
    return false;
});

describe('Banner Block Banner Image Podcast', () => {
    beforeEach(() => {
        cy.visit('/test/git/content-block-banner-autoplay-one-case/');
    });

    it('Checks section 233168 autoplay started, ignoring video frame', () => {
        cy.get('section[id="233168"]', { timeout: 20000 })
            .scrollIntoView()
            .should('exist')
            .and('be.visible');

        // Перевіряємо, що плеєр існує і автоплей реально запустився
        cy.get('section[id="233168"] video-js', { timeout: 10000 })
            .should('exist')
            .and('have.class', 'vjs-playing');
    });
});