namespace ToDoList.Models.DataAccess.Dal.Service.Interface
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using ToDoList.Models.DataAccess.Dal.Entites;

    public interface IDataCategoryService
    {
        Task<bool> CreateCategory(Category category);

        Task<Category> UpdateCategory(Category category);

        Task<List<Category>> Categories(int? userAccountId);

        void DeleteCategory(int? id);
    }
}