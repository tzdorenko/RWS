describe('Video Banner', () => {
    beforeEach(() => {
        cy.visit('/test/git/ct-video-banner/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="197024"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="197024"]').matchImageStable();
    });
});
