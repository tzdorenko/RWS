Cypress.on('uncaught:exception', () => false);

describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/description/');
    });

    it('Footer', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('.footer.container', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('.footer.container').screenshot('footer-container');
    });
});
