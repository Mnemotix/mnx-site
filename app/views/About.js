define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/about.html',
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
            var html = this.template({ title : "About"});
            $(this.el).html(html);

            carousel.owlElementID = "#owl-main";
            carousel.init();

            $("#owl-testimonials").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                navigation: true,
                pagination: true,
                singleItem: true,
                addClassActive: true,
                autoHeight: true,
                transitionStyle: "fadeInAfterOut",
                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
            });

            waypoints.init();

            return this;
        }
    });

});