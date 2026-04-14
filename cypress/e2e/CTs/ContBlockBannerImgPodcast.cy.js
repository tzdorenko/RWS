Cypress.on('uncaught:exception', () => {
    return false;
});

describe('Banner component test - section 233168', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-banner-autoplay-one-case/');
        cy.acceptCookies({ timeout: 10000 });
    });

    it('Checks section 233168 and takes screenshot', () => {
        cy.get('section[id="233168"]', { timeout: 20000 }).should('exist').and('be.visible');

        cy.get('section[id="233168"]').scrollIntoView().screenshot('section-233168');
    });
});
