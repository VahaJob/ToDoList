namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;
    using ToDoList.Models.Helpers;
    using Task = Entites.Task;

    public class DataTaskService : IDataTaskService
    {
        private readonly string _connectionString;

        public DataTaskService(IConfiguration configuration)
        {
            this._connectionString = configuration.GetConnectionString("DataToDoListContext");
        }

        public async void CreateTask(Task item)
        {
            using (var db = new DataToDoListContext(Options()))
            {
                if (string.IsNullOrWhiteSpace(item.Name))
                {
                    throw new AppException("Name is required");
                }

                db.Tasks.Add(item);

                var categories = await db.Categories.ToListAsync();

                foreach (var category in categories.Where(category => category.Id==item.CategoryId))
                {
                    ++category.TaskCounts;
                }

                await db.SaveChangesAsync();
            }
        }

        /// <inheritdoc/>
        public async void DeleteTask(int id)
        {
            using (var db = new DataToDoListContext(Options()))
            {
                var task = db.Tasks.Find(id);
                await System.Threading.Tasks.Task.Run(()=> --db.Categories.Find((task.CategoryId)).TaskCounts);
                await System.Threading.Tasks.Task.Run(() =>  db.Tasks.Remove(task));
                await db.SaveChangesAsync();
            }
        }

        public async Task<Task> GetTask(int id)
        {
            using (var db = new DataToDoListContext(Options()))
            {
                return await db.Tasks.FindAsync(id);
            }
        }

        public async Task<List<Task>> GetTaskList(int  userAccountId )
        {
            using (var db = new DataToDoListContext(Options()))
            {
                return await db.Tasks.Where(x => x.UserAccountId == userAccountId).ToListAsync();
            }
        }

        public async Task<int> TaskCount(int categoryId)
        {
            var count = 0;
            using (var db = new DataToDoListContext(Options()))
            {
                var categories = await db.Categories.ToListAsync();

                count += categories.Count(item => item.Id == categoryId);

                return await System.Threading.Tasks.Task.Run(() => count);
            }
        }

        public async Task<Task> UpdateTask(Task task)
        {
            using (var db = new DataToDoListContext(Options()))
            {
                db.Tasks.Update(task);
                await db.SaveChangesAsync();
            }

            return task;
        }

        private DbContextOptions<DataToDoListContext> Options()
        {
            var optionsBuilder = new DbContextOptionsBuilder<DataToDoListContext>();
            var options = optionsBuilder.UseSqlServer(_connectionString)
              .Options;
            return options;
        }
    }
}
