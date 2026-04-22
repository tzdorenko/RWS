Cypress.on('uncaught:exception', () => false);

describe('Content Slider Carousel ', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-slider-carousel/');
    });

    it('Checks the first Content Slider Carousel component and takes a screenshot', () => {
        cy.get('section#251115', { timeout: 15000 })
            .scrollIntoView({ block: 'center' })
            .should('exist')
            .and('be.visible');

        cy.wait(300);

        cy.get('section#251115').screenshot('section-251115');
    });
});
``;
