Cypress.on('uncaught:exception', () => false);

describe('Filling Details', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/filing-details/');
    });

    it('Checks Filling Details on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#201702', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#201702').screenshot('section-201702');
    });
});
