namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;
    using ToDoList.Models.Helpers;
    using Task = Entites.Task;

    public class DataTaskService : IDataTaskService
    {
        private readonly DataToDoListContext _context;

        public DataTaskService(DataToDoListContext context)
        {
            _context = context;
        }

        public async void CreateTask(Task item)
        {

            if (string.IsNullOrWhiteSpace(item.Name))
            {
                throw new AppException("Name is required");
            }

            _context.Tasks.Add(item);

            var categories = await _context.Categories.ToListAsync();

            foreach (var category in categories.Where(category => category.Id == item.CategoryId))
            {
                ++category.TaskCounts;
            }

            await _context.SaveChangesAsync();

        }

        /// <inheritdoc/>
        public async void DeleteTask(int id)
        {

            var task = _context.Tasks.Find(id);
            await System.Threading.Tasks.Task.Run(() => --_context.Categories.Find((task.CategoryId)).TaskCounts);
            await System.Threading.Tasks.Task.Run(() => _context.Tasks.Remove(task));
            await _context.SaveChangesAsync();

        }

        public async Task<Task> GetTask(int id)
        {

            return await _context.Tasks.FindAsync(id);

        }

        public async Task<List<Task>> GetTaskList(int userAccountId)
        {

            return await _context.Tasks.Where(x => x.UserAccountId == userAccountId).ToListAsync();

        }

        public async Task<int> TaskCount(int categoryId)
        {
            var count = 0;

            var categories = await _context.Categories.ToListAsync();

            count += categories.Count(item => item.Id == categoryId);

            return await System.Threading.Tasks.Task.Run(() => count);

        }

        public async Task<Task> UpdateTask(Task task)
        {

            _context.Tasks.Update(task);
            await _context.SaveChangesAsync();


            return task;
        }


    }
}
