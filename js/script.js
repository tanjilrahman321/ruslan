$(document).ready(function () {

    // Aos Js
    AOS.init({
        offset: 90,
        duration: 1000,
    });
    
    // Slick Slider jq
    $('.autoplay').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});