define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/contact.html',
    'forms',
    'validate',
    'scripts'
], function($, Backbone, Handlebars, tpl) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "Contact"});
            $(this.el).html(html);
            return this;
        }
    });

});