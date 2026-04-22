Cypress.on('uncaught:exception', () => {
    return false;
});

describe('Banner Block Banner Image Right All Fields External Link', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/content-block-expand-img/');
    });

    it('Checks the banner component and takes a screenshot', () => {
        // Перевіряємо, що компонент існує і видимий
        cy.get('section[id="246797"]', { timeout: 5000 }).should('exist').and('be.visible');

        // Робимо скріншот компонента
        cy.get('section[id="246797"]').screenshot('cp cp--original cp--default  ');
    });
});
