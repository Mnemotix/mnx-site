define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/about.html',
    'ocarousel'
], function($, Backbone, Handlebars, tpl) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "About"});
            $(this.el).html(html);

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

            //ajoute un effet à l'affichage de la page
            $('main [class*="col-"]').addClass("animated fadeInUp");
            $(document).scrollTop(0);

            return this;
        }
    });

});