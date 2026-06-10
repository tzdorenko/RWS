describe('Social Share Strip', () => {
    beforeEach(() => {
        cy.visit('/test/git/social-share-strip/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('.footer__contact__icons', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('.footer__contact__icons"]').matchImage();
    });
});
