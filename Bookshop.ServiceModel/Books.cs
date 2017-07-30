using System;
using System.Runtime.Serialization;
using ServiceStack;

namespace Bookshop.ServiceModel
{
    [DataContract]
    [Route("/books")]
    public class Books : IReturn<BooksResponse>
    {
    }

    [DataContract]
    public class BooksResponse
    {
        public string Message { get; set; }
    }
}
