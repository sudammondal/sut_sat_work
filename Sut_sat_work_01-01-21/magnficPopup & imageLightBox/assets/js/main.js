$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixedMenu");
        } else {
            $(".header").removeClass("fixedMenu");
        }
    });
    // up icon js //
    $('.up_icon a[href^="#"],.nav_main li a[href^="#"] ').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 40
            }, 2000);
        }
    });


    /*---------LIGHT-BOX js-----------*/
    function lightBoxImages() {
        var selectorG = '.img_link, .img_imgtree, .aboutimg';
        if ($(selectorG).length) {
            var instanceG = $(selectorG).imageLightbox({
                quitOnDocClick: false,
                button: true,
                activity: true,
                overlay: true,
                arrows: true,
                preloadNext: true,
            });
        }
    }
    lightBoxImages();
    /*---------LIGHT-BOX js-----------*/
    //======= pop up===== //
    function videoPopup() {
        if ($('.popup-youtube,.aboutvedio,.aboutimgTwo,.kuc_kus').length) {
            $('.popup-youtube,.aboutvedio,.aboutimgTwo,.kuc_kus').magnificPopup({
                type: 'iframe',
            });
        }
    }
    videoPopup();
    // //======= pop up===== //
    //======= pop up===== //
    // function videoPopup() {
    //     if ($('.aboutimg,.aboutimgTwo').length) {
    //         $('.aboutimg,.aboutimgTwo').magnificPopup({
    //             type: 'iframe',
    //             gallery: {
    //                 enabled: true
    //             }
    //         });
    //     }
    // }
    // videoPopup();
    // //======= pop up===== //
    window.onscroll = function() { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }


});