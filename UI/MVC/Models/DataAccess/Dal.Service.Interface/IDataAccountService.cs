namespace ToDoList.Models.DataAccess.Dal.Service.Interface
{
    using System.Threading.Tasks;

    public interface IDataAccountService
    {
        Task<int> SetUserAccountId(string email, string password);
    }
}
