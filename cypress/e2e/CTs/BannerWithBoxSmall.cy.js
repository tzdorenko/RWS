describe('Banner With Box Small', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/redesign-2025/banner-with-box-small/');
    });

    it('Checks CT on the page and takes a screenshot', () => {
        cy.get('section[id="275224"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="275225"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="275226"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="275224"]').matchImage();
        cy.get('section[id="275225"]').matchImage();
        cy.get('section[id="275226"]').matchImage();
    });
});

