using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;

namespace Bookshop.ServiceModel.Queries
{
    [DataContract]
    [Route("/books", "GET")]
    public class GetBooksQuery : IReturn<GetBooksResponse>
    {
    }

    public class GetBooksResponse : IHasResponseStatus
    {
        public IEnumerable<Book> Books { get; set; }
        public ResponseStatus ResponseStatus { get; set; }
    }

    [DataContract]
    public class Book
    {
        [DataMember]
        public Guid Id { get; set; }

        [DataMember]
        public string Title { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public string Image { get; set; }

        [DataMember]
        public decimal Price { get; set; }
    }
}