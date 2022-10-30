namespace ToDoList.Models.Business.Service.Implementation
{
    using System.Collections.Generic;
    using ToDoList.Core.Entites;
    using ToDoList.DataAccess.EfCore.Services.Contract;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.Helpers;

    public class UserService : IUserService
    {
        private readonly IDataUserService _dataUserService;
        public UserService(IDataUserService dataUserService)
        {
            _dataUserService = dataUserService;
        }
        public void Create(User user)
        {
            var convert = CommonConverter.FromBlToDal(user);
            _dataUserService.Create(convert);
        }

        public List<User> GetUsers()
        {
            return _dataUserService.GetUsers().Select(CommonConverter.FromDalToBl).ToList(); ;
        }

        public User GetUserByEmail(string email)
        {
            return CommonConverter.FromDalToBl(_dataUserService.GetUserByEmail(email));
        }
    }
}