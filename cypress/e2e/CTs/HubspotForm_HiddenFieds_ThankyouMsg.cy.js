describe('HubSpot form – advertising_conversion_level', () => {
    beforeEach(() => {
        cy.intercept('POST', '**/submissions/**').as('hsSubmit');

        cy.visit('https://www.rws.com/test/forms/hubspot-form-two/');
    });

    it('submits HubSpot form and shows thank-you message', () => {
        // STEP 1: dropdown
        cy.get('select[name="parent_interest_profile"]', { timeout: 5000 })
            .should('be.visible')
            .select('Services - Intelectual Property & Patent');

        cy.get('select[name="interest_profile_child_2"]', { timeout: 10000 })
            .should('be.visible')
            .select('IP research');

        // STEP 2: random email
        const randomEmail = `qa_${Date.now()}@sdl.com`;
        cy.get('input[name="email"]', { timeout: 5000 })
            .first()
            .should('be.visible')
            .type(randomEmail);

        // STEP 3–8
        cy.get('input[name="firstname"]').first().type('Tetiana');
        cy.get('input[name="lastname"]').first().type('Cypresstest');
        cy.get('input[name="company"]').first().type('TestCompany');
        cy.get('input[name="jobtitle"]').first().type('QA Engineer');
        cy.get('input[name="phone"]').first().type('+3803333333333');
        cy.get('select[name="country"]').select('Ukraine');

        // ✅ SUBMIT
        cy.get('form.hs-form', { timeout: 10000 })
            .first()
            .should('be.visible')
            .within(() => {
                cy.get('input[type="submit"]').should('be.visible').click();
            });

        // ✅ ASSERT: HubSpot request
        cy.wait('@hsSubmit', { timeout: 15000 }).its('response.statusCode').should('eq', 200);

        // ✅ STEP 1: HubSpot success event in dataLayer
        cy.window().then((win) => {
            const hsEvent = win.dataLayer?.find(
                (e) =>
                    e.event === 'hubspot-form-success' &&
                    e['hs-form-guid'] === '6d75e17a-41a9-47de-91a1-4f51f73cfadc',
            );

            expect(hsEvent, 'HubSpot success event in dataLayer').to.exist;
        });
    });
});
