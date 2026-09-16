describe('Content Block Banner Image Centered with Background', () => {
    beforeEach(() => {
        cy.visit('/test/git/content-block-banner-autoplay/');
        cy.acceptCookies();
    });

    it('Checks the CT on the page is present', () => {
        cy.get('section[id="233164"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="233164"] video-js').should('exist');
    });
});
