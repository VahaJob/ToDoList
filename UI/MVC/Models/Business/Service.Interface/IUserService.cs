namespace ToDoList.Models.Business.Service.Interface
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using ToDoList.Models.Business.Entites;

    public interface IUserService
    {
           void Create(User authUser);

           Task<List<User>> GetRegistrationUsers();

           Task<User> GetUser(string email);
    }
}
