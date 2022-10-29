namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using ToDoList.Models.DataAccess.Dal.Entites;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;
    using Task = System.Threading.Tasks.Task;

    public class DataCategoryService : IDataCategoryService
    {
        private readonly string _connectionString;

        private DataToDoListContext _context { get; }

        public DataCategoryService(IConfiguration configuration, DataToDoListContext context)
        {
            _context = context;
            _connectionString = configuration.GetConnectionString("DataToDoListContext");
        }

        private DbContextOptions<DataToDoListContext> Options()
        {
            var optionsBuilder = new DbContextOptionsBuilder<DataToDoListContext>();
            var options = optionsBuilder.UseSqlServer(_connectionString)
                .Options;
            return options;
        }

        public async Task<bool> CreateCategory(Category category)
        {

            using (var db = new DataToDoListContext(Options()))
            {
                User user = await db.Users.FirstOrDefaultAsync(x => x.UserAccountId == category.UserAccountId);
                var isContains = false;
                var names = await db.Categories.Where(x => x.UserAccountId == category.UserAccountId).ToListAsync();
                foreach (var item in names)
                {
                    if (item.Name.Contains(category.Name))
                    {
                        isContains = true;
                    }
                }

                var isChek = Categories(user.UserAccountId).Result.FirstOrDefault(x => x.Name == category.Name);

                if (!isContains)
                {
                    db.Categories.Add(category);
                    await db.SaveChangesAsync();
                }
                else
                {
                    throw new Exception($"{category.Name} is already exist in DataBase, please crete another name");
                }
            }

            return true;
        }

        public async void DeleteCategory(int? id)
        {
            using (var db = new DataToDoListContext(Options()))
            {
                var category = await db.Categories.FirstOrDefaultAsync(m => m.Id == id);

                var tasks = db.Tasks.ToList();

                if (tasks != null)
                {
                    foreach (var item in tasks)
                    {
                        if (category.Id == item.CategoryId)
                        {
                            db.Tasks.Remove(item);
                        }
                    }

                    db.Categories.Remove(category);

                    await db.SaveChangesAsync();
                }
            }
        }

        public async Task<Category> UpdateCategory(Category category)
        {
            if (category.Name == null)
            {
                return category;
            }

            using (var db = new DataToDoListContext(Options()))
            {
                db.Categories.Update(category);
                await db.SaveChangesAsync();
            }

            return category;
        }

        public async Task<List<Category>> Categories(int? userAccountId)
        {
            using (var db = new DataToDoListContext(Options()))
            {
                User getUser = await db.Users.FirstOrDefaultAsync(x => x.UserAccountId == userAccountId);

                List<Category> categories = new List<Category>();

                foreach (Category item in db.Categories.ToList())
                {
                    if (item.UserAccountId == userAccountId)
                    {
                        categories.Add(item);
                    }
                }

                return await Task.Run(() => categories);
            }
        }
    }
}