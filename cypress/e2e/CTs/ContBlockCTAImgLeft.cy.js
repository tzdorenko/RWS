Cypress.on('uncaught:exception', () => false);

describe('Banner Block CTA Image Left', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-cta-img-left-rght/');
    });

    it('Checks section CT on the page and takes screenshot', () => {
        cy.get('section#275496', { timeout: 10000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(200); // даємо layout стабілізуватись

        cy.get('section#275496').screenshot('content-block-275496', {
            capture: 'viewport',
        });
    });
});
