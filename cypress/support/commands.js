// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Close the OneTrust Cookie Notice
Cypress.Commands.add('acceptCookies', () => {
    cy.get('body', { timeout: 7000 }).then(($body) => {
        const oneTrustBtn = $body.find('#onetrust-accept-btn-handler');
        if (oneTrustBtn.length > 0) {
            cy.wrap(oneTrustBtn).should('be.visible').click({ force: true });
            return;
        }

        const rwsCookieClose = $body.find(
            '.cookie-banner__close, .cookie-close-btn, .cookies-close',
        );
        if (rwsCookieClose.length > 0) {
            cy.wrap(rwsCookieClose).should('be.visible').click({ force: true });
            return;
        }

        cy.log('Cookie banner not found — skipping');
    });
});
// Стабільний візуальний скріншот: чекає шрифти, картинки та sticky-nav перед matchImage
Cypress.Commands.add('matchImageStable', { prevSubject: 'element' }, (subject, options) => {
    // 1. Шрифти завантажені
    cy.document().its('fonts.status').should('equal', 'loaded');

    // 2. Картинки всередині елемента завантажені (якщо вони є)
    cy.wrap(subject).then(($el) => {
        const $imgs = $el.find('img');
        if ($imgs.length > 0) {
            cy.wrap($el)
                .find('img')
                .should(($found) => {
                    $found.each((_, img) => {
                        if (img.offsetParent === null) return; // display:none — неактивний таб/слайд, скіп
                        const rect = img.getBoundingClientRect();
                        const win = img.ownerDocument.defaultView;
                        const inViewport =
                            rect.width > 0 &&
                            rect.height > 0 &&
                            rect.bottom > 0 &&
                            rect.right > 0 &&
                            rect.top < win.innerHeight &&
                            rect.left < win.innerWidth;
                        if (!inViewport) return; // поза в'юпортом — lazy-load не спрацює
                        expect(img.naturalWidth, `img ${img.src}`).to.be.greaterThan(0);
                    });
                });
        }
    });

    // 3. Компенсуємо sticky-навігацію, щоб вона не потрапляла в кадр скріншоту
    cy.get('body').then(($body) => {
        const $nav = $body.find('.mega_navigation__outer');
        const navHeight = $nav.length ? $nav[0].getBoundingClientRect().height : 0;
        cy.wrap(subject).then(($el) => {
            const top = $el.offset().top - navHeight - 20;
            cy.window().scrollTo(0, Math.max(top, 0), { ensureScrollable: false });
        });
    });

    cy.wrap(subject).should('be.visible');

    // 4. Скріншот
    cy.wrap(subject).matchImage({ maxDiffThreshold: 0.15, ...options });
});