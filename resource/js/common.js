$(document).ready(function () {
    nav();
    footerSwiper();

});


function nav() {
    $('.nav .navWrap ul li').mouseover(function () {
        $(this).addClass("active");
        $('.navWrap').addClass("active");
        $(this).children().addClass('active');
        // $('header .list').css('display', 'block');
        // $('.nav .navWrap ul li .depth2').css('display', 'block');
    });
    $('.nav .navWrap ul li').mouseleave(function () {
        $(this).removeClass("active");
        $('.navWrap').removeClass("active");
        $(this).children().removeClass('active');
        // $('header .list').css('display', 'none');
        // $('.nav .navWrap ul li .depth2').css('display', 'none');
    });
}

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
    $('.footerbtn .swiper-button-pause').click(function () {
        if ($(this).hasClass('off')) {
          $(this).removeClass('off');
          footerswiper.autoplay.start();
        } else {
          $(this).addClass('off');
          footerswiper.autoplay.stop();
        }
    });
    
}