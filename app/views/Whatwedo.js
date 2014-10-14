define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/whatwedo.html',
    'ocarousel',
    'isotope',
    'easytabs',
    'scripts'
], function($, Backbone, Handlebars, tpl) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "Whatwedo"});
            $(this.el).html(html);
            return this;
        }
    });

});