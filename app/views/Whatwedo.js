define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/whatwedo.html',
    'app/modules/waypoints',
    'app/modules/carousel'
], function($, Backbone, Handlebars, tpl, waypoints, carousel) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "Whatwedo"});
            $(this.el).html(html);

            carousel.owlElementID = "#owl-main";
            carousel.init();

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


            $("#owl-work-samples").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                navigation: true,
                pagination: true,
                rewindNav: true,
                items: 3,
                itemsDesktopSmall: [1199, 3],
                itemsTablet: [977, 2],
                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
            });

            $("#owl-work-samples-big").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                navigation: true,
                pagination: true,
                rewindNav: true,
                singleItem: true,
                transitionStyle: "fadeUp",
                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
            });


            waypoints.init();

            return this;
        }
    });

});