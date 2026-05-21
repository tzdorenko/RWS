Cypress.on('uncaught:exception', () => false);

describe('Description – Two Lines', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/description-two-lines/');
    });

    it('Checks CT - Description on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#196706', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#196706').matchImage();
    });
});

