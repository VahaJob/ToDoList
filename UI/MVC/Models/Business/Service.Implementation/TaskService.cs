namespace ToDoList.Models.Business.Service.Implementation
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.Helpers;
    using Task = Entites.Task;

    public class TaskService : ITaskService
    {
        private readonly IDataTaskService _dataTaskService;

        public TaskService(IDataTaskService dataTaskService)
        {
            _dataTaskService = dataTaskService;
        }

        public async void CreateTask(Task item)
        {
           var convert = CommonConverter.FromBlToDal(item);

           await System.Threading.Tasks.Task.Run(() => _dataTaskService.CreateTask(convert));
        }

        public async void DeleteTask(int id)
        {
            await System.Threading.Tasks.Task.Run(() => _dataTaskService.DeleteTask(id));
        }

        public async Task<Task> GetTask(int id)
        {
            var task = _dataTaskService.GetTask(id).Result;
            CommonConverter.FromDalToBl(task);
            var res = await System.Threading.Tasks.Task.Run(() => _dataTaskService.GetTask(id));
            return await System.Threading.Tasks.Task.Run(()=> CommonConverter.FromDalToBl(res));
        }

        /// <inheritdoc/>
        public async Task<List<Task>> GetTaskList(int userAccountId)
        {
            return await System.Threading.Tasks.Task.Run(() => _dataTaskService.GetTaskList(userAccountId).Result.Select(CommonConverter.FromDalToBl).ToList());
        }

        public async Task<Task> UpdateTask(Task item)
        {
            DataAccess.Dal.Entites.Task convertTask = CommonConverter.FromBlToDal(item);
            DataAccess.Dal.Entites.Task res = await _dataTaskService.UpdateTask(convertTask);
            return await System.Threading.Tasks.Task.Run(() => CommonConverter.FromDalToBl(res));
        }
    }
}
