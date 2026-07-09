describe('Testimonials', () => {
    beforeEach(() => {
        cy.visit('/test/git/testimonials/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="179869"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="179869"]').matchImageStable();
    });
});
