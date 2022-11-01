namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using ToDoList.Models.DataAccess.Dal.Entites;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;
    using ToDoList.Models.Helpers;

    public class DataUserService : IDataUserService
    {
        private readonly DataToDoListContext _context;

        public DataUserService(DataToDoListContext context)
        {
            _context = context;
        }

        public async void Create(User user)
        {
          
                if (string.IsNullOrWhiteSpace(user.Password))
                {
                    throw new AppException("Password is required");
                }

                var res = await _context.Users.AnyAsync(x => x.Email == user.Email);
                if (res)
                {
                    throw new AppException("Email \"" + user.Email + "\" is already taken");
                }

                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();
            
        }

        public async Task<List<User>> GetRegistrationUsers()
        {
            
                return await _context.Users.ToListAsync();
            
        }

        public async Task<User> GetUser(string email)
        {
            
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
                return await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
            
        }

     
    }
}