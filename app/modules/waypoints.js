define([ 'jquery', 'waypoints'], function($) {

    return {
        init:function(){

            /*===================================================================================*/
            /*	ANIMATIONS ON SCROLL
             /*===================================================================================*/

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

        }
    };
});
