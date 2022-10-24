$(function(){
    $(".board-table__inner").mouseover(function(){
        $(this).addClass("removeBefore")
    });

    //부서안내 클릭
    $(".org-item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    

});

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});
