$(document).ready(function() {
      $('#f1').flexslider({
            animation: "slide",
            rtl: false,
        animationLoop: true,
        //     start: function(slider){
        //       $('body').removeClass('loading');
        //     }
          });
         $('#f2').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 150,
            itemMargin: 5,
            pausePlay: true,
            mousewheel: true,
            rtl: false,
            asNavFor:'.flexslider',
        controlNav: "thumbnails",
        touch: true,
          });
});

