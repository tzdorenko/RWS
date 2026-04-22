describe('Content Block Image (Video) – Left Center', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-banner-autoplay/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        // прибираємо header/footer для чистого скріншоту
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#233164', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.get('section#233164').screenshot('content-block-233164');
    });
});
``;
