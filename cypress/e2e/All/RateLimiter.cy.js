describe('MCP Rate Limit Test', () => {
    it('should trigger rate limit after multiple requests', () => {
        const requests = [];

        for (let i = 0; i < 70; i++) {
            requests.push(
                cy.request({
                    method: 'GET',
                    url: '/api/agent/search?query=test',
                    failOnStatusCode: false, // важливо
                }),
            );
        }

        cy.wrap(requests).then((responses) => {
            const hasRateLimit = responses.some((res) => res.body.includes('Too many requests'));

            expect(hasRateLimit, 'Rate limit should be triggered').to.be.true;
        });
    });
});
``;
