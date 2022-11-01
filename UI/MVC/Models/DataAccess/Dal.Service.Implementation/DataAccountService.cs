namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;

    public class DataAccountService : IDataAccountService
    {
        public static int UserId;
        private readonly DataToDoListContext _context;

        public DataAccountService(DataToDoListContext context)
        {
            _context = context;
        }

        public async Task<int> SetUserAccountId(string email, string password)
        {
            
                var getAccoundUser = await _context.Users.Where(x => x.Email == email && x.Password == password).FirstOrDefaultAsync();
                UserId = getAccoundUser.UserAccountId;
                return getAccoundUser.UserAccountId;
            
        }

      
    }
}
