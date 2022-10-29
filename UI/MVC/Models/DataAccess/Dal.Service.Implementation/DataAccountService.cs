namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;

    public class DataAccountService : IDataAccountService
    {
        public static int UserId;
        private readonly string _connectionString;

        public DataAccountService(IConfiguration configuration)
        {
            this._connectionString = configuration.GetConnectionString("DataToDoListContext");
        }

        public async Task<int> SetUserAccountId(string email, string password)
        {
            using (var db = new DataToDoListContext(this.Options()))
            {
                var getAccoundUser = await db.Users.Where(x => x.Email == email && x.Password == password).FirstOrDefaultAsync();
                UserId = getAccoundUser.UserAccountId;
                return getAccoundUser.UserAccountId;
            }
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
