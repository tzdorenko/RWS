describe('Shop Product Card Collection', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/shop/shop/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#295364').should('exist').and('be.visible');

        cy.get('section#295364').matchImageStable();
    });
});
``;
