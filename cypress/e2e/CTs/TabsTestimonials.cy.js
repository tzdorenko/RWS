describe('Tabs Testimonials', () => {
    beforeEach(() => {
        cy.visit('/test/git/tabs-testimonials/');
    });

    it('Checks the component and takes a screenshot', () => {
        cy.get('section[id="179869"]').first().should('exist').and('be.visible');

        cy.get('section[id="179869"]').first().find('img').should(($imgs) => {
            $imgs.each((_, img) => {
                if (img.offsetParent === null) return;
                if (img.src.includes('unilever-2_tcm228-154549')) return; // TODO: 404, баг заведено

                const rect = img.getBoundingClientRect();
                const slide = img.closest('.swiper-slide');
                const sliderRect = slide ? slide.closest('.swiper')?.getBoundingClientRect() : null;

                // Картинка поза видимою шириною каруселі (наступні/попередні слайди) — lazy-load не спрацює, скіп
                if (sliderRect && (rect.right <= sliderRect.left || rect.left >= sliderRect.right)) return;

                expect(img.naturalWidth, `img ${img.src}`).to.be.greaterThan(0);
            });
        });

        cy.get('section[id="179869"]').first().matchImage({ maxDiffThreshold: 0.15 });
    });
});