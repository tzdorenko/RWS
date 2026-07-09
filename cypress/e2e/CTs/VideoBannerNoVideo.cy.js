describe('Video Banner No Video', () => {
    beforeEach(() => {
        cy.visit('/test/git/ct-video-banner-no-video/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="213880"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="213880"]').matchImageStable();
    });
});
