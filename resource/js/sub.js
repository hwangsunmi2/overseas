

$(function(){
    //sub footer
    //$(".subContent-wrap").parents().find(".wrap").children("footer").addClass("sub-footer");


    $(".board-table__inner").on('mouseover focusin touchstart',  function(){
        $(this).addClass("removeBefore");
    });

    //부서안내 클릭
    $(".team_list .organ-group ul li").click(function(){
        $(".team_list .organ-group ul li").removeClass('on');
        $(".tab_cont").removeClass('on');
        $(this).addClass('on');
        $("#"+$(this).data('id')).addClass('on');
    });

    

    //tab
    var $history = $('.history-tab__title');
    var $historyTab = $history.find('h3');
    var $historyCont = $('.history-tab__content>.tab_cont');

    $historyTab.on('click focusin', function(e) {  
        e.preventDefault();
        var tabID = this.id.split("_")[1];
        console.log('tabID',tabID);
        var $nListID = $('#list_' + tabID);
        if ($nListID.css("display") == "none") {
            $historyTab.removeClass('on');
            $historyCont.css('display','none');
        }
        $(this).addClass("on");
        $nListID.css('display','block');
    });

    //재단이 걸어온 길 tab
    $('.history-tab__present .year-tab__ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.history-tab__present .year-tab__ul li').removeClass('on');
        $('.history-swiper__present .tab_cont').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    });

    //부서안내 tab
    $('.org-wrap area').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.org-wrap area').removeClass('on');
        $('.org-wrap .tab_cont').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    });

    //국외문화재현황 tab
    $('.statistics-tab .statistics-tab__link').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.statistics-tab .statistics-tab__link').removeClass('on');
        $('.statistics-tab .tab_cont').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    });


    

    //subTabMobile
    var depSeleted = $(".depth-selected");
    

    // $(".depth-selected").click(function(){
    //     console.log("a");
    // })

    $(depSeleted).on('click', function(){
        //console.log("a");
        $(this).next().slideToggle();
    });

    //FAQ
    $(".qna-link").click(function(){
        var qnaSib= $(this).parent().parent().siblings().removeClass("is-active");

        var qnaClick= $(this).parent().parent().toggleClass("is-active");
        var qnaActive= qnaClick.children(".qna-body");

        
        
        qnaActive.slideToggle();
        qnaSib.children(".qna-body").slideUp();

        // if($("qna-item").hasClass("is-active")){
        //     $(".qna-body").slideDown();
        // }
        
    })

    

});




