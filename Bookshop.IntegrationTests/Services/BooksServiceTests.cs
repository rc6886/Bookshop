using System;
using System.Linq;
using Bookshop.ServiceInterface.Services;
using Bookshop.ServiceModel.Commands;
using Bookshop.ServiceModel.Queries;
using Shouldly;
using Xunit;
using Book = Bookshop.ServiceInterface.Domain.Book;

namespace Bookshop.IntegrationTests.Services
{
    [Collection("Database Test")]
    public class BooksServiceTests : IDisposable
    {
        private readonly DatabaseFixture _fixture;
        private readonly BooksService _booksService;

        public BooksServiceTests(DatabaseFixture fixture)
        {
            _fixture = fixture;
            _booksService = _fixture.GetService<BooksService>();
        }

        [Fact]
        public void Should_Get_Book()
        {
            var book = new Book
            {
                Id = Guid.NewGuid(),
                Title = "Title 1",
                Description = "Description 1",
                Image = "Image 1",
                Price = 9.99M,
            };

            _fixture.Session.Store(book);
            _fixture.Session.SaveChanges();

            var result = _booksService.Get(new GetBooksQuery());

            result.Books.Count().ShouldBe(1);

            result.Books.ElementAt(0).Title.ShouldBe(book.Title);
            result.Books.ElementAt(0).Description.ShouldBe(book.Description);
            result.Books.ElementAt(0).Image.ShouldBe(book.Image);
            result.Books.ElementAt(0).Price.ShouldBe(book.Price);
        }

        [Fact]
        public void Should_Add_Book()
        {
            var addBookCommand = new AddBookCommand
            {
                Id = Guid.NewGuid(),
                Title = "Title 1",
                Description = "Description 1",
                Image = "Image 1",
                Price = 9.99M,
            };

            _booksService.Post(addBookCommand);

            var book = _fixture.Session.Query<Book>().Single(x => x.Id == addBookCommand.Id);

            book.Title.ShouldBe(addBookCommand.Title);
            book.Description.ShouldBe(addBookCommand.Description);
            book.Image.ShouldBe(addBookCommand.Image);
            book.Price.ShouldBe(addBookCommand.Price);
        }

        [Fact]
        public void Should_Update_Book()
        {
            var addBookCommand = new AddBookCommand
            {
                Id = Guid.NewGuid(),
                Title = "Title 1",
                Description = "Description 1",
                Image = "Image 1",
                Price = 9.99M,
            };

            _booksService.Post(addBookCommand);

            var updateBookCommand = new UpdateBookCommand
            {
                Id = addBookCommand.Id,
                Title = "Title 2",
                Description = "Description 2",
                Image = "Image 2",
                Price = 10.99M,
            };

            _booksService.Put(updateBookCommand);

            var book = _fixture.Session.Query<Book>().Single(x => x.Id == addBookCommand.Id);

            book.Title.ShouldBe(updateBookCommand.Title);
            book.Description.ShouldBe(updateBookCommand.Description);
            book.Image.ShouldBe(updateBookCommand.Image);
            book.Price.ShouldBe(updateBookCommand.Price);
        }

        public void Dispose()
        {
            _fixture.DocumentStore.Advanced.Clean.DeleteAllDocuments();
        }
    }
}