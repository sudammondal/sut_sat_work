(function($){
    "use strict";
    
    var nav_offset_top = $('.navbar').height(); 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.navbar').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".navbar").addClass("navbar_fixed");
                } else {
                    $(".navbar").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    /*---------gallery isotope js-----------*/
    function galleryMasonry(){
        if ( $('.portfolio-gallery').length ){
            $('.portfolio-gallery').imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                $(".portfolio-gallery").isotope({
                    itemSelector: ".portfolio-item",
                    filter: '.multi',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                // Add isotope click function
                $(".portfolio-filter li").on('click',function(){
                    $(".portfolio-filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $(".portfolio-gallery").isotope({
                        filter: selector,
                        animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                    })
                    return false;
                })
            })
        }
    }
    galleryMasonry();
    
    
    function studySlider(){
        var case_study = $(".testimonial_slider");
        if( case_study.length ){
            case_study.owlCarousel({
                loop:false,
                margin: 0,
                items: 3,
                autoplay:false,
                mousedrag: false,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    550:{
                        items:2 
                    }, 
                    992:{
                        items:3   
                    }
                },
            });
        }
    }
    studySlider();
    
    /*============ typed js ==========*/
    document.addEventListener('DOMContentLoaded', function(){
        Typed.new("#typed", {
            stringsElement: document.getElementById('typed-strings'),
            typeSpeed: 80,
            startDelay: 1000,
            backDelay: 1000,
            loop: true,
            contentType: 'html', // or text
        });
    });
    
    
     /*
	  =======================================================================
		  		Nav Scroll Click
	  =======================================================================
	*/ 
//    if ($("#btn").length > 0) {
//        $("#btn").on("click", function (e) {
//            e.preventDefault();
//            $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, 1600, "swing");
//        });
//    }
    
    /*
	  =======================================================================
		  		Nav Scroll Click
	  =======================================================================
	*/ 
    if ($(".nav > li > a,#btn").length > 0) {
        $(".nav > li > a,#btn").on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, 1600, "swing");
        });
    }
    
})(jQuery)