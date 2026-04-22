// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
// import { matchImageSnapshotCommand } from '@cypress/snapshot';
// matchImageSnapshotCommand();
// cypress/support/e2e.js
// ✅ cookies
beforeEach(() => {
    cy.setCookie('OptanonConsent', 'isIABGlobal=false');
    cy.setCookie('OptanonAlertBoxClosed', 'true');
});

// ✅ MUST BE HERE — GLOBAL + EARLY
Cypress.on('window:before:load', (win) => {
    win.addEventListener('error', (event) => {
        // ignore Brightcove / third-party JS errors
        event.preventDefault();
        return false;
    });

    win.addEventListener('unhandledrejection', (event) => {
        event.preventDefault();
        return false;
    });
});

// ✅ fallback (leave it too)
Cypress.on('uncaught:exception', () => false);
