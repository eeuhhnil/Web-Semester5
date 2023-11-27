$(document).ready(function(){
    $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    vertical: true, 
    focusOnSelect: true,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-down-outline"></ion-icon></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-up-outline"></ion-icon></button>`,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false
    }
    },
    {
    breakpoint: 600,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
    }
    }
]
    });
});