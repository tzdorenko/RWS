Cypress.on('uncaught:exception', () => false);

describe('Full Screen Banner at the end', () => {
    beforeEach(() => {
        cy.visit('/test/git/full-screen-text-banner-end/');
    });

    it('Checks Full Screen Banner on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#197594', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#197594').matchImageStable();
    });
});

