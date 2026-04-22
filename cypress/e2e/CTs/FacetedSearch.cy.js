Cypress.on('uncaught:exception', () => false);

describe('Faceted Search', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/faced-search/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#194452', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#194452').screenshot('section-194452');
    });
});
