const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        // Вказуємо шлях тільки до папки CTs
        specPattern: 'cypress/e2e/CTs/**/*.cy.js',

        // Опційно: стартова сторінка для тестів
        baseUrl: 'http://localhost:3000',
    },
});
