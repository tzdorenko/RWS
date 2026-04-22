Cypress.on('uncaught:exception', () => false);

describe('Content Block Image Expand Image', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-expand-img/');
    });

    it('Checks the CT on the page and takes a screenshot', () => {
        cy.get('section#246797', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(200);

        cy.get('section#246797').screenshot('section-246797');
    });
});
