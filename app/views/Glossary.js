define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/glossary.html',
], function($, Backbone, Handlebars, tpl) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "Glossary"});
            $(this.el).html(html);

            //ajoute un effet à l'affichage de la page
            $('main [class*="col-"]').addClass("animated fadeInUp");
            $(document).scrollTop(0);
            
            return this;
        }
    });

});