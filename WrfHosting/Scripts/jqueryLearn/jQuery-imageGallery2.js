(function ($) {

    $.fn.imageGallery2 = function () {


        return this.each(function () {


            var e = $(this);

         
            e.click(function () {


                var arrPageSizes = imageGallery_getPageSize();
                var arrPageScroll = imageGallery_getPageScroll();



                $('Body').append("<div id='imageGallery2-overlay'></div>" +
                                    "<div id='imageGallery2-wrapper'>" +
                                        "<div id='imageGallery2-image-container'>" +
                                              "<div id='imageGallery2-close-bar'><div id='imageGallery2-close-button'><img src='../Images/close-icon.png'/></div></div>" +
                                              "<div style='clear: left; '>" +
                                                "<div id='imageGallery2-loadingImage'>" +
                                                    "<img  src='Images/loading.gif' width='50' height='50'/>" +
                                                "</div>" +
                                                "<img id='imageGallery2-image'/>" +
                                            "</div>" +


                                         "</div>" +
                                         "<div id='imageGallery2-image-text-box'>" +
                                                "<div id='imageGallery2-image-caption'>" +
                                                "</div>" +
                                         "</div>" +
                                    "</div>");

                $('#imageGallery2-overlay').css({
                    backgroundColor: 'gray',
                    opacity: 0.7,
                    width: arrPageSizes[0],
                    height: arrPageSizes[1]
                }).fadeIn();


                $('#imageGallery2-wrapper').css({
                    top: arrPageScroll[1] + (arrPageSizes[3] / 10),
                    left: arrPageScroll[0]
                }).show();

                // Load image and set into the image container
                LoadImageToView(this);


                // On the click of the image remove the photo box
                $('#imageGallery2-image').click(function () {

                    CloseSelectedImage();

                });

                return false;
            });

        });

    };

    function CloseSelectedImage() {
        $("#imageGallery2-image-text-box").hide();
        $('#imageGallery2-image-container').animate({ width: 0, height: 0 }, 300, function () { $('#imageGallery2-overlay').remove(); $('#imageGallery2-wrapper').remove(); });


    }

    var imageCaption = null;
    function LoadImageToView(objClick) {


        // Show the loading
        $('#imageGallery2-loadingImage').show();

        // Hide the image before loading the image
        $('#imageGallery2-image').hide();


        // preload image before dispalying
        var objImagePreloader = new Image();

        var url = objClick.getAttribute('href');

        imageCaption = objClick.getAttribute('title');

        objImagePreloader.onload = function () {


            $('#imageGallery2-image').attr('src', url);
            // Perfomance an effect in the image container resizing it
            resizeImageContainer(objImagePreloader.width, objImagePreloader.height);

            //	clear onLoad, IE behaves irratically with animated gifs otherwise
            objImagePreloader.onload = function () { };
        };
        objImagePreloader.src = url;
    };



    function resizeImageContainer(intImageWidth, intImageHeight) {
        var containerBorderSize = 0;
        var containerResizeSpeed = 500;

        // Get current width and height
        var intCurrentWidth = $('#imageGallery2-image').width();
        var intCurrentHeight = $('#imageGallery2-image').height();

        // Get the width and height of the selected image plus the padding
        var intWidth = (intImageWidth + (containerBorderSize * 2)); // Plus the image´s width and the left and right padding value
        var intHeight = (intImageHeight + (containerBorderSize * 2)); // Plus the image´s height and the left and right padding value

        // Diferences
        var intDiffW = intCurrentWidth - intWidth;
        var intDiffH = intCurrentHeight - intHeight;

        // set width and height using animation effects
        $('#imageGallery2-image-container').animate({ width: intWidth, height: intHeight }, containerResizeSpeed, function () { ShowImageAfterLoading(); });


        $('#imageGallery2-image-text-box').css({ width: intImageWidth });
    };

    function ShowImageAfterLoading() {
        $('#imageGallery2-loadingImage').hide();
        $('#imageGallery2-image').fadeIn(function () { ShowImageData(); });
        $('#imageGallery2-close-button').show();
        $('#imageGallery2-close-button').click(function () { CloseSelectedImage(); });
    };


    function ShowImageData() {

        if (imageCaption != null) {
            $('#imageGallery2-image-text-box').slideDown('fast');
            //$('#imageGallery2-image-caption').hide();

            $('#imageGallery2-image-caption').html(imageCaption);

        }
    }


    function imageGallery_getPageSize() {


        var xScroll, yScroll;

        /*******************************************************
        ************************* GET SCROLL BAR ***************
        ********************************************************/

        if (window.innerHeight && window.scrollMaxY) {
            xScroll = window.innerWidth + window.scrollMaxX;
            yScroll = window.innerHeight + window.scrollMaxY;
        } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }



        var windowWidth, windowHeight;
        /*******************************************************
        *********************** GET Window Width ***************
        ********************************************************/

        if (self.innerHeight) {	// all except Explorer
            if (document.documentElement.clientWidth) {
                windowWidth = document.documentElement.clientWidth;
            } else {
                windowWidth = self.innerWidth;
            }
            windowHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) { // other Explorers
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }
        // for small pages with total height less then height of the viewport
        if (yScroll < windowHeight) {
            pageHeight = windowHeight;
        } else {
            pageHeight = yScroll;
        }
        // for small pages with total width less then width of the viewport
        if (xScroll < windowWidth) {
            pageWidth = xScroll;
        } else {
            pageWidth = windowWidth;
        }




        arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
        return arrayPageSize;
    };


    function imageGallery_getPageScroll() {
        var xScroll, yScroll;
        if (self.pageYOffset) {
            yScroll = self.pageYOffset;
            xScroll = self.pageXOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
            yScroll = document.documentElement.scrollTop;
            xScroll = document.documentElement.scrollLeft;
        } else if (document.body) {// all other Explorers
            yScroll = document.body.scrollTop;
            xScroll = document.body.scrollLeft;
        }
        arrayPageScroll = new Array(xScroll, yScroll);
        return arrayPageScroll;
    };




})(jQuery)