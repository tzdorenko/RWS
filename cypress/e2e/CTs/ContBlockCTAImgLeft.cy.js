describe('Banner component test on page', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-cta-img-left-rght/');
        cy.acceptCookies();
    });

    it('Checks the banner component and takes a screenshot', () => {
        cy.get('section#275496', { timeout: 10000 })
            .scrollIntoView()
            .should('exist')
            .and('be.visible');

        cy.wait(500);

        cy.get('section#275496').screenshot('content-block-275496');
    });
});
``;
