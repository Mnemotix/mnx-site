define([ 'jquery', 'backbone', 'app/config' ], function($, Backbone, config) {

    "use strict";

    var FeedItem = Backbone.Model.extend({
            initialize: function(options) {
                typeof(options) != 'undefined' || (options = {});
                this.action = options.action || "";
            },
            url :function(){
                var url = "/api/sna/gfilters/" + this.id + this.action;
                return url;
            }
        });

    var Feed = Backbone.Collection.extend({
        model: FeedItem,
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(config.blog.feed_url),
        parse: function(resp) {
            if(resp.responseData && resp.responseStatus==200)
                return resp.responseData.feed.entries;
            return resp;
        }
    });

    return {
        FeedItem: FeedItem,
        Feed: Feed
    }

});