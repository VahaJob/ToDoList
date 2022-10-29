namespace ToDoList.Models.Business.Service.Implementation
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using ToDoList.Models.Business.Entites;
    using ToDoList.Models.Business.Service.Interface;
    using ToDoList.Models.DataAccess.Dal.Service.Interface;
    using ToDoList.Models.Helpers;
    using Task = System.Threading.Tasks.Task;

    public class CategoryService : ICategoryService
    {
        private readonly IDataCategoryService _dataCategoryService;

        public CategoryService(IDataCategoryService dataCategoryService)
        {
            _dataCategoryService = dataCategoryService;
        }

        public async Task<bool> CreateCategory(Category category)
        {
            var convert = CommonConverter.FromBlToDal(category);
            return await Task.Run(()=> _dataCategoryService.CreateCategory(convert));
        }

        public async Task<List<Category>> CategoriesAsync(int? userAccountId) {

           return await Task.Run(() => _dataCategoryService.Categories(userAccountId).Result.Select(CommonConverter.FromDalToBl).ToList());
        }

        /// <inheritdoc/>
        public async void DeleteCategory(int? id)
        {
            await Task.Run(() => _dataCategoryService.DeleteCategory(id));
        }

        public async Task<Category> UpdateCategory(Category category)
        {
            DataAccess.Dal.Entites.Category convertCategory = CommonConverter.FromBlToDal(category);
            DataAccess.Dal.Entites.Category res = await _dataCategoryService.UpdateCategory(convertCategory);
            return await Task.Run(() => CommonConverter.FromDalToBl(res));
        }
    }
}
