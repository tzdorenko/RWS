Cypress.on('uncaught:exception', () => false);

describe('Hidden Image', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/hidden-image/');
    });

    it('Checks Hidden Image on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#255703', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#255703').screenshot('section-255703');
    });
});
