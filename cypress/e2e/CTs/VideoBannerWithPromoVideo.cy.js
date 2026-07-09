describe('Video Banner with Promo Video', () => {
    beforeEach(() => {
        cy.visit('/test/git/video-banner-small-with-promo-video/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="275692"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="275692"]').matchImageStable();
    });
});
