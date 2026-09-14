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

            // Font/text rendering stability for visual regression
            // (prefers-reduced-motion is now forced via CDP in support/e2e.js instead,
            // since --force-prefers-reduced-motion doesn't reliably affect matchMedia())
            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.family === 'chromium') {
                    launchOptions.args.push('--font-render-hinting=none');
                    launchOptions.args.push('--disable-lcd-text');
                    launchOptions.args.push('--disable-font-subpixel-positioning');
                }
                return launchOptions;
            });

            // Pinned Chrome for Testing — не оновлюється автоматично, на відміну від
            // системного Chrome (stable). Baseline прив'язаний саме до цієї версії.
            config.browsers = config.browsers.concat({
                name: 'chrome-pinned',
                family: 'chromium',
                channel: 'stable',
                displayName: 'Chrome (pinned 152.0.7977.76)',
                version: '152.0.7977.76',
                path: 'C:\\chrome-for-testing\\chrome\\win64-152.0.7977.76\\chrome-win64\\chrome.exe',
                majorVersion: 152,
            });

            return config;
        },
    },
});