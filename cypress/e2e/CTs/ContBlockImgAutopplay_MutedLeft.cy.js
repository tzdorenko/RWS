describe('Content Block Image (Video) – Left Center', () => {
    beforeEach(() => {
        cy.visit('/test/git/content-block-banner-autoplay/');
    });

    it('Checks the component is present', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#233164', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.get('section#233164 video-js').should('exist');
    });
});