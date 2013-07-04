(

function ($) {


    $.fn.extend({
        center: function (options) {
            var options = $.extend({ // Default values
                inside: window, // element, center into window
                transition: 0, // millisecond, transition time
                minX: 0, // pixel, minimum left element value
                minY: 0, // pixel, minimum top element value
                vertical: true, // booleen, center vertical
                withScrolling: true, // booleen, take care of element inside scrollTop when minX < 0 and window is small or when window is big
                horizontal: true // booleen, center horizontal
            }, options);
            return this.each(function () {
                var props = { position: 'absolute' };
                if (options.vertical) {
                    var top = ($(options.inside).height() - $(this).outerHeight()) / 2;
                    if (options.withScrolling) top += $(options.inside).scrollTop() || 0;
                    top = (top > options.minY ? top : options.minY);
                    $.extend(props, { top: top + 'px' });
                }
                if (options.horizontal) {
                    var left = ($(options.inside).width() - $(this).outerWidth()) / 2;
                    if (options.withScrolling) left += $(options.inside).scrollLeft() || 0;
                    left = (left > options.minX ? left : options.minX);
                    $.extend(props, { left: left + 'px' });
                }
                if (options.transition > 0) $(this).animate(props, options.transition);
                else $(this).css(props);
                return $(this);
            });
        }
    });


    $.fn.imageGallery = function () {

        return this.each(function () {

            var e = $(this);
            var h = e.height();
            var w = e.width();

            e.height(75);
            e.width(75);

            e.click(function () {


                $("#gallery_popup_image").remove(); // remove last opened image, if any

                var image = e.clone();

                image.attr("id", "gallery_popup_image");
                //image.css("position", "absolute");
                image.css({
                            position:"absolute",
                            border: "6px solid #fffa7c"
                          });
                image.height(h);
                image.width(w);
                image.prependTo('body').center();

                image.click(function () {
                    $(this).remove();
                });
            });
        });

    };

})(jQuery);