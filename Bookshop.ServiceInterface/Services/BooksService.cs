using System;
using System.Collections.Generic;
using Bookshop.ServiceModel.Commands;
using Bookshop.ServiceModel.Queries;
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

        public IEnumerable<Book> Get(GetBooksQuery query)
        {
            return new List<Book>
            {
                new Book
                {
                    Id = Guid.NewGuid(),
                    Title = "Title 1",
                    Description = "Description 1", 
                    Image = "Image 1",
                    Price = 9.99M,
                }
            };
        }

        public void Post(AddBookCommand command)
        {
            var book = command.ConvertTo<Domain.Book>();
            _session.Store(book);
            _session.SaveChanges();
        }
    }
}
