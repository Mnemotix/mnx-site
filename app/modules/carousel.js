/*===================================================================================*/
/*	OWL CAROUSEL
 /*===================================================================================*/

define([ 'jquery', 'ocarousel'], function($) {

    var mnxCarousel = {
        dragging : true,
        owlElementID : "#owl-main",
        fadeInReset:function() {
            if (!this.dragging) {
                $(this.owlElementID + " .caption .fadeIn-1, " + this.owlElementID + " .caption .fadeIn-2, " + this.owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.owlElementID + " .caption .fadeIn-1, " + this.owlElementID + " .caption .fadeIn-2, " + this.owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
            }
        },

        fadeInDownReset:function() {
            if (!this.dragging) {
                $(this.owlElementID + " .caption .fadeInDown-1, " + this.owlElementID + " .caption .fadeInDown-2, " + this.owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.owlElementID + " .caption .fadeInDown-1, " + this.owlElementID + " .caption .fadeInDown-2, " + this.owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
            }
        },

        fadeInUpReset:function() {
            if (!this.dragging) {
                $(this.owlElementID + " .caption .fadeInUp-1, " + this.owlElementID + " .caption .fadeInUp-2, " + this.owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.owlElementID + " .caption .fadeInUp-1, " + this.owlElementID + " .caption .fadeInUp-2, " + this.owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
            }
        },

        fadeInLeftReset:function() {
            if (!this.dragging) {
                $(this.owlElementID + " .caption .fadeInLeft-1, " + this.owlElementID + " .caption .fadeInLeft-2, " + this.owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.owlElementID + " .caption .fadeInLeft-1, " + this.owlElementID + " .caption .fadeInLeft-2, " + this.owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
            }
        },

        fadeInRightReset:function() {
            if (!this.dragging) {
                $(this.owlElementID + " .caption .fadeInRight-1, " + this.owlElementID + " .caption .fadeInRight-2, " + this.owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.owlElementID + " .caption .fadeInRight-1, " + this.owlElementID + " .caption .fadeInRight-2, " + this.owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
            }
        },

        fadeIn:function() {
            $(this.owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        },

        fadeInDown:function() {
            $(this.owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        },

        fadeInUp:function() {
            $(this.owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        },

        fadeInLeft:function() {
            $(this.owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        },

        fadeInRight:function() {
            $(this.owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        },

        init:function(){
            var self = this;
            $(this.owlElementID).owlCarousel({

                autoPlay: 5000,
                stopOnHover: true,
                navigation: true,
                pagination: true,
                singleItem: true,
                addClassActive: true,
                transitionStyle: "fade",
                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],

                afterInit: function() {
                    self.fadeIn();
                    self.fadeInDown();
                    self.fadeInUp();
                    self.fadeInLeft();
                    self.fadeInRight();
                },

                afterMove: function() {
                    self.fadeIn();
                    self.fadeInDown();
                    self.fadeInUp();
                    self.fadeInLeft();
                    self.fadeInRight();
                },

                afterUpdate: function() {
                    self.fadeIn();
                    self.fadeInDown();
                    self.fadeInUp();
                    self.fadeInLeft();
                    self.fadeInRight();
                },

                startDragging: function() {
                    self.dragging = true;
                },

                afterAction: function() {
                    self.fadeInReset();
                    self.fadeInDownReset();
                    self.fadeInUpReset();
                    self.fadeInLeftReset();
                    self.fadeInRightReset();
                    self.dragging = false;
                }

            });

            if ($(this.owlElementID).hasClass("owl-one-item")) {
                $(this.owlElementID + ".owl-one-item").data('owlCarousel').destroy();
            }

            $(this.owlElementID + ".owl-one-item").owlCarousel({
                singleItem: true,
                navigation: false,
                pagination: false
            });

            $('#transitionType li a').click(function () {

                $('#transitionType li a').removeClass('active');
                $(this).addClass('active');

                var newValue = $(this).attr('data-transition-type');

                $(this.owlElementID).data("owlCarousel").transitionTypes(newValue);
                $(this.owlElementID).trigger("owl.next");

                return false;

            });
        },
        next:function(){
            var owl = $(this.owlElementID).data('owlCarousel');
            owl.trigger('owl.next');
        },
        prev:function(){
            var owl = $(this.owlElementID).data('owlCarousel');
            owl.trigger('owl.prev');
        }
    };


//            $("#owl-testimonials").owlCarousel({
//                autoPlay: 5000,
//                stopOnHover: true,
//                navigation: true,
//                pagination: true,
//                singleItem: true,
//                addClassActive: true,
//                autoHeight: true,
//                transitionStyle: "fadeInAfterOut",
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });
//
//            $("#owl-projects").owlCarousel({
//                navigation: false,
//                autoHeight: true,
//                slideSpeed: 300,
//                paginationSpeed: 400,
//                rewindNav: false,
//                singleItem: true,
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });
//
//            $("#owl-latest-works").owlCarousel({
//                autoPlay: 5000,
//                stopOnHover: true,
//                navigation: true,
//                pagination: true,
//                rewindNav: true,
//                items: 4,
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });
//
//            $("#owl-videos").owlCarousel({
//                autoPlay: 5000,
//                stopOnHover: true,
//                navigation: true,
//                pagination: true,
//                rewindNav: true,
//                items: 5,
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });
//
//            $("#owl-audio").owlCarousel({
//                autoPlay: 5000,
//                stopOnHover: true,
//                navigation: true,
//                pagination: true,
//                rewindNav: true,
//                items: 5,
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });
//
//            $("#owl-popular-posts").owlCarousel({
//                autoPlay: 5000,
//                stopOnHover: true,
//                navigation: true,
//                pagination: true,
//                rewindNav: true,
//                items: 5,
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });
//
//            $("#owl-related-posts").owlCarousel({
//                autoPlay: 5000,
//                stopOnHover: true,
//                navigation: true,
//                pagination: true,
//                rewindNav: true,
//                items: 2,
//                itemsDesktopSmall: [1199, 2],
//                itemsTablet: [977, 2],
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });
//
//            $("#owl-featured-works").owlCarousel({
//                autoPlay: 5000,
//                stopOnHover: true,
//                navigation: true,
//                pagination: true,
//                rewindNav: true,
//                singleItem: true,
//                transitionStyle: "goDown",
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });
//
    //            $("#owl-office").owlCarousel({
//                autoPlay: 5000,
//                slideSpeed: 200,
//                paginationSpeed: 600,
//                rewindSpeed: 800,
//                stopOnHover: true,
//                navigation: true,
//                pagination: true,
//                rewindNav: true,
//                singleItem: true,
//                autoHeight: true,
//                transitionStyle: "fade",
//                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
//            });

    return mnxCarousel;
});
