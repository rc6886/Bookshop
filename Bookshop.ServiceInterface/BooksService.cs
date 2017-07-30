using Bookshop.ServiceModel;
using ServiceStack;

namespace Bookshop.ServiceInterface
{
    public class BooksService : IService
    {
        public object Get(Books books)
        {
            return new BooksResponse {Message = "This is a test..."};
        }
    }
}
