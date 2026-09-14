Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('clientHeight')) {
        return false;
    }
});

describe('Inverted Main Navigation CT', () => {
    beforeEach(() => {
        cy.visit('/test/git/inverted-main-nav/');
    });

    it('Checks the CT on the page and takes a screenshot', () => {
        cy.get('.inverted-overlay', { timeout: 5000 }).should('exist');
        cy.get('.inverted-overlay').matchImageStable();
    });
});