$(document).ready(function () {
    footerSwiper();

});
function footerSwiper() {
    var footerswiper = new Swiper(".banner_zone .mySwiper", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: ".footerbtn .swiper-button-next",
            prevEl: ".footerbtn .swiper-button-prev",
        },
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        },
    }); 
}