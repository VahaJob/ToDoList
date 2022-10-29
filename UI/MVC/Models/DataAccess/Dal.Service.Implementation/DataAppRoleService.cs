namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;

    public class DataAppRoleService : IDataAppRole
    {
        private readonly string _connectionString;

        public DataAppRoleService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DataToDoListContext");
        }

        private DbContextOptions<DataToDoListContext> Options()
        {
            var optionsBuilder = new DbContextOptionsBuilder<DataToDoListContext>();
            var options = optionsBuilder.UseSqlServer(_connectionString)
              .Options;
            return options;
        }
    }
}
