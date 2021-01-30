(function($) {
    /*============ typed js ==========*/
    document.addEventListener('DOMContentLoaded', function() {
        Typed.new("#typed", {
            stringsElement: document.getElementById('typed-strings'),
            typeSpeed: 80,
            startDelay: 1000,
            backDelay: 1000,
            loop: true,
            contentType: 'html', // or text
        });
    });

})(jQuery)