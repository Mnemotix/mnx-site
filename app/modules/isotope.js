define([ 'jquery', 'isotope'], function($) {

    /*===================================================================================*/
    /*	ISOTOPE PORTFOLIO
     /*===================================================================================*/

    var $container = $('.items');

    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item'
        });
    });

    var resizeTimer;

    function resizeFunction() {
        $container.isotope('reLayout');
    }

    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeFunction, 100);
    });

    $('.portfolio .filter li a').click(function () {

        $('.portfolio .filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');

        $container.isotope({
            filter: selector
        });

        return false;

    });


    /*===================================================================================*/
    /*	ISOTOPE PORTFOLIO FULLSCREEN
     /*===================================================================================*/

    var isotopeBreakpoints = [

        {
            // Desktop
            min_width: 1680,
            columns: 6
        },

        {
            // iPad Landscape
            min_width: 1140,
            max_width: 1680,
            columns: 5
        },

        {
            // iPad Portrait
            min_width: 1024,
            max_width: 1440,
            columns: 4
        },

        {
            // iPhone Landscape
            min_width: 768,
            max_width: 1024,
            columns: 3
        },

        {
            // iPhone Portrait
            max_width: 768,
            columns: 1
        }

    ];

    var $container = $('.items.fullscreen');

    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item'
        });
    });

    // hook to resize the portfolio items for fluidity / responsiveness
    $(window).smartresize(function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        for (var i = 0; i < isotopeBreakpoints.length; i++) {
            if (windowWidth >= isotopeBreakpoints[i].min_width || !isotopeBreakpoints[i].min_width) {
                if (windowWidth < isotopeBreakpoints[i].max_width || !isotopeBreakpoints[i].max_width) {
                    $container.find('.item').each(function () {
                        $(this).width(Math.floor($container.width() / isotopeBreakpoints[i].columns));
                    });

                    break;
                }
            }
        }
    });

    $(window).trigger('smartresize');


    /*===================================================================================*/
    /*	ISOTOPE BLOG
     /*===================================================================================*/

    var $container = $('.posts');

    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.post'
        });
    });

    $('.format-filter li a, .format-wrapper a').click(function () {

        var selector = $(this).attr('data-filter');

        $container.isotope({
            filter: selector
        });

        $('.format-filter li a').removeClass('active');
        $('.format-filter li a[data-filter="' + selector + '"]').addClass('active');

        $('html, body').animate({
            scrollTop: $('.format-filter').offset().top - 130
        }, 600);

        return false;

    });

    $(window).on('resize', function () {
        $('.posts').isotope('reLayout')
    });

    /*===================================================================================*/
    /*	ACCORDION (FOR ISOTOPE HEIGHT CALCULATION)
     /*===================================================================================*/

    if ($('.panel-group .portfolio').length > 0) {
        $('.panel-group .collapse.in').collapse({
            toggle: true
        });
    }

});