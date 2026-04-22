Cypress.on('uncaught:exception', () => false);

describe('Feature Image Left Style A', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/img-feature-left-style-a/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#196754', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#196754').screenshot('section-196754');
    });
});
