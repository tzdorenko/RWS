describe('HubSpot form – advertising_conversion_level', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false');
        cy.setCookie('OptanonAlertBoxClosed', 'true');

        cy.intercept('POST', '**/hs/submit/**').as('hsSubmit');

        cy.visit('https://www.rws.com/test/forms/hubspot-form-two/');
    });

    it('submits HubSpot form and shows thank-you message', () => {
        // STEP 1: dropdown
        cy.get('select[name="parent_interest_profile"]', { timeout: 10000 })
            .should('be.visible')
            .select('Services - Intelectual Property & Patent');

        // STEP 2: random email @sdl.com
        const randomEmail = `qa_${Date.now()}@sdl.com`;
        cy.get('input[name="email"]', { timeout: 10000 })
            .first()
            .should('be.visible')
            .type(randomEmail);

        // STEP 3: First name
        cy.get('input[name="firstname"]').first().type('Tetiana');

        // STEP 4: Last name
        cy.get('input[name="lastname"]').first().type('Cypresstest');

        // STEP 5: Company
        cy.get('input[name="company"]').first().type('TestCompany');

        // STEP 6: Phone
        cy.get('input[name="phone"]').first().type('+3803333333333');

        // STEP 7: Country
        cy.get('select[name="country"]').select('Ukraine');

        // ✅ SUBMIT — тільки один раз і тільки HubSpot форма
        cy.get('form.hs-form', { timeout: 10000 })
            .first()
            .should('be.visible')
            .within(() => {
                cy.get('input[type="submit"]').should('be.visible').click();
            });

        // ✅ Verify HubSpot accepted submission
        cy.wait('@hsSubmit').its('response.statusCode').should('eq', 200);

        // ✅ Verify thank-you message
        cy.contains('Thank you message for hubspot form.', { timeout: 10000 }).should('be.visible');
    });
});
