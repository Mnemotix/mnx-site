define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/home.html',
    'app/modules/carousel',
    'isotope'
], function($, Backbone, Handlebars, tpl, carousel) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {

            var html = this.template();
            $(this.el).html(html);

            /* ### BUGFIX : Correction du probleme de timers sur le carousel ### */
            // on supprime tous les timeouts et tous les intervals attachés à la window courante

            var intervalId = window.setInterval("", 9999);          // Get a reference to the last interval
            var timeoutId  = window.setTimeout(function() {}, 0);   // Get a reference to the last timeout

            while (intervalId--) window.clearInterval(intervalId);  // will do nothing if no interval with id is present
            while (timeoutId--)  window.clearTimeout(timeoutId);    // will do nothing if no timeout with id is present

            /* ### BUGFIX ### */

            // Initialisation du caroussel principal
            carousel.init("#owl-main");

            // CAROUSSEL WORK
            $("#owl-work").owlCarousel({
                autoPlay: 5000,
                slideSpeed: 200,
                paginationSpeed: 600,
                rewindSpeed: 800,
                stopOnHover: true,
                navigation: true,
                pagination: true,
                rewindNav: true,
                singleItem: true,
                autoHeight: true,
                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
            });

            // CAROUSSEL CLIENTS
            $("#owl-clients").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                rewindNav: true,
                items: 4,
                itemsDesktopSmall: [1199, 4],
                itemsTablet: [977, 3],
                navigation: true,
                pagination: true,
                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
            });

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

            //ajoute un effet à l'affichage de la page
            $('main [class*="col-"]').addClass("animated fadeInUp");
            $(document).scrollTop(0);

            return this;
        }
    });

});