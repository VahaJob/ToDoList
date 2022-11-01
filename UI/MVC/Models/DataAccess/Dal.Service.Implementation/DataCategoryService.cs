namespace ToDoList.Models.DataAccess.Dal.Service.Implementation
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using ToDoList.Models.DataAccess.Dal.Entites;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.DataAccess.Data;
    using Task = System.Threading.Tasks.Task;

    public class DataCategoryService : IDataCategoryService
    {
        private DataToDoListContext _context { get; }

        public DataCategoryService(DataToDoListContext context)
        {
            _context = context;
        }



        public async Task<bool> CreateCategory(Category category)
        {

         
                User user = await _context.Users.FirstOrDefaultAsync(x => x.UserAccountId == category.UserAccountId);
                var isContains = false;
                var names = await _context.Categories.Where(x => x.UserAccountId == category.UserAccountId).ToListAsync();
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
                _context.Categories.Add(category);
                    await _context.SaveChangesAsync();
                }
                else
                {
                    throw new Exception($"{category.Name} is already exist in DataBase, please crete another name");
                }
            

            return true;
        }

        public async void DeleteCategory(int? id)
        {
            
                var category = await _context.Categories.FirstOrDefaultAsync(m => m.Id == id);

                var tasks = _context.Tasks.ToList();

                if (tasks != null)
                {
                    foreach (var item in tasks)
                    {
                        if (category.Id == item.CategoryId)
                        {
                        _context.Tasks.Remove(item);
                        }
                    }

                _context.Categories.Remove(category);

                    await _context.SaveChangesAsync();
                }
            
        }

        public async Task<Category> UpdateCategory(Category category)
        {
            if (category.Name == null)
            {
                return category;
            }


            _context.Categories.Update(category);
                await _context.SaveChangesAsync();
            

            return category;
        }

        public async Task<List<Category>> Categories(int? userAccountId)
        {
            
                User getUser = await _context.Users.FirstOrDefaultAsync(x => x.UserAccountId == userAccountId);

                List<Category> categories = new List<Category>();

                foreach (Category item in _context.Categories.ToList())
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