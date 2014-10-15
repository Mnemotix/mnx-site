'use strict';

require.config({
    baseUrl: '/mnx-site',
    paths: {
        //libs
        backbone    : 'assets/js/libs/backbone-min',
        bootstrap   : 'assets/js/libs/bootstrap.min',
        handlebars  : 'assets/js/libs/handlebars-v2.0.0',
        jquery      : 'assets/js/libs/jquery-2.1.1.min',
        underscore  : 'assets/js/libs/underscore-min',
        waypoints   : 'assets/js/libs/waypoints.min',
        ocarousel   : 'assets/js/libs/owl.carousel.min',
//      vwunits     : 'assets/js/libs/viewport-units-buggyfill',

        // plugins
        text        : 'assets/js/plugins/text',
        easing      : 'assets/js/plugins/jquery.easing.1.3.min',
        scrollUp    : 'assets/js/plugins/jquery.scrollUp',
        dropdown    : 'assets/js/plugins/bootstrap-hover-dropdown.min',
        isotope     : 'assets/js/plugins/jquery.isotope.min'
    },

    // Shim declaration
    'shim': {
        underscore: { exports: '_' },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: "Backbone"
        },
        handlebars: {
            exports: "Handlebars"
        },
        bootstrap:{
            deps: ['jquery']
        },
        easing:{
            deps: ['jquery']
        },
        dropdown:{
            deps: ['bootstrap']
        },
        waypoints:{
            deps: ['jquery']
        },
        isotope:{
            deps: ['jquery']
        },
        scrollUp:{
            deps: ['jquery']
        },
        /*
        vwunits:{
            deps: ['jquery'],
            exports: "VUBuggyfill"
        }*/
    }
});

require(['jquery', 'backbone',
    'app/router',
//  'vwunits',
    'easing',
    'bootstrap',
    'dropdown',
    'scrollUp'
], function ($, Backbone, Router, VUBuggyfill) {

    var jQuery = $; // utilise pour le plugin easytab

    /*===================================================================================*/
    /*	DROPDOWN ON HOVER (NAVIGATION)
     /*===================================================================================*/
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();


    /*===================================================================================*/
    /*	GO TO TOP / SCROLL UP
     /*===================================================================================*/
    $.scrollUp({
        scrollName: "scrollUp", // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: "top", // "top" or "bottom"
        scrollSpeed: 1000, // Speed back to top (ms)
        easingType: "easeInOutCubic", // Scroll to top easing (see http://easings.net/)
        animation: "fade", // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "<i class='icon-up-open-mini'></i>", // Text for element, can contain HTML
        scrollTitle: " ", // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: 0, // Set true to use image
        activeOverlay: 0, // Set CSS color to display scrollUp active point, e.g "#00FFFF"
        zIndex: 1001 // Z-Index for the overlay
    });

    /*===================================================================================*/
    /*	ANIMATED / SMOOTH SCROLL TO ANCHOR
     /*===================================================================================*/

    $("a.scrollTo").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "easeInOutCubic"
        });
        return false;
    });

    /*===================================================================================*/
    /*	IMAGE HOVER
     /*===================================================================================*/

    $('.icon-overlay a').prepend('<span class="icn-more"></span>');


    /*===================================================================================*/
    /*	DATA REL
     /*===================================================================================*/

    $('a[data-rel]').each(function () {
        $(this).attr('rel', $(this).data('rel'));
    });


    /*===================================================================================*/
    /*	TOOLTIP
     /*===================================================================================*/

    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }

    /*===================================================================================*/
    /*	CONVERTING iOS SAFARI VIEWPORT UNITS (BUGGY) INTO PIXELS
     /*===================================================================================*/
//    VUBuggyfill.init(true);


    // initialisation de Backbone
    window.app = new Router();
    Backbone.history.start();

});
