using Marten;
using StructureMap;
using StructureMap.Pipeline;

namespace Bookshop.ServiceInterface.IoC
{
    public class BookshopServiceRegistry : Registry
    {
        public BookshopServiceRegistry(string connectionString)
        {
            ForSingletonOf<IDocumentStore>().Use("Build the DocumentStore Singleton", () =>
            {
                return DocumentStore.For(options =>
                {
                    options.Connection(connectionString);
                    options.AutoCreateSchemaObjects = AutoCreate.CreateOrUpdate;
                });
            });

            For<IDocumentSession>()
                .LifecycleIs<TransientLifecycle>()
                .Use("Lightweight Session", context => context.GetInstance<IDocumentStore>().LightweightSession());
        }
    }
}
