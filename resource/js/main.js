$(document).ready(function () {
    mainSwiper();
    mainTab();
    vrSwiper();

});
function mainSwiper() {
    var mainswiper = new Swiper(".section1.mySwiper", {
        pagination: {
          el: ".section1 .swiper-pagination",
        },
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
    var swiper = new Swiper(".vr .mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".vrBtn .swiper-button-next",
          prevEl: ".vrBtn .swiper-button-prev",
        },
    }); 
}