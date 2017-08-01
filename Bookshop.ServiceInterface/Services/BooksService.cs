using System.Linq;
using Bookshop.ServiceModel.Commands;
using Bookshop.ServiceModel.Queries;
using Marten;
using ServiceStack;
using Book = Bookshop.ServiceInterface.Domain.Book;

namespace Bookshop.ServiceInterface.Services
{
    public class BooksService : Service
    {
        private readonly IDocumentSession _session;

        public BooksService(IDocumentSession session)
        {
            _session = session;
        }

        public GetBooksResponse Get(GetBooksQuery query)
        {
            var books = _session.Query<Book>().ToList();

            return new GetBooksResponse
            {
                Books = books.ConvertAll(x => x.ConvertTo<ServiceModel.Queries.Book>()),
            };
        }

        public void Post(AddBookCommand command)
        {
            var book = command.ConvertTo<Book>();
            _session.Store(book);
            _session.SaveChanges();
        }

        public void Put(UpdateBookCommand command)
        {
            var book = command.ConvertTo<Book>();
            _session.Store(book);
            _session.SaveChanges();
        }
    }
}
