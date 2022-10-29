namespace ToDoList.Models.DataAccess.Dal.Service.Interface
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using ToDoList.Models.DataAccess.Dal.Entites;

    public interface IDataUserService
    {
        void Create(User user);

        Task <List<User>> GetRegistrationUsers();

        Task<User> GetUser(string email);
    }
}
