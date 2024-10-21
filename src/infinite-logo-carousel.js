class InfiniteLogoCarousel {
    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({
            direction: 'left-to-right',
            speed: 35
        }, options);

        this.init();
    }

    init() {
        this.element.setAttribute('data-direction', this.options.direction);
        const logoItems = this.element.querySelectorAll('.logo_items');
        logoItems.forEach(item => {
            item.style.animationDuration = `${this.options.speed}s`;
        });
    }
}

// Automatically initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.logos');
    carousels.forEach(carousel => {
        const direction = carousel.getAttribute('data-direction') || 'left-to-right';
        new InfiniteLogoCarousel(carousel, { direction });
    });
});

