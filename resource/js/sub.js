$(function(){
    $(".board-table__inner").on('mouseover focusin touchstart',  function(){
        $(this).addClass("removeBefore");
    });

    //부서안내 클릭
    $(".org-item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    //tab
    var $history = $('.tab_wrap');
    var $historyTab = $history.find('h3');
    var $historyCont = $history.find('.tab_cont');

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

    

    //subTabMobile
    var depSeleted = $(".depth-selected");
    

    // $(".depth-selected").click(function(){
    //     console.log("a");
    // })

    $(depSeleted).on('click', function(){
        //console.log("a");
        $(this).next().slideToggle();
    })
    

});


