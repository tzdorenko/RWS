describe('Content Slider Background Color', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-slider/');
    });

    it('Checks the CT on the page and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="246593"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="246593"]').screenshot('section-246593');
    });
});
