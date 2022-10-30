using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ToDoList.DataAccess.EfCore;
using ToDoList.DataAccess.EfCore.Services.Contract;
using ToDoList.DataAccess.EfCore.Services.Implementation;
using ToDoList.Models.Business.Service.Implementation;
using ToDoList.Models.Business.Service.Interface;

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
                   services.AddDbContext<ToDoListContext>(options => options.UseNpgsql(_configuration.GetConnectionString("PostgresConnection")));
                   services.AddScoped<IDataUserService, DataUserService>();
                   services.AddScoped<IUserService, UserService>();
               })
               .Build();

        host.Run();


    }
}
