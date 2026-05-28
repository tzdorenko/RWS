describe('Shop Product Feature Table', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/shop/shop/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#295365').should('exist').and('be.visible');

        cy.get('section#295365').matchImage();
    });
});
``;
