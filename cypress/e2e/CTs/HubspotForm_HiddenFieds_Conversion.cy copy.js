describe('HubSpot form – advertising_conversion_level', () => {
    beforeEach(() => {
        cy.setCookie('OptanonConsent', 'isIABGlobal=false');
        cy.setCookie('OptanonAlertBoxClosed', 'true');

        cy.intercept('POST', '**/forms/v3/submit/**').as('hsSubmit');

        cy.visit('https://www.rws.com/test/forms/hubspot-form-two/');
    });

    it('submits HubSpot form and shows thank-you message', () => {
        // STEP 1: dropdown
        cy.get('select[name="parent_interest_profile"]', { timeout: 5000 })
            .should('be.visible')
            .select('Services - Intelectual Property & Patent');
        // Дочекаємось появи select після Step 1
        cy.get('select[name="interest_profile_child_2"]', { timeout: 10000 })
            .should('be.visible')
            .select('IP research'); // або другий варіант

        // STEP 2: random email @sdl.com
        const randomEmail = `qa_${Date.now()}@sdl.com`;
        cy.get('input[name="email"]', { timeout: 5000 })
            .first()
            .should('be.visible')
            .type(randomEmail);

        // STEP 3: First name
        cy.get('input[name="firstname"]').first().type('Tetiana');
        // STEP 4: Last name
        cy.get('input[name="lastname"]').first().type('Cypresstest');
        // STEP 5: Company
        cy.get('input[name="company"]').first().type('TestCompany');
        // STEP 6: Job title
        cy.get('input[name="jobtitle"]').first().type('QA Engineer');
        // STEP 7: Phone
        cy.get('input[name="phone"]').first().type('+3803333333333');
        // STEP 8: Country
        cy.get('select[name="country"]').select('Ukraine');

        // ✅ SUBMIT — тільки один раз і тільки HubSpot форма
        cy.get('form.hs-form', { timeout: 10000 })
            .first()
            .should('be.visible')
            .within(() => {
                cy.get('input[type="submit"]').should('be.visible').click();
            });

        // ✅ ASSERT: HubSpot реально отримав submit + hidden fields
        cy.wait('@hsSubmit', { timeout: 10000 }).then((interception) => {
            const body = interception.request.body;

            // ✅ submit успішний
            expect(interception.response.statusCode).to.eq(200);

            // ✅ email
            expect(body).to.include(`email=${encodeURIComponent(randomEmail)}`);

            // ✅ conversion level
            expect(body).to.include('advertising_conversion_level=secondary');

            // ✅ Step 1 parent select
            expect(body).to.include(
                'parent_interest_profile=Services%20-%20Intelectual%20Property%20%26%20Patent',
            );

            // ✅ Step 1 dynamic child select
            expect(body).to.include('interest_profile_child_2=IP%20research');

            // ✅ country
            expect(body).to.include('country=Ukraine');

            // ✅ HubSpot mandatory metadata
            expect(body).to.include('hs_context=');
        });

        // ✅ Verify thank-you message
        cy.contains('Thank you message for hubspot form.', { timeout: 10000 }).should('be.visible');
    });
});
