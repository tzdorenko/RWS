describe('CTA Strip - Two Vertical', () => {
    beforeEach(() => {
        cy.visit('/test/git/two-sta-strip-vertical/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="197332"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="197332"]').matchImageStable();
    });
});
