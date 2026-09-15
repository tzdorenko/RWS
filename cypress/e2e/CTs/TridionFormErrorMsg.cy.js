describe('Tridion Form CT – contact form', () => {
    beforeEach(() => {
        cy.intercept('POST', '**/handleform**').as('hsSubmit');
        cy.visit('/test/git/tridion-page/');
        cy.get('form[action*="handleform"]', { timeout: 15000 }).should('be.visible');
    });

    it('shows validation errors on empty required fields', () => {
        cy.get('input[name="firstName"]').clear();
        cy.get('input[name="email"]').clear();

        cy.get('form[action*="handleform"]').within(() => {
            cy.get('button[type="submit"]').click();
        });

        cy.get('input[name="firstName"]')
            .closest('.hs-form-field')
            .find('.hs-error-msgs__item[data-validation="mandatory"]')
            .should('be.visible');

        cy.get('input[name="email"]')
            .closest('.hs-form-field')
            .find('.hs-error-msgs__item[data-validation="mandatory"]')
            .should('be.visible');
    });
});