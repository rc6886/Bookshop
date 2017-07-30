using Bookshop.ServiceModel;
using Marten;
using ServiceStack;

namespace Bookshop.ServiceInterface.Services
{
    public class BooksService : IService
    {
        private readonly IDocumentSession _session;

        public BooksService(IDocumentSession session)
        {
            _session = session;
        }

        public object Get(Books books)
        {
            return new BooksResponse {Message = "This is a test..."};
        }
    }
}
