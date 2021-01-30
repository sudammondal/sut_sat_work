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
});