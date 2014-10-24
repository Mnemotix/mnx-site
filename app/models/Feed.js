define([ 'jquery', 'backbone', 'app/config' ], function($, Backbone, config) {

    "use strict";

    return Backbone.Collection.extend({
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(config.blog.feed_url),
        parse: function(resp) {
            return (resp.responseData && resp.responseStatus==200) ? resp.responseData.feed.entries : resp;
        }
    });
});