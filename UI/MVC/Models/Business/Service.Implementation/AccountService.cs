namespace ToDoList.Models.Business.Service.Implementation
{
    using System.Threading.Tasks;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;

    public class AccountService : IAccountService
    {
        private readonly IDataAccountService _dataAccountService;

        public AccountService(IDataAccountService dataAccountService)
        {
            _dataAccountService = dataAccountService;
        }

        public async Task<int> SetUserAccountId(string email, string password) =>
          await Task.Run(() => _dataAccountService.SetUserAccountId(email, password));

    }
}
