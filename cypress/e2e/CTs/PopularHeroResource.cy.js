describe('Popular Hero Resources', () => {
    beforeEach(() => {
        cy.visit('/test/git/popular-hero-resources/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="194322"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="194322"] img', { timeout: 10000 }).each(($img) => {
            cy.wrap($img).should(($i) => {
                expect($i[0].naturalWidth).to.be.greaterThan(0);
            });
        });

        cy.get('section[id="194322"]').matchImageStable();
    });
});
