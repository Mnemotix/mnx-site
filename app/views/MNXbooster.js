define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/mnx-booster.html',
], function($, Backbone, Handlebars, tpl) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "MNX Booster"});
            $(this.el).html(html);
            
            //ajoute un effet à l'affichage de la page
            $('main [class*="col-"]').addClass("animated fadeInUp");
            // remonte la page
            $(document).scrollTop(0);
            // active l'item dans la sidebar
            $('.sidebar li').removeClass('active'); // reset all
            $('.booster-side').addClass('active');

            return this;
        }
    });

});