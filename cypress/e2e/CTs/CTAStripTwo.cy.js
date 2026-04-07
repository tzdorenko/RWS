describe('CTA Strip page', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/strip/');
    });

    it('has a cta_strip container section', () => {
        cy.get('.cta_strip .container').should('exist').and('be.visible');
    });

    it('has H1 with correct text', () => {
        cy.get('h1').should('be.visible').and('have.text', 'CTA strip - Login to workzone');
    });

    it('has a CTA link with correct text and href', () => {
        cy.contains('a', 'Login to SDL Workzone')
            .should('be.visible')
            .and('have.attr', 'href', 'https://sdl.appiancloud.com/suite/');
    });
});
