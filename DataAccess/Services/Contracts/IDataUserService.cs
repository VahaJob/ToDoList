namespace ToDoList.DataAccess.EfCore.Services.Contract
{
    using System.Collections.Generic;
    using ToDoList.DataAccess.Entites;

    public interface IDataUserService
    {
           void Create(User user);

           List<User> GetUsers();

           User GetUserByEmail(string email);
    }
}
