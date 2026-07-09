describe('Video Banner End', () => {
    beforeEach(() => {
        cy.visit('/test/git/video-banner-end/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="197024"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="197024"]').matchImageStable();
    });
});
