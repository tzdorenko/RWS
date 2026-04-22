Cypress.on('uncaught:exception', () => {
    return false;
});

describe('Banner Block Banner Image Podcast', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-banner-autoplay-one-case/');
    });

    it('Checks section 233168 and takes screenshot', () => {
        cy.get('section[id="233168"]', { timeout: 20000 }).should('exist').and('be.visible');

        cy.get('section[id="233168"]').scrollIntoView().screenshot('section-233168');
    });
});
