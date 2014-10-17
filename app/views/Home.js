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

            carousel.owlElementID = "#owl-main";
            carousel.init();

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

//            $(".slider-next").click(function () {
//                carousel.next();
//            });
//
//            $(".slider-prev").click(function () {
//                carousel.previous();
//            });

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