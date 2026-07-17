describe('Content Slider Background Color', () => {
    const component = 'section[id="246593"]';

    beforeEach(() => {
        cy.visit('/test/git/content-slider/');
    });

    it('Should match visual regression snapshot', () => {
        cy.get(component, { timeout: 10000 }).should('exist').and('be.visible').scrollIntoView();

        cy.get(component).matchImage();
    });
});
