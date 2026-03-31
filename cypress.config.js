const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/CTs/**/*.cy.js',

        // baseUrl не потрібний, якщо у тестах немає cy.visit()
        // baseUrl: 'http://localhost:3000',
    },
});
