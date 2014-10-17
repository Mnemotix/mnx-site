/*===================================================================================*/
/*	OWL CAROUSEL
 /*===================================================================================*/

define([ 'jquery', 'ocarousel'], function($) {

    var mnxCarousel = {
        dragging : true,
        carouselId : "",
        fadeInReset:function() {
            if (!this.dragging) {
                $(this.carouselId + " .caption .fadeIn-1, " + this.carouselId + " .caption .fadeIn-2, " + this.carouselId + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.carouselId + " .caption .fadeIn-1, " + this.carouselId + " .caption .fadeIn-2, " + this.carouselId + " .caption .fadeIn-3").css({ opacity: 0 });
            }
        },

        fadeInDownReset:function() {
            if (!this.dragging) {
                $(this.carouselId + " .caption .fadeInDown-1, " + this.carouselId + " .caption .fadeInDown-2, " + this.carouselId + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.carouselId + " .caption .fadeInDown-1, " + this.carouselId + " .caption .fadeInDown-2, " + this.carouselId + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
            }
        },

        fadeInUpReset:function() {
            if (!this.dragging) {
                $(this.carouselId + " .caption .fadeInUp-1, " + this.carouselId + " .caption .fadeInUp-2, " + this.carouselId + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.carouselId + " .caption .fadeInUp-1, " + this.carouselId + " .caption .fadeInUp-2, " + this.carouselId + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
            }
        },

        fadeInLeftReset:function() {
            if (!this.dragging) {
                $(this.carouselId + " .caption .fadeInLeft-1, " + this.carouselId + " .caption .fadeInLeft-2, " + this.carouselId + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.carouselId + " .caption .fadeInLeft-1, " + this.carouselId + " .caption .fadeInLeft-2, " + this.carouselId + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
            }
        },

        fadeInRightReset:function() {
            if (!this.dragging) {
                $(this.carouselId + " .caption .fadeInRight-1, " + this.carouselId + " .caption .fadeInRight-2, " + this.carouselId + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(this.carouselId + " .caption .fadeInRight-1, " + this.carouselId + " .caption .fadeInRight-2, " + this.carouselId + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
            }
        },

        fadeIn:function() {
            $(this.carouselId + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        },

        fadeInDown:function() {
            $(this.carouselId + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        },

        fadeInUp:function() {
            $(this.carouselId + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        },

        fadeInLeft:function() {
            $(this.carouselId + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        },

        fadeInRight:function() {
            $(this.carouselId + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(this.carouselId + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        },

        init:function(carouselId) {

            this.carouselId = carouselId;
//            this.dragging = true;

            var self = this;

            $(this.carouselId).owlCarousel({
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

            if ($(this.carouselId).hasClass("owl-one-item")) {
                $(this.carouselId + ".owl-one-item").data('owlCarousel').destroy();
            }

            $(this.carouselId + ".owl-one-item").owlCarousel({
                singleItem: true,
                navigation: false,
                pagination: false
            });

            $('#transitionType li a').click(function () {

                $('#transitionType li a').removeClass('active');
                $(this).addClass('active');

                var newValue = $(this).attr('data-transition-type');

                $(this.carouselId).data("owlCarousel").transitionTypes(newValue);
                $(this.carouselId).trigger("owl.next");

                return false;

            });
        },
        next:function(){
            var owl = $(this.carouselId).data('owlCarousel');
            owl.trigger('owl.next');
        },
        prev:function(){
            var owl = $(this.carouselId).data('owlCarousel');
            owl.trigger('owl.prev');
        }
    };

    return mnxCarousel;
});
