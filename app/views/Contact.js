define([ 'jquery',
    'backbone',
    'handlebars',
    'text!app/templates/contact.html',
//    'forms',
//    'validate'
], function($, Backbone, Handlebars, tpl) {

    "use strict";


    return Backbone.View.extend({
        el : $('#page-wrapper'),
        initialize : function() {
            this.template = Handlebars.compile( tpl );
        },
        render : function() {
            var html = this.template({ title : "Contact"});
            $(this.el).html(html);


            /*===================================================================================*/
            /*	FORM VALIDATION
             /*===================================================================================*/

//            $('#contactform, #commentform').validate({
//
//                errorPlacement: function(error, element) {
//                    $(element).attr({
//                        'placeholder' : error.html()
//                    });
//                },
//
//                focusInvalid: false,
//
//                rules: {
//                    name: {
//                        required: true,
//                        minlength: 2
//                    },
//                    email: {
//                        required: true,
//                        email: true
//                    },
//                    message: {
//                        required: true,
//                        minlength: 10
//                    }
//                },
//
//                messages: {
//                    name: {
//                        required: 'Please enter your name!',
//                        minlength: jQuery.format('Name requires at least {0} characters!')
//                    },
//                    email: {
//                        required: 'Please enter your email!',
//                        email: 'Please enter a valid email!'
//                    },
//                    message: {
//                        required: 'Please enter a message!',
//                        minlength: jQuery.format('Message requires at least {0} characters!')
//                    }
//                },
//
//                submitHandler: function(form) {
//                    $('#contactform .btn-submit').html('Sending message ...');
//                    $('#commentform .btn-submit').html('Sending comment ...');
//                    $(form).ajaxSubmit({
//                        success: function(responseText, statusText, xhr, $form) {
//                            $(form).delay(1300).slideUp('fast');
//                            $('#response').html(responseText).hide().delay(1300).slideDown('fast');
//                        }
//                    });
//                    return false;
//                }
//
//            });

            return this;
        }
    });

});