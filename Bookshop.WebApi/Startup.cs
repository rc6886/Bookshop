using System.Reflection;
using Bookshop.ServiceInterface.IoC;
using Bookshop.ServiceInterface.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
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
        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseServiceStack(new AppHost());
        }
    }

    public class AppHost : AppHostBase
    {
        public AppHost() : base("Bookshop.WebApi", typeof(BooksService).GetTypeInfo().Assembly)
        {
        }

        public override void Configure(Container container)
        {
            container.Adapter = new StructureMapContainerAdapter();
        }
    }

    public class StructureMapContainerAdapter : IContainerAdapter
    {
        private readonly IContainer _container = new StructureMap.Container(new BookshopServiceRegistry());

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
