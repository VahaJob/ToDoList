namespace ToDoList.Models.Business.Service.Implementation
{
    using System.Collections.Generic;
    using ToDoList.Core.Entites;
    using ToDoList.DataAccess.EfCore;
    using ToDoList.Models.Business.Service.Interface;
    using Microsoft.Extensions.Configuration;
    public class UserService : IUserService
    {
        public UserService( )
        {
   
        }
        public void Create(User user)
        {
            throw new NotImplementedException();
        }

       public List<User> GetUsers()
        {
            throw new NotImplementedException();
        }

       public User GetUserByEmail(string email)
        {
            throw new NotImplementedException();
        }
    }
}
