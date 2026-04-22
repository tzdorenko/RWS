Cypress.on('uncaught:exception', () => false);

describe('Feature Image Left With Background', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/secon-nav-indented-futere-img-left-backgrd/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('header, footer').invoke('css', 'display', 'none');

        cy.get('section#179861', { timeout: 5000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#179861').screenshot('section-179861');
    });
});
