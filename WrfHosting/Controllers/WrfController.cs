using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Net.Http.Headers;

namespace WrfHosting.Controllers
{
    public class WrfController : ApiController
    {
        //: SQL Server CE and SQL Server Express LocalDB
        /*The huge benefit of LocalDB is that it's real SQL Server - it's a special version of SQL Server Express, but it basically supports 
         * everything that "real" SQL Server has - spatial data types, stored procedures - you name it.
         * SQL Server Compact Edition on the other hand is a very much scaled down version - lot of features and datatypes aren't supported. It's smaller 
         * and more "agile" - but it lacks a lot of punch.
         * LocalDB requires an administrator install (comes as an MSI only) -H
         */
        public HttpResponseMessage Get(string aSiteID, string aTimeStr)
        {
            //D:\fetsrt\lakesServiceCarrier\Plugins\LKSrvPlugin_FetsRTSocketServer\WrfRun\Cezinc\13062612\output\wrf.m3d
            var path = @"E:\projects\camview\src\camweb\FetsRT\src_F40\WrfHosting\WrfHosting\WrfData\cezinc\pluginauto.png";
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(path, FileMode.Open);
            result.Content = new StreamContent(stream);
            //result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("image/png");
            return result;
        }

    }
}
