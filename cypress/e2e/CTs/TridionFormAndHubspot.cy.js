describe('Tridion Diagram and HubSpot Form', () => {
    beforeEach(() => {
        cy.visit('/test/git/tridion-hubspot/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="180537"]', { timeout: 5000 }).should('exist').and('be.visible');
        cy.get('section[id="180853"]', { timeout: 5000 }).should('exist').and('be.visible');

        cy.get('section[id="180537"]').matchImageStable();
        cy.get('section[id="180853"]').matchImageStable();
    });
    ``;
});
