const { defineConfig } = require('cypress');
const { initPlugin } = require('@frsource/cypress-plugin-visual-regression-diff/dist/plugins');

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/cts/*.cy.js',
        setupNodeEvents(on, config) {
            initPlugin(on, config);
            return config;
        },
    },
});
