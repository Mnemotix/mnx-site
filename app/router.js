define([ 'jquery', 'backbone'], function($, Backbone) {

    "use strict";

    return Backbone.Router.extend({
        routes: {
            ""          : "home",               // correspond à une requête index.html sans rien ou juste avec un #
            "whatwedo"  : "whatwedo",           // correspond à une requête index.html#about
            "mnxdatalab": "mnxdatalab",         // ...
            "about"     : "about",
            "questions" : "questions",
            "glossary"  : "glossary",
            "blog"      : "blog", 
            "contact"   : "contact"
        },

        home: function () {
            this.selectMenuItem("home-menu");
            require(["app/models/Feed", "app/views/Home"], function (models, HomeView) {
                var feed = new models.Feed();
                feed.fetch({
                    success: function (data) {
                        var view = new HomeView({
                            collection : data
                        });
                        view.delegateEvents();
                        view.render();
                    }
                });
            });
        },
        whatwedo: function () {
            this.selectMenuItem("whatwedo-menu");
            require(["app/views/Whatwedo"], function (WhatwedoView) {
                var view = new WhatwedoView();
                view.delegateEvents();
                view.render();

            });
        },
        // Services
            mnxdatalab: function () {
                this.selectMenuItem("whatwedo-menu");
                require(["app/views/MNXdatalab"], function (MNXdatalabView) {
                    var view = new MNXdatalabView();
                    view.delegateEvents();
                    view.render();

                });
            },
        // Solutions
        // Labs
        about: function () {
            this.selectMenuItem("about-menu");
            require(["app/views/About"], function (AboutView) {
                var view = new AboutView();
                view.delegateEvents();
                view.render();
            });
        },
        // Ressources
            questions: function () {
                this.selectMenuItem("ressources-menu");
                require(["app/views/Questions"], function (QuestionsView) {
                    var view = new QuestionsView();
                    view.delegateEvents();
                    view.render();

                });
            },
            glossary: function () {
                this.selectMenuItem("ressources-menu");
                require(["app/views/Glossary"], function (GlossaryView) {
                    var view = new GlossaryView();
                    view.delegateEvents();
                    view.render();

                });
            },
        blog: function () {
            this.selectMenuItem("blog-menu");
            require(["app/views/Blog"], function (BlogView) {
                var view = new BlogView();
                view.delegateEvents();
                view.render();
            });
        },
        contact: function () {
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