describe('Banner With Box Small', () => {
    beforeEach(() => {
        cy.visit('/test/git/redesign-2025/banner-with-box-small/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('section[id="275224"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="275225"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="275226"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="275224"]').matchImageStable();
        cy.get('section[id="275225"]').matchImageStable();
        cy.get('section[id="275226"]').matchImageStable();
    });
});

