Cypress.on('uncaught:exception', () => false);

describe('Content Block Banner AutoPlay', () => {
    beforeEach(() => {
        cy.visit('/test/git/content-block-banner-autoplay/');
    });

    it('Checks section 233164 autoplay started, ignoring video frame', () => {
        cy.get('section#233164', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        // Перевіряємо, що плеєр існує і автоплей реально запустився
        cy.get('section#233164 video-js', { timeout: 10000 })
            .should('exist')
            .and('have.class', 'vjs-playing');
    });
});