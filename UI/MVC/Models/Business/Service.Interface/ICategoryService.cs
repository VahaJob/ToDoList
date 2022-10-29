namespace ToDoList.Models.Business.Service.Interface
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using ToDoList.Models.Business.Entites;

    public interface ICategoryService
    {
         Task<bool> CreateCategory(Category category);

         Task<Category> UpdateCategory(Category category);

         void DeleteCategory(int? id);

         Task<List<Category>> CategoriesAsync(int? userAccountId);
    }
}
