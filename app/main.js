'use strict';

require.config({
    baseUrl: '/mnemoSite',
    paths: {
        //libs
        backbone    : 'assets/js/backbone-min',
        bootstrap   : 'assets/js/bootstrap.min',
        handlebars  : 'assets/js/handlebars-v2.0.0',
        jquery      : 'assets/js/jquery-2.1.1.min',
        underscore  : 'assets/js/underscore-min',
        text        : 'assets/js/text',
        easing      : 'assets/js/jquery.easing.1.3.min',
        forms       : 'assets/js/jquery.form',
        validate    : 'assets/js/jquery.validate.min',
        dropdown    : 'assets/js/bootstrap-hover-dropdown.min',
        skrollr     : 'assets/js/skrollr.min',
        skrollrss   : 'assets/js/skrollr.stylesheets.min',
        waypoints   : 'assets/js/waypoints.min',
        wpointstick : 'assets/js/waypoints-sticky.min',
        ocarousel   : 'assets/js/owl.carousel.min',
        isotope     : 'assets/js/jquery.isotope.min',
        easytabs    : 'assets/js/jquery.easytabs.min',
        vwunits     : 'assets/js/viewport-units-buggyfill',
        scripts     : 'assets/js/scripts'
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
        forms:{
            deps: ['jquery']
        },
        validate:{
            deps: ['jquery']
        },
        dropdown:{
            deps: ['bootstrap']
        },
        waypoints:{
            deps: ['jquery']
        },
        wpointstick:{
            deps: ['jquery']
        },
        vwunits:{
            deps: ['jquery']
        }
    }
});
require(['backbone', 
    'app/router',
    'jquery',
    'easing', 
    'bootstrap',
    'skrollr',
    'skrollrss',
    'dropdown',
    'waypoints',
    'wpointstick',
    'vwunits'
], function (Backbone, Router) {

    // initialisation de Backbone
    window.app = new Router();
    Backbone.history.start();
});
