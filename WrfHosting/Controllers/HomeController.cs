using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WrfHosting.Controllers
{
    /*****
     http://www.codeproject.com/Articles/291290/How-To-Write-Plugin-in-jQuery
     *
“jquery-myPlugin.js”:
(function( $ ) {
  $.fn.myPlugin = function() { 
    // Do your awesome plugin stuff here
  };
})( jQuery );    
     
the simplest form:
     
(function ($) {

    $.fn.myPlugin = function () {       
        this.fadeOut('normal');
    };
})(jQuery);

The use it in js code:
      $(document).ready(function () {
            $("#btnFadeout").click(function () {
                //it use your myPlugin method on selected element
                $("#myDiv").myPlugin();
            });

     * 
     *****/
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
