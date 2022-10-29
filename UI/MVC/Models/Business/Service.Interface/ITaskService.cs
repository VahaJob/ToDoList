namespace ToDoList.Models.Business.Service.Interface
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Task = Entites.Task;

    public interface ITaskService
    {
        Task<List<Task>> GetTaskList(int userAccountId);

        Task <Task> GetTask(int id);

        void CreateTask(Task item);

        Task<Task> UpdateTask(Task item);

        void DeleteTask(int id);
    }
}
