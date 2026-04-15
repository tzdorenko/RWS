describe('Content block with video banner', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false&datestamp=consented');
        cy.setCookie('OptanonAlertBoxClosed', 'true');
        cy.visit('https://www.rws.com/test/git/content-block-cta-img-left-rght/');
    });

    it('Checks video banner and takes stable screenshot', () => {
        cy.get('section#233164', { timeout: 10000 }).scrollIntoView().should('be.visible');

        // structural checks
        cy.get('section#233164 video-js').should('exist');
        cy.get('section#233164 .text_header__title').should('be.visible');

        // visual check without video
        cy.get('section#233164 .content_block_with_image__content').screenshot(
            'content-block-233164-content',
        );
    });
});
