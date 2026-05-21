Cypress.on('uncaught:exception', () => false);

describe('Hero Office', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/hero-office/');
    });

    it('Checks Hero Office on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#180432', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#180432').matchImage();
    });
});

