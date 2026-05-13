describe('HubSpot form – advertising_conversion_level', () => {
    beforeEach(() => {
        cy.intercept('POST', '**/submissions/**').as('hsSubmit');
        cy.visit('https://www.rws.com/test/forms/hubspot-form-two/');
    });

    it('submits HubSpot form successfully', () => {
        cy.get('select[name="parent_interest_profile"]')
            .should('be.visible')
            .select('Services - Intelectual Property & Patent');

        cy.get('select[name="interest_profile_child_2"]')
            .should('be.visible')
            .select('IP research');

        const email = `qa_${Date.now()}@sdl.com`;
        cy.get('input[name="email"]').type(email);

        cy.get('input[name="firstname"]').type('Tetiana');
        cy.get('input[name="lastname"]').type('Cypresstest');
        cy.get('input[name="company"]').type('TestCompany');
        cy.get('input[name="jobtitle"]').type('QA Engineer');
        cy.get('input[name="phone"]').type('+3803333333333');
        cy.get('select[name="country"]').select('Ukraine');

        cy.get('form.hs-form').within(() => {
            cy.get('input[type="submit"]').click();
        });

        // ✅ Real, reliable assertion
        cy.wait('@hsSubmit').its('response.statusCode').should('eq', 200);
    });
});
