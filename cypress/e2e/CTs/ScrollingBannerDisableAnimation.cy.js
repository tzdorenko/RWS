describe('Scrolling Banner Disable Animation', () => {
    beforeEach(() => {
        cy.visit('/test/git/scrolling-banner-disable-animation/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="256116"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="256116"]').matchImageStable({ maxDiffThreshold: 0.45 });
    });
});