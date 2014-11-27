define([ 'jquery', 'backbone', 'i18next'], function($, Backbone, i18n) {

    "use strict";

    return Backbone.Router.extend({
        routes: {
            "(lang/:lang)" : "home",                    // correspond à une requête index.html sans rien ou juste avec un #
            "work"      : "work",                       // correspond à une requête index.html#about
                "mnxstarter"    :  "mnxstarter",      // services ...
                "mnxbooster"    :  "mnxbooster",
                "mnxconsulting" :  "mnxconsulting",
                "mnxtraining"   :  "mnxtraining",
                "mnxserver"     :  "mnxserver",
                "mnxwebmarks"   :  "mnxwebmarks",
                "naturopedia":  "naturopedia",
                "cordis"     :  "cordis",
            "about"     : "about",
            "questions" : "questions",
            "glossary"  : "glossary",
            "contact"   : "contact",
            "legal"     : "legal",
            "credits"   : "credits",
            "press"     : "press"
        },

        home: function (lang) {
            if(lang) {
                window.lang = lang;
                i18n.init({ lng: window.lang });
            }
            this.selectMenuItem("home-menu");
            require(["app/models/Feed", "app/views/Home"], function (FeedModel, HomeView) {
                var feed = new FeedModel();
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

        work: function () {
            this.selectMenuItem("work-menu");
            require(["app/views/Work"], function (WorkView) {
                var view = new WorkView();
                view.delegateEvents();
                view.render();

            });
        },

            // Services
            mnxstarter: function () {
                this.selectMenuItem("work-menu");
                require(["app/views/MNXstarter"], function (MNXstarterView) {
                    var view = new MNXstarterView();
                    view.delegateEvents();
                    view.render();

                });
            },
            mnxbooster: function () {
                this.selectMenuItem("work-menu");
                require(["app/views/MNXbooster"], function (MNXboosterView) {
                    var view = new MNXboosterView();
                    view.delegateEvents();
                    view.render();

                });
            },
            mnxconsulting: function () {
                this.selectMenuItem("work-menu");
                require(["app/views/MNXconsulting"], function (MNXconsultingView) {
                    var view = new MNXconsultingView();
                    view.delegateEvents();
                    view.render();

                });
            },
            mnxtraining: function () {
                this.selectMenuItem("work-menu");
                require(["app/views/MNXtraining"], function (MNXtrainingView) {
                    var view = new MNXtrainingView();
                    view.delegateEvents();
                    view.render();

                });
            },
            // Solutions
            mnxserver: function () {
                this.selectMenuItem("work-menu");
                require(["app/views/MNXserver"], function (MNXserverView) {
                    var view = new MNXserverView();
                    view.delegateEvents();
                    view.render();

                });
            },
            mnxwebmarks: function () {
                this.selectMenuItem("work-menu");
                require(["app/views/MNXwebmarks"], function (MNXwebmarksView) {
                    var view = new MNXwebmarksView();
                    view.delegateEvents();
                    view.render();

                });
            },
            // Labs
            naturopedia: function () {
                this.selectMenuItem("work-menu");
                require(["app/views/LABnaturopedia"], function (LABnaturopediaView) {
                    var view = new LABnaturopediaView();
                    view.delegateEvents();
                    view.render();

                });
            },
            cordis: function () {
                this.selectMenuItem("work-menu");
                require(["app/views/LABcordis"], function (LABcordisView) {
                    var view = new LABcordisView();
                    view.delegateEvents();
                    view.render();

                });
            },


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

        contact: function () {
            if(lang) {
                window.lang = lang;
                i18n.init({ lng: window.lang });
            }
            this.selectMenuItem("contact-menu");
            require(["app/views/Contact"], function (ContactView) {
                var view = new ContactView();
                view.delegateEvents();
                view.render();
            });
        },
        
        legal: function () {
            this.selectMenuItem("");
            require(["app/views/Legal"], function (LegalView) {
                var view = new LegalView();
                view.delegateEvents();
                view.render();
            });
        },
        credits: function () {
            this.selectMenuItem("");
            require(["app/views/Credits"], function (CreditsView) {
                var view = new CreditsView();
                view.delegateEvents();
                view.render();
            });
        },
        press: function () {
            this.selectMenuItem("");
            require(["app/views/Press"], function (PressView) {
                var view = new PressView();
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