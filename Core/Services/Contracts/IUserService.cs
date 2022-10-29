namespace ToDoList.Models.Business.Service.Interface
{
    using System.Collections.Generic;
    using ToDoList.Core.Entites;

    public interface IUserService
    {
           void Create(User user);

           List<User> GetUsers();

           User GetUserByEmail(string email);
    }
}
