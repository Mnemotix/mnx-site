define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/blog.html',
], function($, Backbone, Handlebars, tpl) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "Blog"});
            $(this.el).html(html);
                    
            //ajoute un effet à l'affichage de la page
            $('main [class*="col-"]').addClass("animated fadeInUp");
            // remonte la page
            $(document).scrollTop(0);
            // masque la navbar
            $('.navbar-collapse').removeClass('in');

            return this;
        }
    });

});