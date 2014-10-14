define([ 'jquery', 'skrollr', 'skrollrss', 'waypoints', 'wpointstick'], function($, skrollr) {

    return {
        init:function(){

            /*===================================================================================*/
            /*	ANIMATIONS ON SCROLL
             /*===================================================================================*/

//            var waypointClass = '[class*="animate"]';
//            $(waypointClass).css({opacity: '0'});
//
//            $(waypointClass).waypoint(function() {
//                    var animationClass = $(this).attr('class').split('animate-')[1];
//                    var delayTime = $(this).data('delay');
//                    $(this).delay(delayTime).queue(function(next){
//                        $(this).toggleClass('animated');
//                        $(this).toggleClass(animationClass);
//                        next();
//                    });
//                },
//                {
//                offset: '90%',
//                triggerOnce: true
//                }
//            );

            var waypointClass = 'main [class*="col-"]';
            var animationClass = 'fadeInUp';
            var delayTime;
            $(waypointClass).css({opacity: '0'});

            $(waypointClass).waypoint(function() {
                    delayTime += 100;
                    $(this).delay(delayTime).queue(function(next){
                        $(this).toggleClass('animated');
                        $(this).toggleClass(animationClass);
                        delayTime = 0;
                        next();
                    });
                },
                {
                    offset: '90%',
                    triggerOnce: true
                }
            );

            /*===================================================================================*/
            /*	STICKY NAVIGATION
             /*===================================================================================*/
            $('.navbar .navbar-collapse').waypoint('sticky');


            /*===================================================================================*/
            /*	HEADER SHRINK
             /*===================================================================================*/
            var s = skrollr;
            var sActive = false;

            if ($(window).width() > 1024) {
                s.init();
                sActive = true;
            }

            $(window).on('resize', function() {
                if ($(window).width() < 1024 && sActive) {
                    s.init().destroy();
                    sActive = false;
                }
                else if ($(window).width() > 1024) {
                    s.init();
                    sActive = true;
                }
            });
        }
    };
});
