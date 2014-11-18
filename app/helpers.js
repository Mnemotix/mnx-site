define(['handlebars', 'i18next'], function (Handlebars, i18n) {

    'use strict';

    Handlebars.registerHelper('t', function(key) {
        var result = i18n.t(key);
        return new Handlebars.SafeString(result);
    });

});
