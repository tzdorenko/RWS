describe('Tridion Form CT – contact form', () => {
    beforeEach(() => {
        cy.intercept('POST', '**/handleform**').as('hsSubmit');
        cy.visit('/test/git/tridion-page/');
    });

    it('submits Tridion HubSpot form successfully', () => {
        cy.get('input[name="firstName"]').should('be.visible').type('Tetiana');
        cy.get('input[name="lastName"]').should('be.visible').type('Cypresstest');

        const email = `qa_${Date.now()}@sdl.com`;
        cy.get('input[name="email"]').should('be.visible').type(email);

        cy.get('input[name="phone"]').type('+3803333333333');
        cy.get('input[name="jobTitle"]').should('be.visible').type('QA Engineer');
        cy.get('input[name="company"]').should('be.visible').type('TestCompany');
        cy.get('select[name="country"]').should('be.visible').select('ukraine');

        cy.get('button[type="submit"]').click();

        cy.wait('@hsSubmit').its('response.statusCode').should('eq', 201);

        cy.contains(
            'Thank you for submitting the form, a member of our team will be in touch.',
        ).should('be.visible');
    });
});
