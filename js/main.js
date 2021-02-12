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

$(function () {

    $('.carousel-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        vertical: false,
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
        nextArrow : "<button type='button' class='slick-next'>Next</button>",

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            }
        ]
    });
})