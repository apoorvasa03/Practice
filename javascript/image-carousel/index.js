let buttons = document.querySelectorAll('[data-carousel-button]')


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let offset = button.dataset.carouselButton === 'next' ? 1: -1;
        let slides = button.closest('[data-carousel]').querySelector('[data-slides]')

        console.log(offset, slides)

        let activeSlide = slides.querySelector('[data-active]')

        let activeIndex = [...slides.children].indexOf(activeSlide) + offset

        if(activeIndex < 0) activeIndex = slides.children.length -1
        else if(activeIndex >= slides.children.length) activeIndex = 0

        slides.children[activeIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})