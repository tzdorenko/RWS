const { defineConfig } = require('cypress');
const { initPlugin } = require('@frsource/cypress-plugin-visual-regression-diff/dist/plugins');

const ENV = process.env.ENV || 'staging';

const baseUrls = {
    staging: 'https://stg-rws-com.tridion.sdlproducts.com',
    live: 'https://www.rws.com',
};

module.exports = defineConfig({
    e2e: {
        baseUrl: baseUrls[ENV],
        specPattern: 'cypress/e2e/cts/*.cy.js',
        env: {
            pluginVisualRegressionImagesPath: `{spec_path}/__image_snapshots__/${ENV}`,
        },
        setupNodeEvents(on, config) {
            initPlugin(on, config);
            return config;
        },
    },
});
