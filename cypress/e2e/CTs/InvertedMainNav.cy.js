describe('Inverted Main Navigation', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/inverted-main-nav/');
        cy.acceptCookies();
    });

    it('Checks the inverted main navigation and takes a screenshot', () => {
        cy.get('.inverted-overlay').should('exist');

        cy.screenshot('inverted-overlay');
    });
});
