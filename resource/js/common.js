$(document).ready(function () {
    nav();
    toggleSite();
    footerSwiper();
});


function nav() {
    $('.nav .navWrap ul li').mouseover(function () {
        $(this).addClass("active");
        $('.navWrap').addClass("active");
        $('.nav .navWrap ul li .depth2').addClass('active');
    });
    $('.nav .navWrap ul li').mouseleave(function () {
        $(this).removeClass("active");
        $('.navWrap').removeClass("active");
        $('.nav .navWrap ul li .depth2').removeClass('active');
    });
}

function toggleSite() {
    var cont_w = $('.inner').width();
	
	$('header .gotoSite .d-flex .site').click(function(){
		if(cont_w > 1200){
		}else{
            $('header .gotoSite .d-flex ul' ).slideToggle('slow');
            $('header .gotoSite').toggleClass('on');
		}
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