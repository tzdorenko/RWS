describe('HubSpot form – advertising_conversion_level', () => {
    const apiKey = Cypress.env('HUBSPOT_API_KEY');
    const FORM_GUID = '6d75e17a-41a9-47de-91a1-4f51f73cfadc';

    beforeEach(() => {
        cy.intercept('POST', '**/submissions/**').as('hsSubmit');
        cy.visit('/test/forms/hubspot-form-two/');
    });

    it('submits HubSpot form and verifies submitted data via HubSpot API', () => {
        // STEP 1: dropdowns
        cy.get('select[name="parent_interest_profile"]', { timeout: 5000 })
            .should('be.visible')
            .select('Services - Intelectual Property & Patent');

        cy.get('select[name="interest_profile_child_2"]', { timeout: 10000 })
            .should('be.visible')
            .select('IP research');

        // STEP 2: унікальний email
        const randomEmail = `qa_${Date.now()}@sdl.com`;
        cy.wrap(randomEmail).as('testEmail');

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

        // SUBMIT
        cy.get('form.hs-form', { timeout: 10000 })
            .first()
            .should('be.visible')
            .within(() => {
                cy.get('input[type="submit"]').should('be.visible').click();
            });

        // ASSERT: сабміт пройшов
        cy.wait('@hsSubmit', { timeout: 15000 }).its('response.statusCode').should('eq', 200);

        // ТИМЧАСОВИЙ DEBUG — покаже реальну відповідь CRM Contacts API
        cy.get('@testEmail').then((email) => {
            cy.wait(45000);

            cy.request({
                method: 'POST',
                url: 'https://api.hubapi.com/crm/v3/objects/contacts/search',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: {
                    filterGroups: [
                        { filters: [{ propertyName: 'email', operator: 'EQ', value: email }] },
                    ],
                    properties: [
                        'email',
                        'firstname',
                        'lastname',
                        'company',
                        'jobtitle',
                        'phone',
                        'country',
                    ],
                },
                failOnStatusCode: false,
            }).then((res) => {
                throw new Error(
                    `DEBUG CRM status=${res.status} body=${JSON.stringify(res.body)}`,
                );
            });
        });
    });
});