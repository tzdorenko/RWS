describe('Brightcove Content Block Image Center', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/brightcove-content-block-player/');
    });

    it('Checks the component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="229458"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="229458"]').screenshot(
            'row content_block_with_image__row content_block_with_image__row--center align--center justify--center',
        );
    });
});
