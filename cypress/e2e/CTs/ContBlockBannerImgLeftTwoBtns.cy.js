describe('Banner Block Banner Image Left Two Buttons', () => {
    Cypress.on('uncaught:exception', () => {
        return false;
    });

    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-banners/');
    });

    it('Checks section 230415 and takes screenshot', () => {
        cy.get('section[id="230415"]', { timeout: 10000 }).should('exist').and('be.visible');

        cy.get('section[id="230415"]').scrollIntoView().screenshot('section-230415');
    });
});
``;
