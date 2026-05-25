describe('Jump Links', () => {
    beforeEach(() => {
        cy.visit('/test/git/jump-links/');
    });

    it('Checks the jump links and takes a screenshot', () => {
        cy.get('.jump_links_block__wrapper', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('.jump_links_block__wrapper').matchImage();
    });
});

