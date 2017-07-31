using System;
using System.Linq;
using Bookshop.ServiceInterface.Domain;
using Bookshop.ServiceInterface.Services;
using Bookshop.ServiceModel.Commands;
using Shouldly;
using Xunit;

namespace Bookshop.IntegrationTests.Services
{
    [Collection("Database Test")]
    public class BooksServiceTests : IClassFixture<DatabaseCleanupFixture>
    {
        private readonly DatabaseFixture _fixture;

        public BooksServiceTests(DatabaseFixture fixture)
        {
            _fixture = fixture;
        }

        [Fact]
        public void Should_Add_Book()
        {
            var booksService = _fixture.GetService<BooksService>();

            var addBookCommand = new AddBookCommand
            {
                Id = Guid.NewGuid(),
                Title = "Title 1",
                Description = "Description 1",
                Image = "Image 1",
                Price = 9.99M,
            };

            booksService.Post(addBookCommand);

            var book = _fixture.Session.Query<Book>().Single(x => x.Id == addBookCommand.Id);

            book.Title.ShouldBe(addBookCommand.Title);
            book.Description.ShouldBe(addBookCommand.Description);
            book.Image.ShouldBe(addBookCommand.Image);
            book.Price.ShouldBe(addBookCommand.Price);
        }
    }
}