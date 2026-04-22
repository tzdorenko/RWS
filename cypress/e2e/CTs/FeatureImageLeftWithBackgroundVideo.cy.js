Cypress.on('uncaught:exception', () => false);

describe('Feature Image Left With Background Video', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/feature-img-left-video-backgr/');
    });

    it('Checks CT - Description on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#199565', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#199565').screenshot('section-199565');
    });
});
