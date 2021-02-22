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
        prevArrow: "<button type='button' class='slick-prev'><img src='./img/left_arrow.png'></button>",
        nextArrow : "<button type='button' class='slick-next'><img src='./img/right_arrow.png'></button>",

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