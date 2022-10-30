using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ToDoList.DataAccess.EfCore;
using ToDoList.Models.Business.Service.Implementation;
public class Program
{

    static void Main(string[] args)
    {
        var _configuration = new ConfigurationBuilder().
              SetBasePath(Directory.GetCurrentDirectory()).
              AddJsonFile("appsettings.json").Build();

        IHost host = Host.CreateDefaultBuilder(args)
               
               .ConfigureServices(services =>
               {
                   services.AddDbContext<ToDoListContext>(options =>

               options.UseNpgsql(_configuration.GetConnectionString("PostgresConnection")));
               })
               .Build();

        host.Run();

       

    }
}
