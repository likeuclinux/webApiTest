using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WrfHosting.Models;

namespace WrfHosting.Controllers
{
    //http://www.asp.net/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api demo sources
    /*
     for building APIs that expose services and data for javascript request..

/api/{controller}/{id}

URI 	HTTP Method 	Action
/api/products 	GET 	GetAllProducts()
/api/products/1 	GET 	GetProductById(1)

"products" matches the controller named ProductsController. The request is a GET request, so the framework looks 
for a method on ProductsController whose name starts with "Get...". Furthermore, the URI does not contain the optional {id} segment, 
so the framework looks for a method with no parameters. The ProductsController.GetAllProducts method meets all of these requirements.

/api/products/ 	POST 	405 Method Not Allowed

 the client sends an HTTP POST request. The framework looks for a method whose name starts with "Post..." However, no such method exists in 
ProductsController, so the framework returns an HTTP response with status 405, Method Not Allowed. 


Web API can automatically serialize your model to JSON, XML, or some other format, and then write the serialized data into the body of the HTTP response message
and your controller just returned strong type c# class:
     */
    public class ProductsController : ApiController
    {
        Product[] products = new Product[] 
        { 
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 }, 
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M }, 
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M } 
        };

        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }

        public Product GetProductById(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return product;
        }
    }
}
