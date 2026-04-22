Cypress.on('uncaught:exception', () => false);

describe('FAQ Accordion', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/faq/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#180299', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#180299').screenshot('section-180299');
    });
});
