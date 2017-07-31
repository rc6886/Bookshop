using System.Reflection;
using Bookshop.ServiceInterface.IoC;
using Bookshop.ServiceInterface.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ServiceStack;
using ServiceStack.Configuration;
using StructureMap;
using Container = Funq.Container;

namespace Bookshop.WebApi
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            Configuration = builder.Build();

            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var connectionString = Configuration.GetConnectionString("BookshopDb");
            app.UseServiceStack(new AppHost(connectionString));
        }
    }

    public class AppHost : AppHostBase
    {
        private readonly string _connectionString;

        public AppHost(string connectionString) : 
            base("Bookshop.WebApi", typeof(BooksService).GetTypeInfo().Assembly)
        {
            _connectionString = connectionString;
        }

        public override void Configure(Container container)
        {
            container.Adapter = new StructureMapContainerAdapter(_connectionString);
        }
    }

    public class StructureMapContainerAdapter : IContainerAdapter
    {
        private readonly IContainer _container;

        public StructureMapContainerAdapter(string connectionString)
        {
            _container = new StructureMap.Container(new BookshopServiceRegistry(connectionString));
        }

        public T TryResolve<T>()
        {
            return _container.TryGetInstance<T>();
        }

        public T Resolve<T>()
        {
            return _container.GetInstance<T>();
        }
    }
}
