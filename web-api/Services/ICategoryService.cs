using System.Collections.Generic;
using web_api.Models;

namespace web_api.Services
{
    public interface ICategoryService
    {
        void addCategory(Category category);
        IEnumerable<Category> GetAllCategories();
    }
}