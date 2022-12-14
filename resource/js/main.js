$(document).ready(function () {
    mainSwiper();
    mainTab();
    vrSwiper();

});
function mainSwiper() {
    var mainswiper = new Swiper(".section1 .firstSwiper > .mySwiper", {
        effect: "fade",
        slidesToShow: 1,
        pagination: {
          el: ".dot .swiper-pagination",
        },
        observer: true,	// 추가
        observeParents: true,	// 추가 
    }); 
}


function mainTab() {
    var $notice = $('.tab_wrap');
    var $noticeTab = $notice.find('h3');
    var $noticeCont = $notice.find('.tab_cont');

    $noticeTab.on('click focusin', function(e) {  
        e.preventDefault();
        var tabID = this.id.split("_")[1];
        console.log('tabID',tabID);
        var $nListID = $('#list_' + tabID);
        if ($nListID.css("display") == "none") {
            $noticeTab.removeClass('on');
            $noticeCont.css('display','none');
        }
        $(this).addClass("on");
        $nListID.css('display','block');
    });
}

function vrSwiper() {
    var vrswiper = new Swiper(".vr .swiper", {
      loop: true,
      autoplay: {
          delay: 1000,
      },
      pagination: {
          el: ".vrBtn .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".se4Wrap .vrBtn .swiper-button-next",
          prevEl: ".se4Wrap .vrBtn .swiper-button-prev",
        },
    });

    $('.vrBtn .swiper-button-pause').click(function () {
      if ($(this).hasClass('off')) {
        $(this).removeClass('off');
        vrswiper.autoplay.start();
      } else {
        $(this).addClass('off');
        vrswiper.autoplay.stop();
      }
   });
    
}