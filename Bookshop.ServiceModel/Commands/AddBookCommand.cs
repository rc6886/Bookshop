using System;
using System.Runtime.Serialization;
using ServiceStack;

namespace Bookshop.ServiceModel.Commands
{
    [DataContract]
    [Route("/books", "POST")]
    public class AddBookCommand : IReturn<AddBookResponse>
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

    public class AddBookResponse : IHasResponseStatus
    {
        public ResponseStatus ResponseStatus { get; set; }
    }
}
