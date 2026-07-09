describe('List Filter Blog', () => {
    beforeEach(() => {
        cy.visit('https://stg-rws-com.tridion.sdlproducts.com/test/git/filter-blog/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('.col__12.list__results.list__results__blog', { timeout: 5000 })
            .should('exist')
            .and('be.visible');

        cy.get('.col__12.list__results.list__results__blog').matchImageStable();
    });
});

