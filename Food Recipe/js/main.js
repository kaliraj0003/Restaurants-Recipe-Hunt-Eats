(function ($){
    "use strict";

    // wow js
    new WOW().init();

    // counter-up
    $('[data-toggle="counter-up"]').counterUp({
        delay:10,
        time:2000
    });


    // back to top
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $('.back-to-top').fadeIn('slow');
        }
        else{
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop: 0},100,'easeInOutExpo');
        return false;
    });
})(jQuery);