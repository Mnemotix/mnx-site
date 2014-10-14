define([ 'jquery', 'backbone'], function($, Backbone) {

    "use strict";

    return Backbone.Router.extend({
        routes: {
            "": "home",                     // correspond à une requête index.html sans rien ou juste avec un #
            "whatwedo": "whatwedo",
                "mnxdatalab": "mnxdatalab",
            "about": "about",                 // correspond à une requête index.html#about
            "blog": "blog",                // correspond à une requête index.html#blog
            "contact": "contact",           // correspond à une requête index.html#contact
        },

        home: function () {
            $(document).scrollTop(0);
            this.selectMenuItem("home-menu");
            require(["app/views/Home"], function (HomeView) {
                var view = new HomeView();
                view.delegateEvents();
                view.render();
            });
        },
        whatwedo: function () {
            $(document).scrollTop(0); 
            this.selectMenuItem("whatwedo-menu");
            require(["app/views/Whatwedo"], function (WhatwedoView) {
                var view = new WhatwedoView();
                view.delegateEvents();
                view.render();

            });
        },
            mnxdatalab: function () {
                $(document).scrollTop(0); 
                this.selectMenuItem("whatwedo-menu");
                require(["app/views/MNXdatalab"], function (MNXdatalabView) {
                    var view = new MNXdatalabView();
                    view.delegateEvents();
                    view.render();

                });
            },
        about: function () {
            $(document).scrollTop(0);
            this.selectMenuItem("about-menu");
            require(["app/views/About"], function (AboutView) {
                var view = new AboutView();
                view.delegateEvents();
                view.render();
            });
        },
        blog: function () {
            $(document).scrollTop(0);
            this.selectMenuItem("blog-menu");
            require(["app/views/Blog"], function (BlogView) {
                var view = new BlogView();
                view.delegateEvents();
                view.render();
            });
        },
        contact: function () {
            $(document).scrollTop(0);
            this.selectMenuItem("contact-menu");
            require(["app/views/Contact"], function (ContactView) {
                var view = new ContactView();
                view.delegateEvents();
                view.render();
            });
        },

        selectMenuItem : function(itemClass){
            $('.nav li').removeClass('active'); // reset all
            if (itemClass) {
                $('.' + itemClass).addClass('active');
            }
        }
    });

});