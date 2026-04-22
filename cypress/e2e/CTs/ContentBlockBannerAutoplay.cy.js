Cypress.on('uncaught:exception', () => false);

describe('Content Block Banner AutoPlay', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-banner-autoplay/');
    });

    it('Checks section 233164 and takes screenshot', () => {
        cy.get('section#233164', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(200);

        cy.get('section#233164').screenshot('section-233164');
    });
});
