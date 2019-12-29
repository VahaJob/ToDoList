﻿namespace ToDoList.Models.Business.Service.Implementation
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using ToDoList.Models.Business.Entites;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.Helpers;
    using Task = System.Threading.Tasks.Task;

    public class UserService : IUserService
    {
        private readonly IDataUserService _dataUserService;

        public UserService(IDataUserService dataUserService)
        {
            _dataUserService = dataUserService;
        }

        public async void Create(User authUser)
        {
              DataAccess.Dal.Entites.User convert = CommonConverter.FromBlToDal(authUser);

              await Task.Run(()=>_dataUserService.Create(convert));
        }

        public async Task<List<User>> GetRegistrationUsers()
        {
         return  await Task.Run(()=> _dataUserService.GetRegistrationUsers().Result.
             Select(dbData => CommonConverter.FromDalToBl(dbData)).ToList());
        }
    }
}
