$(document).ready(function() {
    //header js//
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixedMenu");
        } else {
            $(".header").removeClass("fixedMenu");
        }
    });
    // header js //

    // banner slider //
    ! function(e) {
        "use strict";
        $('.banner_slide').slick({
            autoplay: true,
            arrows: true,
            autoplaySpeed: 3000,
            speed: 3000,
            easing: 'linear'
        });
    }(jQuery)
    // banner slider //
});