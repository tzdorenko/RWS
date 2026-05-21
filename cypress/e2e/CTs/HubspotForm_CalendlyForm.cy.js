describe('HubSpot form – calendly-multi-step-form', () => {
    beforeEach(() => {
        cy.visit('https://www.rws.com/test/git/calendly-multi-step-form/');
    });

    it('submits HubSpot form with random email successfully', () => {
        const randomEmail = `qa_${Date.now()}@sdl.com`;

        // логуємо всі iframe на сторінці
        cy.get('iframe').then(($iframes) => {
            cy.log(`Found ${$iframes.length} iframes`);
            $iframes.each((i, el) => {
                cy.log(`iframe ${i}: ${el.id} | ${el.src}`);
            });
        });
    });
});

