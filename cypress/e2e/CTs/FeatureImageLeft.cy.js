Cypress.on('uncaught:exception', () => false);

describe('Feature Image Left', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/feat-img-left-and-sub-nab-ind-sticky/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#179860', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#179860').screenshot('section-179860');
    });
});
