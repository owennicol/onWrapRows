;
(function ($) {


    $.fn.wrapRows = function (options) {

        var defaults = {
            count: 4,
            wrapperClass: 'row'
        },

        options = $.extend({}, defaults, options);
        
        var divs = this,
        count = options.count,
        wrapperClass = options.wrapperClass;

        for (var i = 0; i < divs.length; i += count) {
            divs.slice(i, i + count).wrapAll('<div class=' + wrapperClass + '></div>');
        }

    };



})(jQuery);
