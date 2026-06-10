describe('Scrolling Banner Disable Parallax', () => {
    beforeEach(() => {
        cy.visit('/test/git/scrolling-banner-disable-parallax/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="256115"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="256115"]').matchImage();
    });
});
