using System;
using System.Runtime.Serialization;
using ServiceStack;

namespace Bookshop.ServiceModel.Commands
{
    [DataContract]
    [Route("/books", "PUT")]
    public class UpdateBookCommand : IReturnVoid
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
