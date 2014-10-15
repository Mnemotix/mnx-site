define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/mnxdatalab.html',
    'app/modules/waypoints'
], function($, Backbone, Handlebars, tpl, waypoints) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "MNX Datalab"});
            $(this.el).html(html);
            waypoints.init();
            return this;
        }
    });

});