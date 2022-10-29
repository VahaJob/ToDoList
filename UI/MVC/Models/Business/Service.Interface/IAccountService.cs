using System.Threading.Tasks;

namespace ToDoList.Models.Business.Service.Interface
{
        
    public interface IAccountService
    {
        Task<int> SetUserAccountId(string email, string password);
    }

}
