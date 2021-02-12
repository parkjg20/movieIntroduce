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