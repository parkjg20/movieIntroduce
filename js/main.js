$(function () {

    var ratio = 32.91;
    var center = 2;
    $('.buttons .button').click(function () {
        $(".button").removeClass("active");
        $(".slide-item").removeClass("active");

        $(this).addClass("active");
        var currentTab = getCurrentTab();
        $(".slide-item:nth-child("+ currentTab +")").addClass("active");
    
        $('.slide').css("transform", "translateX("+ -ratio * (currentTab - center) +"%)")
        $(".slide-item.active").click(function () {
            var _name = $(this).find("input[name=movieName]").val();
            location.href = _name + ".html";
        })
    })

    $(".slide-item.active").click(function () {
        var _name = $(this).find("input[name=movieName]").val();
        location.href = _name + ".html";
    })

    // 데스크탑에 사용될 JS
    var dql = window.matchMedia("screen and (min-width: 1049px");
    if (dql.matches) {
        $("#lctn").attr("src","img/curtain-left.png");
        $("#rctn").attr("src","img/curtain-right.png");
    }
    dql.addListener(function(e) {
        if(e.matches) {
            $("#lctn").attr("src","img/curtain-left.png");
            $("#rctn").attr("src","img/curtain-right.png");
        }
    })

    // 노트북에 사용될 JS
    var lql = window.matchMedia("screen and (max-width: 1048px");
    if (lql.matches) {
        $("#lctn").attr("src","img/l-curtain-left.png");
        $("#rctn").attr("src","img/l-curtain-right.png");
    }
    lql.addListener(function(e) {
        if(e.matches) {
            $("#lctn").attr("src","img/l-curtain-left.png");
            $("#rctn").attr("src","img/l-curtain-right.png");
        }
    })
    
    // 모바일에 사용될 JS
    var mql = window.matchMedia("screen and (max-width: 768px");
    if (mql.matches) {
        $("#lctn").attr("src","img/l-curtain-left.png");
        $("#rctn").attr("src","img/l-curtain-right.png");
    }
    mql.addListener(function(e) {
        if(e.matches) {
            $("#lctn").attr("src","img/l-curtain-left.png");
            $("#rctn").attr("src","img/l-curtain-right.png");
        }
    })
})

function getCurrentTab() {
    var buttons = $('.buttons div')
    for(var i =0; i < buttons.length; i++){
        if($(buttons[i]).hasClass("active")){
            var currentTab = $(buttons[i]).attr("id").substr(1);
            return currentTab;            
        }
    }
    
}