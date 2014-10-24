define([ 'jquery',
    'backbone',
    'handlebars',
    'app/config',
    'text!app/templates/home.html',
    'app/modules/carousel',
    'isotope'
], function($, Backbone, Handlebars, config, tpl, carousel) {

    "use strict";

    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {

            console.log((this.collection.toJSON()));
            var html = this.template({
                items: this.collection.toJSON()
            });
            $(this.el).html(html);
            
            //ajoute un effet à l'affichage de la page
            $('main [class*="col-"]').addClass("animated fadeInUp");
            // remonte la page
            $(document).scrollTop(0);
            // masque la navbar
            $('.navbar-collapse').removeClass('in');

            /* ### BUGFIX : Correction du probleme de timers sur le carousel ### */
            // on supprime tous les timeouts et tous les intervals attachés à la window courante

            var intervalId = window.setInterval("", 9999);          // Get a reference to the last interval
            var timeoutId  = window.setTimeout(function() {}, 0);   // Get a reference to the last timeout

            while (intervalId--) window.clearInterval(intervalId);  // will do nothing if no interval with id is present
            while (timeoutId--)  window.clearTimeout(timeoutId);    // will do nothing if no timeout with id is present

            /* ### BUGFIX ### */

            // Initialisation du caroussel principal
            carousel.init("#owl-main");

            // CAROUSSEL WORK
            $("#owl-work").owlCarousel({
                autoPlay: 5000,
                slideSpeed: 200,
                paginationSpeed: 600,
                rewindSpeed: 800,
                stopOnHover: true,
                navigation: true,
                pagination: true,
                rewindNav: true,
                singleItem: true,
                autoHeight: true,
                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
            });

            // CAROUSSEL CLIENTS
            $("#owl-clients").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                rewindNav: true,
                items: 4,
                itemsDesktopSmall: [1199, 4],
                itemsTablet: [977, 3],
                navigation: true,
                pagination: true,
                navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
            });


//            this.parseRSS();


            /*===================================================================================*/
            /*	ISOTOPE BLOG
             /*===================================================================================*/

            var $container = $('.posts');

            $container.imagesLoaded(function () {
                $container.isotope({
                    itemSelector: '.post'
                });
            });

            $('.format-filter li a, .format-wrapper a').click(function () {

                var selector = $(this).attr('data-filter');

                $container.isotope({
                    filter: selector
                });

                $('.format-filter li a').removeClass('active');
                $('.format-filter li a[data-filter="' + selector + '"]').addClass('active');

                $('html, body').animate({
                    scrollTop: $('.format-filter').offset().top - 130
                }, 600);

                return false;

            });

            $(window).on('resize', function () {
                $('.posts').isotope('reLayout')
            });

            return this;
        }
//        ,
//        parseRSS:function(){
//            $(".posts").empty();
//            $.ajax({
//                url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(config.blog.feed_url),
//                dataType: 'json',
//                success: function(data) {
//                    var entries = data.responseData.feed;
//                    $.each(entries, function(idx, item){
////                        <div class="post format-standard">
////
////                            <div class="post-content">
////
////                                <h2 class="post-title">
////                                    <a href="http://andersnoren.se/themes/hemingway/drink-more-coffee-developers/">Magnis modipsae que lib voloratati andigen daepeditem quiate ut repore autem labor.</a>
////                                </h2>
////
////                                <ul class="meta">
////                                    <li class="date">May 14, 2014</li>
////                                    <li class="categories"><a href="#">Labs</a></li>
////                                    <li class="comments"><a href="#">14</a></li>
////                                    <li class="likes"><a href="#">30</a></li>
////                                </ul><!-- /.meta -->
////
////                                <p>Magnis modipsae que lib voloratati andigen daepeditem quiate ut repore autem labor. Laceaque quia sitiorem restem non restibusaes es modis.</p>
////
////                                <a href="http://andersnoren.se/themes/hemingway/drink-more-coffee-developers/" class="btn">Read more</a>
////
////                            </div><!-- /.post-content -->
////
////                        </div>
//
//                    });
//                    console.log("success", data.responseData.feed);
////                    callback(data.responseData.feed);
//                },
//                timeout: config.timeout
//            });
//        }
    });

});