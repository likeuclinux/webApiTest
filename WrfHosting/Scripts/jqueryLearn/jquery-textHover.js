(function ($) {

    $.fn.textHover = function (options) {

        var defaultVal = {

            Text: 'Your mouse is over',
            ForeColor: 'red',
            BackColor: 'gray'
        };

        var obj = $.extend(defaultVal, options);

        return this.each(function () {

            var selObject = $(this);

            var oldText = selObject.text();
            var oldBgColor = selObject.css("background-color");
            var oldColor = selObject.css("color");


            selObject.hover(function () {

                selObject.text(obj.Text);
                selObject.css("background-color", obj.BackColor);
                selObject.css("color", obj.ForeColor);
            },
            function () {
                selObject.text(oldText);
                selObject.css("background-color", oldBgColor);
                selObject.css("color", oldColor);
            }

            );


        });

    }

})(jQuery);