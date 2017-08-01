using System;
using System.Data;
using System.IO;
using Bookshop.WebApi;
using Funq;
using Marten;
using Microsoft.Extensions.Configuration;
using Remotion.Linq.Clauses;
using ServiceStack;
using ServiceStack.OrmLite;
using ServiceStack.OrmLite.PostgreSQL;
using Xunit;

namespace Bookshop.IntegrationTests
{
    public class DatabaseFixture : IDisposable
    {
        private readonly OrmLiteConnectionFactory _dbFactory;
        private readonly Container _container;
        private readonly AppHost _appHost;

        public IDocumentStore DocumentStore { get; }
        public IDocumentSession Session { get; }

        public DatabaseFixture()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            var configuration = builder.Build();
            var testConnectionString = configuration.GetConnectionString("BookshopTestDb");
            var testPassword = string.IsNullOrEmpty(configuration.GetConnectionString("AppVeyorPassword"))
                ? "Blinds!@"
                : configuration.GetConnectionString("AppVeyorPassword");

            _dbFactory = new OrmLiteConnectionFactory($"host=localhost;password={testPassword};username=postgres",
                new PostgreSqlDialectProvider());

            using (var db = _dbFactory.Open())
            {
                db.ExecuteSql("DROP DATABASE IF EXISTS bookshop_test; CREATE DATABASE bookshop_test;");
            }

            if (!string.IsNullOrEmpty(configuration.GetConnectionString("AppVeyorPassword")))
            {
                testConnectionString = testConnectionString.Replace("Blinds!@", testPassword);
            }

            _appHost = new AppHost(testConnectionString);
            _appHost.Init();

            _container = _appHost.Container;

            DocumentStore = _container.Resolve<IDocumentStore>();
            Session = _container.Resolve<IDocumentSession>();
        }

        public void Dispose()
        {
            _appHost.Dispose();

            using (var db = _dbFactory.Open())
            {
                var database = Session.Connection.Database;

                Session.Dispose();
                DocumentStore.Dispose();

                db.ExecuteSql($"SELECT pg_terminate_backend (pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '{database}'");
                db.ExecuteSql($"DROP DATABASE IF EXISTS {database};");
            }
        }

        public T GetService<T>() where T : IService
        {
            return _container.Resolve<T>();
        }
    }

    [CollectionDefinition("Database Test")]
    public class DatabaseTest : ICollectionFixture<DatabaseFixture>
    {
    }
}