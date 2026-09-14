describe('Video Banner', () => {
    beforeEach(() => {
        cy.visit('/test/git/ct-video-banner/');
    });

    it('Checks the component is present', () => {
        cy.get('section[id="197024"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="197024"] .button--play', { timeout: 5000 })
            .should('exist')
            .and('be.visible');
    });
});