Cypress.on('uncaught:exception', () => false);

describe('Hero Event V2', () => {
    beforeEach(() => {
        cy.visit('/test/git/hero-event-v2/');
    });

    it('Checks Hero Event V2 on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#195090', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#195090').matchImageStable();
    });
});

