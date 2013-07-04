(function ($) {

    $.fn.hoverElement = function () {

        return this.each(function () {

            $(this).hover(
                            function () {
                                $(this).addClass('hoverTextSel');
                            },
                            function () {
                                $(this).removeClass('hoverTextSel');
                            }
                        ); // end of Hover event

        }); // end for each

    }; // end of functions

})(jQuery);

