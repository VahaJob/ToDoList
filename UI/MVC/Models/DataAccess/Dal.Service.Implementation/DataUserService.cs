namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using ToDoList.Models.DataAccess.Dal.Entites;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;
    using ToDoList.Models.Helpers;

    public class DataUserService : IDataUserService
    {
        private readonly string _connectionString;

        public DataUserService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DataToDoListContext");
        }

        public async void Create(User user)
        {
            using (var db = new DataToDoListContext(Options()))
            {
                if (string.IsNullOrWhiteSpace(user.Password))
                {
                    throw new AppException("Password is required");
                }

                var res = await db.Users.AnyAsync(x => x.Email == user.Email);
                if (res)
                {
                    throw new AppException("Email \"" + user.Email + "\" is already taken");
                }

                await db.Users.AddAsync(user);
                await db.SaveChangesAsync();
            }
        }

        public async Task<List<User>> GetRegistrationUsers()
        {
            using (var db = new DataToDoListContext(Options()))
            {
                return await db.Users.ToListAsync();
            }
        }

        public async Task<User> GetUser(string email)
        {
            using (var db = new DataToDoListContext(Options()))
            {
                var user = await db.Users.FirstOrDefaultAsync(x => x.Email == email);
                return await db.Users.FirstOrDefaultAsync(x => x.Email == email);
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