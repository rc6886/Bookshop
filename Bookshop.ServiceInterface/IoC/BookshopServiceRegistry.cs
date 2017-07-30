using Marten;
using StructureMap;
using StructureMap.Pipeline;

namespace Bookshop.ServiceInterface.IoC
{
    public class BookshopServiceRegistry : Registry
    {
        public BookshopServiceRegistry()
        {
            ForSingletonOf<IDocumentStore>().Use("Build the DocumentStore Singleton", () =>
            {
                return DocumentStore.For(options =>
                {
                    options.Connection("host=localhost;database=marten_test;password=Blinds!@;username=postgres");
                    options.AutoCreateSchemaObjects = AutoCreate.All;
                });
            });

            For<IDocumentSession>()
                .LifecycleIs<TransientLifecycle>()
                .Use("Lightweight Session", context => context.GetInstance<IDocumentStore>().LightweightSession());
        }
    }
}
