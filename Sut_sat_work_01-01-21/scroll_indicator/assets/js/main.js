$(document).ready(function() {
    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    try {
        jQuery('#bt-ourskill').appear(function() {
            jQuery('.bt-skillholder').each(function() {
                jQuery(this).find('.bt-skillbar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {}

    function counting_data() {
        var counter = $(".counter");
        if (counter.length) {
            counter.counterUp({
                delay: 10,
                time: 2000
            });
        }
    }
    counting_data();
});