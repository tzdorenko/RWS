describe('Related Content', () => {
    beforeEach(() => {
        cy.visit('/test/git/related-content/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="180231"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Компенсуємо висоту sticky-навігації, щоб вона не потрапляла в кадр скріншоту
        cy.get('.mega_navigation__outer').invoke('outerHeight').then((navHeight) => {
            cy.get('section[id="180231"]').then(($el) => {
                const top = $el.offset().top - navHeight - 20;
                cy.window().scrollTo(0, Math.max(top, 0));
            });
        });

        cy.get('section[id="180231"]').matchImageStable();
    });
});