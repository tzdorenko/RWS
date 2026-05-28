describe('Alternative Media Vertical Promo', () => {
    Cypress.on('uncaught:exception', () => false);

    beforeEach(() => {
        cy.visit('/test/3version/alternative-media/vertical-promo-items/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#293651').should('exist').and('be.visible');

        cy.get('section#293651').matchImage();
    });
});
``;
