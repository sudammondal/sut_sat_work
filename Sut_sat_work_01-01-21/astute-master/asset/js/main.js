$(document).ready(function () {
  //header js//
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("fixedMenu");
    } else {
      $(".header").removeClass("fixedMenu");
    }
  });
  // header js //

  // banner slider //
    ! function (e) {
      "use strict";
      $('.banner_slide').slick({
        autoplay: true
        , arrows: true
        , autoplaySpeed: 3000,
        speed : 3000,
        easing: 'linear'
      });
    }(jQuery)
  // banner slider //


  // counting ja //
  jQuery(document).ready(function ($) {
    $('.counting').counterUp({
      delay: 10,
      time: 1000
    });
  });



  // up icon js //
  $('.up_icon a[href^="#"').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 2000);
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $(".up_icon").addClass("up_iconFixd");
    } else {
      $(".up_icon").removeClass("up_iconFixd");
    }
  });

  // slider js// 
  $('.main_slieda_ttstmonials').slick({
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 3,
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
  
  $('.sssyour-class').slick({
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  //===============instgam==========//
  $('.slider_main, .brabd_slied').slick({
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerPadding: '0px',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: false,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  //=============== latest news ==========//
  $('.latest_news_slied').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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


  //=====================countundoen =================//
  var countDownDate = new Date("Jan 1, 2021 15:37:25").getTime();
  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDown").innerHTML = "EXPIRED";
    }
  }, 1000);

  // ========== filtering========== //
  function isoTopActive() {
    // Iso top js
    $('.filtering_item_row').imagesLoaded(function () {
      $(".filtering_item_row").isotope({
        itemSelector: '.filter_items',
        layoutMode: 'fitRows'
      });

      var isOacTive = $('.isotopmein button').click(function () {
        $(".isotopmein button").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $(".filtering_item_row").isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          }
        });
        return false;
      });
    });
  }
  isoTopActive();   
   // ========== filtering========== //

  /*---------LIGHT-BOX js-----------*/
  function lightBoxImages() {
    var selectorG = '.icon_link';
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
    if ($('.popup-youtube').length) {
      $('.popup-youtube').magnificPopup({
        type: 'iframe',
        // gallery:{
        //   enabled:true
        // }
      });
    }
  }
  videoPopup();
  //======= pop up===== //

  //===== up icon js===== //
  $('.up_icon a[href^="#"').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 2000);
    }
  });
  //===== up icon js===== //

  //==== viedo player js =====//
  function myFunction() {
    var x = document.getElementById("myVideo").autoplay;
    document.getElementById("demo").innerHTML = x;
  }
  //==== viedo player js =====//

  //===== animation =====//
  new WOW().init();
  //===== animation =====//

});