/*===================================================================================*/
/*	HEADER SHRINK
 /*===================================================================================*/
define([ 'jquery', 'skrollr'], function($, skrollr) {

    return {
        init:function(){

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
