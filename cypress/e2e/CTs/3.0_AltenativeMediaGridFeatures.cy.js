describe('Alternative Media Grid Features', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/alternative-media/grid-fetures/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#293685').should('exist').and('be.visible');

        cy.get('section#293685').matchImage();
    });
});
``;
