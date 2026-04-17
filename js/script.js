document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
        const targetId = wrapper.getAttribute('data-target');
        const carousel = document.getElementById(targetId);
        if (!carousel) return;

        const itemsCount = carousel.children.length;
        let currentIndex = 0;
        let autoPlayInterval;
        let isAutoplayActive = true;

        const updateScroll = () => {
            const width = carousel.clientWidth;
            carousel.scrollTo({ left: currentIndex * width, behavior: 'smooth' });
        };

        const goNext = () => {
            currentIndex = (currentIndex + 1) % itemsCount;
            updateScroll();
        };

        const goPrev = () => {
            currentIndex = (currentIndex - 1 + itemsCount) % itemsCount;
            updateScroll();
        };

        const startAutoplay = () => {
            if(isAutoplayActive) {
                autoPlayInterval = setInterval(goNext, 3000);
            }
        };

        const stopAutoplay = () => {
            isAutoplayActive = false;
            clearInterval(autoPlayInterval);
        };

        wrapper.addEventListener('click', (e) => {
            stopAutoplay();
            const rect = wrapper.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            
            if (clickX < rect.width / 2) {
                goPrev();
            } else {
                goNext();
            }
        });

        startAutoplay();
    });
});