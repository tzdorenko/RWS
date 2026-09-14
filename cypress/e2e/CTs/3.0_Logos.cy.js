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
                        const rect = img.getBoundingClientRect();
                        const win = img.ownerDocument.defaultView;
                        const inViewport =
                            rect.width > 0 &&
                            rect.height > 0 &&
                            rect.bottom > 0 &&
                            rect.right > 0 &&
                            rect.top < win.innerHeight &&
                            rect.left < win.innerWidth;
                        if (!inViewport) return;
                        expect(img.naturalWidth, `img ${img.src}`).to.be.greaterThan(0);
                    });
                });
        }
    });

    // 3. Layout стабілізувався — чекаємо, поки browser доробить reflow після шрифтів/картинок
    cy.wrap(subject).then(($el) => {
        const el = $el[0];
        return new Cypress.Promise((resolve) => {
            const check = () => {
                const rect1 = el.getBoundingClientRect();
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        const rect2 = el.getBoundingClientRect();
                        if (rect1.top === rect2.top && rect1.height === rect2.height) {
                            resolve();
                        } else {
                            check();
                        }
                    });
                });
            };
            check();
        });
    });

    // 4. Скріншот
    cy.wrap(subject).matchImage({ maxDiffThreshold: 0.15, ...options });
});
