/*
 *  Project: jQuery Password Peekaboo
 *  Description: Temporarily expose the contents of a password field, as popularized by Microsoft in Windows 8
 *  Author: Ian J. MacIntosh (@ianjmacintosh)
 *  License: MIT
 */

(function($, window, document, undefined) {
    "use strict";

    var pluginName = "passwordPeekaboo",
        defaults = {
            "togglerMarkup": "<div class=\"peekaboo-toggler\"></div>"
        };

    function PasswordPeekaboo(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this.init();
    }

    PasswordPeekaboo.prototype = {
        "init": function() {
            var $field = $(this.element),
            $toggler = $(this.settings.togglerMarkup),
            unveilPassword = this.unveilPassword,
            veilPassword = this.veilPassword;

            $field.after($toggler);

            $toggler.on("mousedown", function() {
                unveilPassword($field);
            });

            $toggler.on("mouseup", function() {
                veilPassword($field);
            });

        },

        "unveilPassword": function($field) {
            $field.attr("type","text");
        },

        "veilPassword": function($field) {
            $field.attr("type","password");
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new PasswordPeekaboo(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);
