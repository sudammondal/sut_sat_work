$(document).ready(function() {
    //header js//
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".nav_header").addClass("fixedMenu");
        } else {
            $(".nav_header").removeClass("fixedMenu");
        }
    });
    // header js //

    // banner slider //
    // ! function(e) {
    //     "use strict";
    //     $('.slied_worp').slick({
    //         autoplay: true,
    //         arrows: true,
    //         autoplaySpeed: 3000,
    //         speed: 3000,
    //         easing: 'linear'
    //     });
    // }(jQuery)

    // slider js// 
    $('.slied_worp,.active').slick({
        autoplay: 0,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: '0',
        centerMode: false,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1500,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });
    $('.up_icon a[href^="#"').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 70) {
            $(".up_icon").addClass("up_iconFixd");
        } else {
            $(".up_icon").removeClass("up_iconFixd");
        }
    });


    // slider //
    new WOW().init();
});